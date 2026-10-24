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
        loading="lazy"
      />
    );
  }
  // Generated cover until a real screenshot is added
  return (
    <div
      className={`cover cover-generated ${large ? 'cover-large' : ''}`}
      style={{ background: `linear-gradient(135deg, ${project.colors[0]}, ${project.colors[1]})` }}
      aria-hidden
    >
      <span className="cover-emoji">{project.emoji}</span>
      <span className="cover-name">{project.name}</span>
    </div>
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
        <p className="muted">{project.tagline}</p>
        <p>{project.summary}</p>
        <ul className="chips" aria-label="Tech stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="project-links">
          <Link to={`/projects/${project.slug}`} className="btn btn-small btn-primary">
            Case study
          </Link>
          {project.demo && (
            <a href={project.demo} className="btn btn-small" target="_blank" rel="noreferrer noopener">
              Live demo ↗
            </a>
          )}
          <a href={project.github} className="btn btn-small" target="_blank" rel="noreferrer noopener">
            Code ↗
          </a>
        </div>
      </div>
    </article>
  );
}
