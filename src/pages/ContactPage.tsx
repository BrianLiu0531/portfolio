import ContactForm from '../components/ContactForm';
import { profile } from '../content';
import { usePageTitle } from '../lib/usePageTitle';

export default function ContactPage() {
  usePageTitle('Contact');
  return (
    <div className="contact-layout">
      <section className="stack">
        <h1>Let’s work together</h1>
        <p className="lead">
          I’m looking for {profile.role.toLowerCase()} roles in {profile.location} or remote across Australia and New Zealand.
        </p>
        <ul className="contact-list">
          <li>
            <span aria-hidden>✉️</span> <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span aria-hidden>💼</span>{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </li>
          <li>
            <span aria-hidden>🐙</span>{' '}
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
          </li>
          <li>
            <span aria-hidden>📍</span> {profile.location} · {profile.workRights}
          </li>
        </ul>
      </section>
      <ContactForm to={profile.email} endpoint={import.meta.env.VITE_CONTACT_ENDPOINT} />
    </div>
  );
}
