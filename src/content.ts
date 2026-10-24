/**
 * ✏️  All site content lives in this file.
 * Replace every value marked TODO with your own details — no other file needs to change.
 */

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  /** Shown on the generated cover when no screenshot is provided */
  emoji: string;
  /** Two colours for the cover gradient */
  colors: [string, string];
  summary: string;
  problem: string;
  features: string[];
  highlights: { title: string; detail: string }[];
  stack: string[];
  tests: string;
  github: string;
  demo?: string;
  /** Optional screenshot inside /public, e.g. "screenshots/ledgerly.png" */
  screenshot?: string;
  demoLogins?: { role: string; email: string; password: string }[];
}

export interface Experience {
  title: string;
  org: string;
  location: string;
  period: string;
  points: string[];
}

const GITHUB_USER = 'your-github-username'; // TODO

export const profile = {
  name: 'Your Name', // TODO
  role: 'Junior Full Stack Developer', // TODO
  location: 'Melbourne, VIC', // TODO
  /** e.g. "Full working rights (Working Holiday visa)", "Australian PR", "NZ citizen" */
  workRights: 'Full working rights · Working Holiday visa', // TODO
  available: true,
  headline: 'I build full-stack web apps with React, TypeScript, Node.js and PostgreSQL — tested, deployed and designed for real users.',
  // TODO: 2–3 short paragraphs about you
  about: [
    'I’m a developer who enjoys turning messy real-world processes into simple, reliable software. My recent projects are full-stack TypeScript applications built for the Australian and New Zealand market — from GST-aware finance tracking to a job board with work-rights screening.',
    'I care about the things that make software trustworthy: automated tests, sensible authorisation, accessible UI and clear documentation. Every project here has a CI pipeline, a Docker build and a README explaining the trade-offs I made.',
    'Before moving into software I worked in [your previous field], which taught me [a transferable skill — e.g. communicating with customers, working under pressure, attention to detail].',
  ],
  email: 'you@example.com', // TODO
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  /** Put your CV at public/resume.pdf, or set to null to hide the button */
  resume: null as string | null, // TODO: 'resume.pdf'
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript (ES2022)', 'HTML & accessible markup', 'CSS / responsive design', 'TanStack Query', 'React Router', 'Vite'] },
  { group: 'Backend', items: ['Node.js', 'Express', 'REST API design', 'Zod validation', 'JWT & cookie auth', 'Role-based access control'] },
  { group: 'Data', items: ['PostgreSQL', 'Prisma ORM', 'SQL', 'Schema design & indexing', 'pg_trgm search'] },
  { group: 'Quality & DevOps', items: ['Vitest', 'React Testing Library', 'Supertest', 'Docker', 'GitHub Actions CI', 'Git'] },
];

// TODO: replace with your real history (study, jobs, volunteering)
export const experience: Experience[] = [
  {
    title: 'Full Stack Developer (self-directed projects)',
    org: 'Personal portfolio',
    location: 'Remote',
    period: '2026 — present',
    points: [
      'Designed and shipped three full-stack TypeScript applications with role-based access, PostgreSQL and automated test suites (100+ tests in total).',
      'Set up Docker builds and GitHub Actions pipelines that run type checks, unit and integration tests on every push.',
    ],
  },
  {
    title: '[Previous role]',
    org: '[Company]',
    location: '[City, Country]',
    period: '20XX — 20XX',
    points: ['[Achievement with a number, e.g. "Reduced weekly reporting time by 30% by automating a spreadsheet"]', '[Another responsibility relevant to software work]'],
  },
  {
    title: '[Degree or course]',
    org: '[University / bootcamp]',
    location: '[City]',
    period: '20XX — 20XX',
    points: ['[Relevant subjects, final project or award]'],
  },
];

export const projects: Project[] = [
  {
    slug: 'job-portal',
    name: 'Hireloop',
    tagline: 'Job board for Australia & New Zealand',
    emoji: '🧭',
    colors: ['#0f766e', '#14b8a6'],
    summary: 'A three-role job portal (seekers, employers, admins) with visa sponsorship filters, right-to-work profiles and an enforced hiring pipeline.',
    problem:
      'Working-holiday makers and new arrivals waste hours on listings they can’t legally take. Hireloop puts work rights and visa sponsorship front and centre for both candidates and employers.',
    features: [
      'Search by keyword, state/region, salary, work type and visa sponsorship — with shareable URL state',
      'Apply with a cover letter and track each application through a visual pipeline',
      'Employer dashboard with applicant counts and an applicant review workflow',
      'Admin moderation: suspend users and take down listings',
    ],
    highlights: [
      { title: 'Hiring workflow as a state machine', detail: 'Invalid status moves (e.g. Applied → Offered) are rejected with 409, and the API returns the allowed next steps so the UI only shows valid buttons.' },
      { title: 'Instant suspension', detail: 'Roles and suspension are checked against the database on every request rather than trusted from the JWT.' },
      { title: 'Indexed fuzzy search', detail: 'PostgreSQL pg_trgm GIN indexes keep ILIKE keyword search fast as listings grow.' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Docker'],
    tests: '44 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/job-portal`,
    demoLogins: [
      { role: 'Seeker', email: 'seeker@example.com', password: 'Seeker1234!' },
      { role: 'Employer', email: 'employer@example.com', password: 'Employer1234!' },
    ],
  },
  {
    slug: 'lms',
    name: 'Kura',
    tagline: 'Learning management system',
    emoji: '🌿',
    colors: ['#2f6f4f', '#6cc196'],
    summary: 'An LMS where instructors build courses from Markdown lessons, assignments and auto-graded quizzes, and admins manage student records.',
    problem:
      'Small training providers need course delivery, assessment and student records in one place without enterprise LMS complexity.',
    features: [
      'Course builder with modules, Markdown lessons, assignments and a quiz editor',
      'Student dashboard with progress bars, deadlines and recent grades',
      'Grading queue with late flags, feedback and NZQA-style grade bands',
      'Admin student records: create, edit, enrol and remove, with auto student numbers',
    ],
    highlights: [
      { title: 'Quiz answers never reach the browser', detail: 'Students only learn whether each answer was right, so repeated attempts can’t be gamed — verified by an integration test.' },
      { title: 'Progress without N+1 queries', detail: 'Roster progress for any class size is computed in a fixed number of grouped queries.' },
      { title: 'One authorisation module', detail: 'Every content route resolves its parent course and goes through the same “can teach / can learn” checks.' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Markdown'],
    tests: '38 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/lms`,
    demoLogins: [
      { role: 'Student', email: 'student@example.com', password: 'Student1234!' },
      { role: 'Instructor', email: 'instructor@example.com', password: 'Teach1234!' },
    ],
  },
  {
    slug: 'expense-tracker',
    name: 'Ledgerly',
    tagline: 'Expense tracker with AU/NZ GST reporting',
    emoji: '💰',
    colors: ['#1d4ed8', '#60a5fa'],
    summary: 'Track income and expenses by the Australian or New Zealand financial year, with charts and a GST summary for sole traders.',
    problem:
      'Generic budgeting apps use calendar years and ignore GST. Ledgerly reports on 1 July (AU) or 1 April (NZ) financial years and calculates GST collected vs. credits.',
    features: [
      'Region-aware: AUD/NZD, 10% vs 15% GST, ATO vs IRD terminology',
      'Dashboard with monthly cash-flow and category charts',
      'Filterable, paginated transactions with CSV export',
      'Secure auth with httpOnly cookies and rate limiting',
    ],
    highlights: [
      { title: 'Money as integer cents', detail: 'Avoids floating-point rounding errors in totals and GST calculations.' },
      { title: 'Derived, not stored, GST', detail: 'Switching region recalculates every report without migrating data.' },
      { title: 'CSV injection protection', detail: 'Exported cells are quoted and formula prefixes neutralised.' },
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Recharts'],
    tests: '38 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/expense-tracker`,
    demoLogins: [{ role: 'Demo', email: 'demo@example.com', password: 'Demo1234!' }],
  },
];
