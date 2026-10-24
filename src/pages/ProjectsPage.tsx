import { useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects, type Project } from '../content';
import { usePageTitle } from '../lib/usePageTitle';

/** Technologies used by more than one project, most common first. */
export function sharedTech(list: Project[]): string[] {
  const counts = new Map<string, number>();
  for (const p of list) for (const s of p.stack) counts.set(s, (counts.get(s) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(([s]) => s);
}

export default function ProjectsPage() {
  usePageTitle('Projects');
  const [params, setParams] = useSearchParams();
  const active = params.get('tech');
  const shown = active ? projects.filter((p) => p.stack.includes(active)) : projects;

  return (
    <div className="stack">
      <div>
        <h1>Projects</h1>
        <p className="muted">Full-stack applications with tests, CI and documentation. Each one has a demo account you can log in with.</p>
      </div>

      <div className="filters" role="group" aria-label="Filter by technology">
        <button className={`chip-button ${!active ? 'active' : ''}`} aria-pressed={!active} onClick={() => setParams({})}>
          All
        </button>
        {sharedTech(projects).map((t) => (
          <button key={t} className={`chip-button ${active === t ? 'active' : ''}`} aria-pressed={active === t} onClick={() => setParams({ tech: t })}>
            {t}
          </button>
        ))}
      </div>

      <p className="muted small" aria-live="polite">
        Showing {shown.length} of {projects.length} projects{active ? ` using ${active}` : ''}
      </p>
      <div className="project-grid">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
