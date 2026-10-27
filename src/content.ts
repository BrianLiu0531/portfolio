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
  /** Label for the demo button (default "Live demo") */
  demoLabel?: string;
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

const GITHUB_USER = 'BrianLiu0531';

export const profile = {
  name: 'Cheng-En (Brian) Liu',
  role: 'Full Stack Software Engineer',
  location: 'Taichung, Taiwan · relocating to Australia',
  /** Where you want to work — used in the hero and on the contact page */
  targetLocation: 'Melbourne or Brisbane',
  // TODO: update once the 417 is granted, e.g. 'Full working rights (Working Holiday visa) until 2027'
  workRights: 'Working Holiday visa (subclass 417) lodged · open to 482 sponsorship',
  available: true,
  headline:
    '7+ years building web applications, back-end APIs and enterprise integrations with TypeScript, React, Node.js, Go, Python/Django and C#/.NET.',
  about: [
    'I’m a full stack software engineer with more than seven years of experience across finance, ERP, IoT and gaming. I started working in software part-time while studying, and have since shipped everything from SAP Business ByDesign integrations to real-time multiplayer games.',
    'Most recently I ported 71 browser games to a TypeScript and React stack, built a shared Colyseus multiplayer server, and integrated a leaderboard service with anti-cheat checks into 30 games. Before that I led the Django REST back end of a video advertising-monitoring system, built a Go wallet service and load-tested provider integrations with k6.',
    'Outside work I build infrastructure for payments on public blockchains: a Go indexer that tracks USDC deposits on Base, survives chain reorganisations and records every transfer exactly once — the same correctness problems I dealt with in wallet and settlement systems.',
    'I pick up unfamiliar codebases quickly and work well remotely. I care about the things that make software trustworthy: tests, sensible authorisation, clear documentation and reliable deployments.',
  ],
  email: 'brianliu2924@gmail.com',
  github: `https://github.com/${GITHUB_USER}`,
  linkedin: 'https://www.linkedin.com/in/cheng-en-liu-7825a1436',
  /** Put your CV at public/resume.pdf, or set to null to hide the button */
  resume: null as string | null, // TODO: 'resume.pdf'
};

export const skills: { group: string; items: string[] }[] = [
  { group: 'Front end', items: ['TypeScript', 'React 19', 'Vue 3', 'PixiJS', 'Canvas 2D', 'Three.js', 'Zustand', 'TanStack Query', 'Vite', 'Tailwind CSS'] },
  { group: 'Back end', items: ['Node.js', 'Express', 'Colyseus (WebSockets)', 'Python', 'Django REST Framework', 'PHP / Laravel', 'Go (Fiber, GORM)', 'C# / ASP.NET'] },
  { group: 'Web3', items: ['EVM / JSON-RPC', 'go-ethereum', 'ERC-20 event indexing', 'Reorg & finality handling', 'Base (OP Stack)', 'Wallet & settlement systems'] },
  { group: 'Data & integration', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'Prisma', 'Entity Framework', 'SAP Business ByDesign', 'Payment & e-invoice APIs', 'RFID readers'] },
  { group: 'Cloud', items: ['AWS Lambda', 'SQS (FIFO, DLQ)', 'DynamoDB', 'IAM & GitHub OIDC', 'CloudWatch', 'Terraform', 'Render', 'Neon'] },
  { group: 'DevOps & quality', items: ['Docker', 'Nginx / Caddy', 'GitHub Actions', 'GitLab CI/CD', 'Prometheus', 'Vitest', 'Go testing', 'PHPUnit', 'k6 load testing', 'Scrum (PSM I)'] },
];

export const experience: Experience[] = [
  {
    title: 'Software Engineer',
    org: 'Tai Kok Tsui Consulting Co., Ltd. (GameGen)',
    location: 'Taichung, Taiwan',
    period: 'May 2026 — Oct 2026',
    points: [
      'Ported 71 HTML5 and native games from Construct 2, Godot, Unity, Phaser and Cocos2d-x to React, TypeScript and PixiJS; sole named developer on 64.',
      'Built a shared real-time multiplayer server (Node.js, Colyseus, pnpm monorepo) with server-authoritative results for 1v1 online modes.',
      'Integrated a leaderboard service into 30 games with anti-cheat run sessions, calibrated by simulation bots playing the real game engines.',
    ],
  },
  {
    title: 'Full Stack Engineer',
    org: 'Faith Technology Co., Ltd.',
    location: 'Taichung, Taiwan',
    period: 'Oct 2025 — Apr 2026',
    points: [
      'Lead back-end developer of a video advertising-monitoring system for the Institute for Information Industry (Django REST Framework, MySQL).',
      'Built role-based access control, audit logging and production security controls; deployed with Docker, Nginx and GitHub Actions CI/CD.',
      'Independently built a Laravel Nova back office and a Vue 3 e-commerce storefront.',
    ],
  },
  {
    title: 'Back-end Engineer',
    org: 'Yongzhou Digital Technology Co., Ltd.', // TODO: confirm the official English name
    location: 'Taipei, Taiwan',
    period: 'Nov 2024 — Sep 2025',
    points: [
      'Integrated 18+ third-party game provider APIs (PHP, Laravel): transfer wallets, bet-report sync and settlement.',
      'Built a Go wallet service with transaction rollback, and wrote k6 load tests for 12 providers’ transfer flows.',
    ],
  },
  {
    title: 'R&D Engineer',
    org: 'Servconn Systems Co., Ltd.',
    location: 'New Taipei, Taiwan',
    period: 'Jun 2024 — Sep 2024',
    points: ['Developed a C# WPF application and APIs for RFID-based inventory for semiconductor manufacturers (Impinj, Zebra readers).'],
  },
  {
    title: 'Assistant Systems Analyst',
    org: 'Tata Consultancy Services (client: Taishin International Bank)',
    location: 'Taiwan (remote)',
    period: 'Jan 2023 — May 2024',
    points: [
      'Migrated banking applications from WinForms to ASP.NET WebForms with modular C# components and SQL Server stored procedures.',
      'One of two engineers retained from the original 12-person team through to project completion.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    org: 'ISCOM Information Co., Ltd.',
    location: 'Taichung, Taiwan',
    period: 'Aug 2018 — Dec 2022',
    points: [
      'Built modules for a Django finance portal integrated with SAP Business ByDesign via SOAP, including journal-entry import with bulk posting.',
      'Customised an e-invoice platform and SAP print forms for multiple clients; contributed to ASP.NET MVC portals and gathered B2B requirements.',
    ],
  },
  {
    title: 'Information Management (undergraduate, evening program)',
    org: 'Hsiuping University of Science and Technology',
    location: 'Taichung, Taiwan',
    period: '2018 — 2022',
    points: ['Studied part-time while working; degree not completed.'],
  },
];

export const projects: Project[] = [
  {
    slug: 'base-usdc-indexer',
    name: 'Base USDC Indexer',
    tagline: 'Reorg-safe deposit indexer for Base',
    emoji: '⛓️',
    colors: ['#1e3a8a', '#3b82f6'],
    summary:
      'A Go service that watches USDC transfers to and from a set of addresses on Base, records each one exactly once, follows it from pending to finalized, and survives chain reorgs, RPC outages and crashes.',
    problem:
      'Exchanges and wallets have to credit on-chain deposits without double-crediting a retried log or crediting a transfer that a reorg later removes. Polling eth_getLogs in a loop gets both wrong.',
    features: [
      'Tracks every transfer through pending → safe → finalized using the OP Stack block tags',
      'Detects reorgs by parent hash, walks back to the common ancestor and rewinds atomically, keeping an audit trail',
      'Transactional outbox emits transfer.confirmed (and compensating transfer.reverted) events with deterministic IDs',
      'Reconciles indexed balances against balanceOf on chain and alerts on any drift',
      'HTTP API, Prometheus metrics, multi-RPC failover, adaptive log ranges and rate limiting',
    ],
    highlights: [
      {
        title: 'Exactly-once by construction',
        detail:
          'A unique key on (tx hash, log index), and each batch, cursor and outbox event committed in one transaction that fails if another writer moved the cursor.',
      },
      {
        title: 'Randomised chain simulation',
        detail:
          'Tests mine, reorg, finalize, fail RPC calls and restart at random, then check the database equals the canonical chain. CI runs 100 seeds on every push.',
      },
      {
        title: 'Verified on a real network',
        detail:
          'Indexed live Base Sepolia traffic through the public RPC’s 200-block and 25 req/s limits, with balanceOf reconciliation matching to the last unit.',
      },
    ],
    stack: ['Go', 'go-ethereum', 'PostgreSQL', 'Prometheus', 'Docker', 'GitHub Actions'],
    tests: '30 automated tests plus a randomised reorg simulation (against PostgreSQL); 42 edge cases documented',
    github: `https://github.com/${GITHUB_USER}/base-usdc-indexer`,
    demo: 'https://codespaces.new/BrianLiu0531/base-usdc-indexer?quickstart=1',
    demoLabel: 'Run it in Codespaces',
    screenshot: 'screenshots/indexer.webp',
  },
  {
    slug: 'usdc-deposit-ledger',
    name: 'USDC Deposit Ledger',
    tagline: 'Exactly-once crediting on AWS',
    emoji: '🧾',
    colors: ['#7c2d12', '#f59e0b'],
    summary:
      'The crediting half of the deposit system: the indexer’s events flow through an SQS FIFO queue to a Go Lambda function that credits accounts in DynamoDB exactly once, however often a message is delivered.',
    problem:
      'Queues deliver at least once, retries overlap and a reorg can undo a deposit. A ledger that checks “already processed?” and then writes will eventually double-credit when two copies arrive together.',
    features: [
      'SQS FIFO with one message group per transfer, so a reorg revert never overtakes its credit',
      'Partial batch failures and a dead-letter queue with CloudWatch → SNS alarms',
      'Single-table DynamoDB ledger: balances, ledger lines and idempotency markers with TTL',
      'Terraform for everything, deployed from GitHub Actions through OIDC — no long-lived AWS keys',
      'Runs locally with ElasticMQ and DynamoDB Local, using the same handler as the Lambda',
    ],
    highlights: [
      {
        title: 'Idempotent by construction',
        detail:
          'Each event is one TransactWriteItems that also writes an EVENT# marker with attribute_not_exists, so a duplicate changes nothing. A test runs 20 concurrent workers on the same event and checks it is credited exactly once.',
      },
      {
        title: 'Verified with the indexer on live data',
        detail:
          'Live Base Sepolia transfers went indexer → SQS → consumer → DynamoDB, and the ledger matched the indexer’s totals exactly — also after every event was published a second time.',
      },
      {
        title: 'Least-privilege IAM',
        detail:
          'The deploy role only trusts this repo’s main branch and can only manage resources named usdc-ledger-*. The indexer gets a policy that allows sqs:SendMessage on one queue and nothing else.',
      },
    ],
    stack: ['Go', 'AWS Lambda', 'SQS', 'DynamoDB', 'Terraform', 'GitHub Actions'],
    tests: '10 automated tests against DynamoDB Local and ElasticMQ, including an end-to-end run and a concurrency test',
    github: `https://github.com/${GITHUB_USER}/usdc-deposit-ledger`,
  },
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
    tests: '45 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/job-portal`,
    screenshot: 'screenshots/hireloop.webp',
    demo: 'https://hireloop-demo.onrender.com',
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
    tests: '39 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/lms`,
    screenshot: 'screenshots/kura.webp',
    demo: 'https://kura-demo-pwdk.onrender.com',
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
    tests: '39 automated tests (API integration + component)',
    github: `https://github.com/${GITHUB_USER}/expense-tracker`,
    screenshot: 'screenshots/ledgerly.webp',
    demo: 'https://ledgerly-demo-7rjb.onrender.com',
    demoLogins: [{ role: 'Demo', email: 'demo@example.com', password: 'Demo1234!' }],
  },
];
