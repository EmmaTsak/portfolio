export type ProjectCategory = 'Full Stack' | 'Backend' | 'Mobile' | 'Systems' | 'Automation' | 'QA / Testing' | 'UI/UX';

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  role: string;
  status?: string;
  featured: boolean;
  categories: ProjectCategory[];
  tech: string[];
  visual: string;
  visualAlt: string;
  visualLabel: string;
  github: string;
  liveDemo?: string;
  highlights: string[];
  testing?: string[];
  architecture?: string[];
}

export const projects: Project[] = [
  {
    slug: 'pricewise',
    name: 'PriceWise',
    eyebrow: 'Bachelor thesis · Flagship case study',
    description: 'A full-stack grocery price comparison prototype for Greek supermarkets, combining scheduled data collection, product comparison and a privacy-conscious shopping-list flow.',
    role: 'Full-stack developer · Researcher · Interface designer',
    status: 'Functional prototype',
    featured: true,
    categories: ['Full Stack', 'QA / Testing', 'UI/UX'],
    tech: ['React', 'TypeScript', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Playwright', 'Cheerio', 'Socket.IO', 'Docker'],
    visual: 'assets/pricewise-app-home.webp',
    visualAlt: 'Implemented PriceWise compare-prices page with search and supermarket filters.',
    visualLabel: 'Implemented application',
    github: 'https://github.com/EmmaTsak/pricewise-app',
    liveDemo: 'https://pricewise-web-production.up.railway.app',
    highlights: ['Product search and supermarket filters', 'Scheduled scraping instead of per-search scraping', 'Account-free shopping list with optional email delivery', 'Greek/English interface'],
    testing: ['Manual frontend flow testing', 'API endpoint checks', 'Scraper behaviour and error handling', 'Socket.IO refresh behaviour'],
  },
  {
    slug: 'vinted-relisting-assistant',
    name: 'Vinted Relisting Assistant',
    eyebrow: 'Python · Desktop application · Active development',
    description:
      'A privacy-first Windows desktop application for organising second-hand marketplace listings, planning daily relisting work and managing a local inventory without automating marketplace publishing.',
    role: 'Desktop application developer · UI/UX designer',
    status: 'Active development',
    featured: true,
    categories: ['Automation', 'QA / Testing', 'UI/UX'],
    tech: [
      'Python',
      'PySide6',
      'SQLAlchemy',
      'SQLite',
      'pytest',
      'PyInstaller',
    ],
    visual: 'assets/vinted-relisting-dashboard.png',
    visualAlt:
      'Dark-mode dashboard of the Vinted Relisting Assistant Windows desktop application.',
    visualLabel: 'Implemented desktop application',
    github: 'https://github.com/EmmaTsak/vinted-relisting-assistant',
    highlights: [
      'Daily relisting queue with history, priorities and listing-status tracking',
      'Advanced search, filtering, sorting and configurable pagination',
      'Local photo management with previews and thumbnail caching',
      'Privacy-first local architecture with no marketplace credentials required',
    ],
    testing: [
      'Automated pytest test suite',
      'Local database and workflow validation',
      'Missing-image and fallback-state handling',
      'Standalone Windows executable packaged with PyInstaller',
    ],
  },
  {
    slug: 'cpp-sensor-dashboard',
    name: 'C++ Sensor Dashboard',
    eyebrow: 'Modern C++ · HTTP API · Dashboard',
    description: 'An IoT-style sensor simulator with a multithreaded C++17 backend, JSON HTTP API and browser dashboard.',
    role: 'Developer',
    featured: true,
    categories: ['Systems', 'Backend'],
    tech: ['C++17', 'CMake', 'cpp-httplib', 'nlohmann/json', 'JavaScript', 'Chart.js'],
    visual: 'assets/sensor-architecture.svg',
    visualAlt: 'Architecture illustration showing a C++ backend, HTTP JSON API and web dashboard.',
    visualLabel: 'Architecture illustration',
    github: 'https://github.com/EmmaTsak/cpp-sensor-dashboard',
    highlights: ['Background sensor updates with std::thread', 'Thread-safe shared state with mutex locking', 'Config-driven sensor definitions', 'History, min/max/average statistics and warning states'],
    architecture: ['C++17 sensor manager', 'HTTP JSON API', 'HTML/CSS/JavaScript dashboard'],
  },
  {
    slug: 'video-games-api',
    name: 'Video Games API',
    eyebrow: 'Backend · REST · Authentication',
    description: 'A RESTful Node.js API demonstrating authentication, reusable query features, MongoDB modelling and centralized error handling.',
    role: 'Backend developer',
    featured: true,
    categories: ['Backend'],
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
    visual: 'assets/api-architecture.svg',
    visualAlt: 'Architecture illustration showing Express REST endpoints connected to MongoDB.',
    visualLabel: 'Architecture illustration',
    github: 'https://github.com/EmmaTsak/video-games-api',
    highlights: ['CRUD endpoints for game resources', 'JWT signup/login flow and password hashing', 'Filtering, sorting, pagination and field limiting', 'Aggregation endpoints and centralized operational errors'],
  },
  {
    slug: 'android-contacts-app',
    name: 'Android Contacts App',
    eyebrow: 'Kotlin · Jetpack Compose · MVVM',
    description: 'A native Android contacts manager with reactive Compose UI, Room persistence and a ViewModel/Repository architecture.',
    role: 'Android developer',
    featured: false,
    categories: ['Mobile', 'UI/UX'],
    tech: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM', 'Compose Navigation'],
    visual: 'assets/android-architecture.svg',
    visualAlt: 'MVVM architecture illustration for the Android contacts application.',
    visualLabel: 'Architecture illustration',
    github: 'https://github.com/EmmaTsak/android-contacts-app',
    highlights: ['Add, edit and delete contacts', 'Room database persistence', 'Reactive state through ViewModel', 'Compose Navigation between list and form screens'],
  },
  {
    slug: 'reposentry',
    name: 'RepoSentry',
    eyebrow: 'Python · Engineering tooling · In progress',
    description: 'A Python engineering tool being developed to analyse GitHub repository health and produce actionable reports.',
    role: 'Developer',
    status: 'In development',
    featured: false,
    categories: ['Automation', 'QA / Testing', 'Backend'],
    tech: ['Python', 'FastAPI', 'Typer', 'HTTPX', 'pytest', 'mypy', 'Ruff'],
    visual: 'assets/reposentry-architecture.svg',
    visualAlt: 'Concept illustration for the RepoSentry CLI and repository-analysis flow.',
    visualLabel: 'Concept visual · project in progress',
    github: 'https://github.com/EmmaTsak/reposentry',
    highlights: ['CLI entry point with Typer', 'Strict static typing with mypy', 'pytest development setup', 'Ruff linting and formatting'],
    testing: ['pytest', 'pytest-asyncio', 'pytest-cov', 'respx'],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
