export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  /** Honeypot: hidden from humans, so any value means a bot filled the form */
  website: string;
}

export type ContactErrors = Partial<Record<keyof ContactMessage, string>>;

export function validateContact(m: ContactMessage): ContactErrors {
  const errors: ContactErrors = {};
  if (!m.name.trim()) errors.name = 'Please tell me your name';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m.email.trim())) errors.email = 'Enter a valid email address';
  if (m.message.trim().length < 10) errors.message = 'Message should be at least 10 characters';
  return errors;
}

export function mailtoLink(to: string, m: ContactMessage): string {
  const subject = `Portfolio enquiry from ${m.name.trim()}`;
  const body = `${m.message.trim()}\n\n— ${m.name.trim()} (${m.email.trim()})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Sends via a form service (Formspree, Web3Forms, etc.) when VITE_CONTACT_ENDPOINT
 * is set; otherwise returns 'mailto' so the caller opens the visitor's email app.
 */
export async function sendContact(m: ContactMessage, endpoint: string | undefined): Promise<'sent' | 'mailto'> {
  if (m.website) return 'sent'; // silently drop bot submissions
  if (!endpoint) return 'mailto';
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ name: m.name.trim(), email: m.email.trim(), message: m.message.trim() }),
  });
  if (!res.ok) throw new Error('Message could not be sent');
  return 'sent';
}
