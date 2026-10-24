import { useEffect } from 'react';
import { profile } from '../content';

/** Sets a descriptive document title per page (helps SEO, bookmarks and screen readers). */
export function usePageTitle(page?: string) {
  useEffect(() => {
    const base = `${profile.name} — ${profile.role}`;
    document.title = page ? `${page} · ${profile.name}` : base;
  }, [page]);
}
