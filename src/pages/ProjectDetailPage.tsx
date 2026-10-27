import { Link, useParams } from 'react-router-dom';
import { ProjectCover } from '../components/ProjectCard';
import { projects } from '../content';
import { usePageTitle } from '../lib/usePageTitle';
import NotFoundPage from './NotFoundPage';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  usePageTitle(project?.name ?? 'Not found');
  if (!project) return <NotFoundPage />;

  const next = projects[(index + 1) % projects.length];

  return (
    <article className="stack-lg narrow">
      <div className="stack">
        <Link to="/projects" className="muted small">
          ← All projects
        </Link>
        <h1>
          {project.name} <span className="muted thin">— {project.tagline}</span>
        </h1>
        <p className="lead">{project.summary}</p>
        <div className="row">
          {project.demo && (
            <a href={project.demo} className="btn btn-primary" target="_blank" rel="noreferrer noopener">
              {project.demoLabel ?? 'Live demo'} ↗
            </a>
          )}
          <a href={project.github} className={`btn ${project.demo ? '' : 'btn-primary'}`} target="_blank" rel="noreferrer noopener">
            Source code ↗
          </a>
        </div>
        {project.demo?.includes('onrender.com') && (
          <p className="muted small">The demo runs on a free plan that sleeps when idle, so the first visit can take up to a minute to wake up.</p>
        )}
      </div>

      <ProjectCover project={project} large />

      <section className="stack">
        <h2>The problem</h2>
        <p>{project.problem}</p>
      </section>

      <section className="stack">
        <h2>What it does</h2>
        <ul className="feature-list">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="stack">
        <h2>Technical highlights</h2>
        <div className="highlights">
          {project.highlights.map((h) => (
            <div key={h.title} className="card">
              <h3>{h.title}</h3>
              <p className="muted">{h.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="card detail-meta">
        <div>
          <h3>Tech stack</h3>
          <ul className="chips">
            {project.stack.map((s) => (
              <li key={s}>
                <Link to={`/projects?tech=${encodeURIComponent(s)}`}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Testing</h3>
          <p className="muted">{project.tests}, run in GitHub Actions on every push.</p>
        </div>
        {project.demoLogins && (
          <div>
            <h3>Try it</h3>
            <ul className="logins">
              {project.demoLogins.map((l) => (
                <li key={l.role}>
                  <strong>{l.role}:</strong> <code>{l.email}</code> / <code>{l.password}</code>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {next.slug !== project.slug && (
        <Link to={`/projects/${next.slug}`} className="card next-project">
          <span className="muted small">Next project</span>
          <strong>
            {next.emoji} {next.name} — {next.tagline} →
          </strong>
        </Link>
      )}
    </article>
  );
}
