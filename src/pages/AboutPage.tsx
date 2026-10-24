import { Link } from 'react-router-dom';
import { experience, profile, skills } from '../content';
import { assetUrl } from '../lib/asset';
import { usePageTitle } from '../lib/usePageTitle';

export default function AboutPage() {
  usePageTitle('About');
  return (
    <div className="stack-lg narrow">
      <section className="stack">
        <h1>About me</h1>
        {profile.about.map((p, i) => (
          <p key={i} className={i === 0 ? 'lead' : ''}>
            {p}
          </p>
        ))}
        <dl className="facts">
          <div>
            <dt>Based in</dt>
            <dd>{profile.location}</dd>
          </div>
          <div>
            <dt>Work rights</dt>
            <dd>{profile.workRights}</dd>
          </div>
          <div>
            <dt>Looking for</dt>
            <dd>{profile.role} roles</dd>
          </div>
        </dl>
      </section>

      <section className="stack">
        <h2>Experience &amp; education</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={`${e.title}-${e.period}`}>
              <div className="timeline-head">
                <h3>{e.title}</h3>
                <span className="muted small">{e.period}</span>
              </div>
              <p className="muted">
                {e.org} · {e.location}
              </p>
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="stack">
        <h2>Skills</h2>
        {skills.map((g) => (
          <div key={g.group} className="skill-row">
            <h3>{g.group}</h3>
            <ul className="chips">
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <div className="row">
        <Link to="/projects" className="btn btn-primary">
          See my work
        </Link>
        {profile.resume && (
          <a href={assetUrl(profile.resume)} className="btn" download>
            Download CV
          </a>
        )}
      </div>
    </div>
  );
}
