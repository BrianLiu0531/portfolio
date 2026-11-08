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
          I’m looking for {profile.role.toLowerCase()} roles in {profile.targetLocation}, or remote across Australia or New Zealand.
        </p>
        <ul className="contact-list">
          <li>
            <span className="label">Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          <li>
            <span className="label">LinkedIn</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              Cheng-En Liu
            </a>
          </li>
          <li>
            <span className="label">GitHub</span>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              {profile.github.replace('https://', '')}
            </a>
          </li>
          <li>
            <span className="label">Based in</span>
            <span>
              {profile.location}
              <br />
              <span className="muted small">{profile.workRights}</span>
            </span>
          </li>
        </ul>
      </section>
      <ContactForm to={profile.email} endpoint={import.meta.env.VITE_CONTACT_ENDPOINT} />
    </div>
  );
}
