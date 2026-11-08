import { Link } from 'react-router-dom';
import ProjectCard, { FeatureProject } from '../components/ProjectCard';
import { profile, projects, skills } from '../content';
import { assetUrl } from '../lib/asset';
import { usePageTitle } from '../lib/usePageTitle';

/** How many projects get the large layout; the rest go in the grid. */
const FEATURED = 3;

export default function HomePage() {
  usePageTitle();
  const lead = projects.slice(0, FEATURED);
  const rest = projects.slice(FEATURED);

  return (
    <div className="stack-lg">
      <section className="hero" aria-labelledby="hero-title">
        {profile.available && (
          <p className="availability">
            <span className="dot" aria-hidden /> Open to work in {profile.targetLocation}
          </p>
        )}
        <h1 id="hero-title">
          {profile.pitch[0]} <em>{profile.pitch[1]}</em>
        </h1>
        <p className="lead">
          I’m {profile.name}, a {profile.role.toLowerCase()}. {profile.headline}
        </p>
        <p className="muted small">{profile.workRights}</p>
        <div className="row">
          <Link to="/projects" className="btn btn-primary">
            See the projects
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
        <dl className="facts-strip">
          <div>
            <dt>7+ years</dt>
            <dd>shipping production software in finance, ERP, IoT and games</dd>
          </div>
          <div>
            <dt>{projects.length} projects</dt>
            <dd>public, documented, and tested in CI on every push</dd>
          </div>
          <div>
            <dt>UTC+8</dt>
            <dd>working remotely with Australian and New Zealand hours</dd>
          </div>
        </dl>
      </section>

      <section className="stack" aria-labelledby="work">
        <div className="section-head">
          <h2 id="work">Selected work</h2>
          <Link to="/projects" className="link-arrow">
            All projects <span className="arr" aria-hidden>→</span>
          </Link>
        </div>
        <div className="featured">
          {lead.map((p) => (
            <FeatureProject key={p.slug} project={p} />
          ))}
        </div>
        <div className="project-grid" style={{ marginTop: '3rem' }}>
          {rest.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="stack" aria-labelledby="tools">
        <div className="section-head">
          <h2 id="tools">What I work with</h2>
        </div>
        <ul className="rows">
          {skills.map((g) => (
            <li key={g.group}>
              <h3>{g.group}</h3>
              <p>{g.items.join(' · ')}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="cta" aria-labelledby="hire">
        <div>
          <h2 id="hire">Hiring a full stack engineer?</h2>
          <p className="muted">
            I’m available for full-time and contract roles in {profile.targetLocation}, or remote across Australia or New Zealand.
          </p>
        </div>
        <Link to="/contact" className="btn btn-primary">
          Get in touch
        </Link>
      </section>
    </div>
  );
}
