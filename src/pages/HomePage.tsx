import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { profile, projects, skills } from '../content';
import { assetUrl } from '../lib/asset';
import { usePageTitle } from '../lib/usePageTitle';

export default function HomePage() {
  usePageTitle();
  return (
    <div className="stack-lg">
      <section className="hero">
        {profile.available && (
          <p className="availability">
            <span className="dot" aria-hidden /> Open to work in {profile.targetLocation}
          </p>
        )}
        <h1>
          Hi, I’m {profile.name}.
          <br />
          <span className="accent">{profile.role}</span>
        </h1>
        <p className="lead">{profile.headline}</p>
        <p className="muted">{profile.workRights}</p>
        <div className="row">
          <Link to="/projects" className="btn btn-primary">
            View projects
          </Link>
          <Link to="/contact" className="btn">
            Get in touch
          </Link>
          {profile.resume && (
            <a href={assetUrl(profile.resume)} className="btn btn-ghost" download>
              Download CV
            </a>
          )}
        </div>
      </section>

      <section className="stack">
        <div className="section-head">
          <h2>Featured projects</h2>
          <Link to="/projects">All projects →</Link>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="stack">
        <h2>What I work with</h2>
        <div className="skills-grid">
          {skills.map((g) => (
            <div key={g.group} className="card">
              <h3>{g.group}</h3>
              <ul className="chips">
                {g.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="card cta">
        <div>
          <h2>Hiring a full stack engineer?</h2>
          <p className="muted">I’m available for full-time and contract roles in {profile.targetLocation}, or remote across Australia.</p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Let’s talk
        </Link>
      </section>
    </div>
  );
}
