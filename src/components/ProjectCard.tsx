import { Link } from 'react-router-dom';
import type { Project } from '../content';
import { assetUrl } from '../lib/asset';

export function ProjectCover({ project, large }: { project: Project; large?: boolean }) {
  if (project.screenshot) {
    return (
      <img
        className={`cover ${large ? 'cover-large' : ''}`}
        src={assetUrl(project.screenshot)}
        alt={`${project.name} screenshot`}
        loading={large ? 'eager' : 'lazy'}
      />
    );
  }
  // Typographic cover until a real screenshot is added
  return (
    <div className={`cover cover-generated ${large ? 'cover-large' : ''}`} aria-hidden>
      <span className="cover-name">{project.name}</span>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      <Link to={`/projects/${project.slug}`} className="text-link">
        Read the case study
      </Link>
      {project.demo && (
        <a href={project.demo} className="text-link" target="_blank" rel="noreferrer noopener">
          {project.demoLabel ?? 'Live demo'}
          <span className="visually-hidden"> (opens in a new tab)</span>
        </a>
      )}
      <a href={project.github} className="text-link" target="_blank" rel="noreferrer noopener">
        Source on GitHub
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    </div>
  );
}

/** A lead project: a large picture beside its summary. */
export function FeatureProject({ project }: { project: Project }) {
  return (
    <article className="feature">
      <Link to={`/projects/${project.slug}`} className="feature-media" tabIndex={-1} aria-hidden>
        <ProjectCover project={project} />
      </Link>
      <div className="feature-body">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="subhead">{project.tagline}</p>
        <p className="muted">{project.summary}</p>
        <ul className="chips" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card project-card">
      <Link to={`/projects/${project.slug}`} className="cover-link" tabIndex={-1} aria-hidden>
        <ProjectCover project={project} />
      </Link>
      <div className="project-body">
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="subhead">{project.tagline}</p>
        <p className="muted">{project.summary}</p>
        <ul className="chips" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}
