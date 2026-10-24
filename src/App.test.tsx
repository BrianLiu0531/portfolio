import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { projects } from './content';
import { sharedTech } from './pages/ProjectsPage';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

beforeAll(() => {
  window.scrollTo = vi.fn();
});

describe('content', () => {
  it('has unique project slugs and complete case studies', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) {
      expect(p.features.length).toBeGreaterThan(0);
      expect(p.highlights.length).toBeGreaterThan(0);
      expect(p.github).toMatch(/^https:\/\/github\.com\//);
    }
  });
});

describe('pages', () => {
  it('shows every project on the home page', () => {
    renderAt('/');
    for (const p of projects) expect(screen.getAllByRole('link', { name: p.name })[0]).toBeInTheDocument();
  });

  it('filters projects by technology', async () => {
    const user = userEvent.setup();
    renderAt('/projects');
    const unique = projects.flatMap((p) => p.stack).find((s) => projects.filter((p) => p.stack.includes(s)).length === 1)!;
    const group = screen.getByRole('group', { name: 'Filter by technology' });
    expect(sharedTech(projects)).toContain(unique);

    await user.click(within(group).getByRole('button', { name: unique }));
    expect(screen.getByText(`Showing 1 of ${projects.length} projects using ${unique}`)).toBeInTheDocument();
    expect(within(group).getByRole('button', { name: unique })).toHaveAttribute('aria-pressed', 'true');
  });

  it('renders a case study with highlights and demo logins', () => {
    const p = projects[0];
    renderAt(`/projects/${p.slug}`);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(p.name);
    expect(screen.getByText(p.highlights[0].title)).toBeInTheDocument();
    expect(screen.getByText(p.demoLogins![0].email)).toBeInTheDocument();
  });

  it('shows a not-found page for unknown routes and slugs', () => {
    renderAt('/projects/does-not-exist');
    expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  });
});
