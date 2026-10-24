import { useState, type FormEvent, type ReactNode } from 'react';
import { mailtoLink, sendContact, validateContact, type ContactErrors, type ContactMessage } from '../lib/contact';

interface Props {
  to: string;
  endpoint?: string;
  /** Injected for tests; defaults to navigating to the mailto link */
  openMail?: (href: string) => void;
}

const EMPTY: ContactMessage = { name: '', email: '', message: '', website: '' };

export default function ContactForm({ to, endpoint, openMail = (href) => window.location.assign(href) }: Props) {
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'mailto' | 'error'>('idle');

  const set = (key: keyof ContactMessage) => (e: { target: { value: string } }) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (status !== 'sending') setStatus('idle');
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validateContact(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    try {
      const result = await sendContact(form, endpoint);
      if (result === 'mailto') openMail(mailtoLink(to, form));
      else setForm(EMPTY);
      setStatus(result);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="card form-done" role="status">
        <h2>Thanks — message sent ✓</h2>
        <p className="muted">I’ll get back to you within a couple of days.</p>
        <button className="btn" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="card form" onSubmit={handleSubmit} noValidate>
      <Field id="name" label="Name" error={errors.name}>
        <input id="name" autoComplete="name" value={form.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <input id="email" type="email" autoComplete="email" value={form.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" rows={6} value={form.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={errors.message ? 'message-error' : undefined} />
      </Field>
      {/* Honeypot field, visually hidden and skipped by keyboard users */}
      <label className="honeypot" aria-hidden>
        Website
        <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')} />
      </label>

      {status === 'error' && (
        <p className="error" role="alert">
          Something went wrong. Please email me directly at <a href={`mailto:${to}`}>{to}</a>.
        </p>
      )}
      {status === 'mailto' && (
        <p className="muted small" role="status">
          Your email app should have opened with the message ready to send.
        </p>
      )}
      <button className="btn btn-primary self-start" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}

/** Error text sits outside the <label> so it doesn't become part of the field's accessible name. */
function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <small id={`${id}-error`} className="error">
          {error}
        </small>
      )}
    </div>
  );
}
