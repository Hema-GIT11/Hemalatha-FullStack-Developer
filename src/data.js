export const profile = {
  name: 'Hemalatha',
  title: 'Full Stack Developer | React | Node | TypeScript',
  tagline: 'End-to-End Web Application Development · CRM · RBAC · REST APIs · MySQL · GIT',
  location: 'Chennai, Tamil Nadu',
  phone: '+91 89460 45205',
  email: 'hemaganapathy26@gmail.com',
  linkedin: 'https://linkedin.com/in/hemaganapathy26',
  github: 'https://github.com/hemaganapathy26',
  resumeUrl: '/Hemalatha_G_Resume.pdf',
  summary:
    'Full Stack Developer with proven experience in React.js, Node.js, Express, and MySQL, delivering scalable and high-performing web applications. Skilled in building admin dashboards, workflow automation systems, and complex data management solutions with a focus on efficiency, usability, and maintainability. Expertise spans frontend architecture, RESTful API integration, and backend optimization — translating business requirements into robust, production-ready technical solutions from concept to deployment.',
}

export const stats = [
  { label: 'Years Experience', value: '1.5+' },
  { label: 'Live Platforms', value: '5+' },
  { label: 'Active Users Supported', value: '1,000+' },
  { label: 'API Response Boost', value: '35%' },
]

export const skills = [
  {
    category: 'Languages',
    icon: '⌨️',
    accent: '#8b7bff',
    items: ['JavaScript (ES6+)', 'TypeScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '⚛️',
    accent: '#2dd4bf',
    items: ['React.js', 'Node.js', 'Express.js', 'Redux', 'Context API', 'Material UI (MUI)', 'Formik', 'Yup', 'Axios', 'React Router', 'Vite'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    accent: '#ffb86c',
    items: ['MySQL', 'MariaDB', 'Schema Design', 'Query Optimization', 'Indexing', 'Stored Procedures'],
  },
  {
    category: 'DevOps & Deployment',
    icon: '🚀',
    accent: '#ff79c6',
    items: ['Vercel', 'DigitalOcean (Droplets)', 'VPS Deployment', 'PM2', 'HTTPS', 'Environment Configuration'],
  },
  {
    category: 'Tools & Practices',
    icon: '🛠️',
    accent: '#60a5fa',
    items: ['Git', 'GitHub', 'Postman', 'API Testing', 'Agile / Sprint Workflow', 'MVC Architecture', 'JWT Authentication', 'RBAC', 'SDLC', 'Code Review', 'VS Code'],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'ImaginetVentures, Chennai',
    period: 'Dec 2024 – Present',
    points: [
      'Built and deployed enterprise and government web applications using React.js + Node.js + Express.js, supporting 1,000+ active users via stable cloud and VPS deployments managed with PM2.',
      'Engineered secure JWT-authenticated REST APIs with full authentication & authorization controls; boosted response performance by 35% via MySQL indexing and performance tuning.',
      'Architected RBAC systems with multi-stage approval workflows across 5 platforms, cutting manual processing effort by 40% and reducing review cycle time from days to hours.',
      'Enforced production deployment best practices including token validation, input sanitization, and HTTPS across all releases, achieving zero security incidents.',
      'Led cross-functional collaboration with stakeholders for requirement gathering across 3+ sprint cycles, accelerating feature release cadence by 20% through iterative Agile delivery.',
      'Validated 100% of CRUD API endpoints via structured Postman test suites pre-deployment, maintaining a zero post-release critical bug record.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'ImaginetVentures, Chennai',
    period: 'Oct 2024 – Dec 2024',
    points: [
      'Launched TRACKER, an internal task management platform with role-based assignments and systematized email notifications, reducing missed deadlines by 30% within the first month.',
      'Shipped 8 API modules across 2 Agile sprint cycles with full Postman validation and a 100% first-review acceptance rate before production deployment.',
    ],
  },
]

export const projects = [
  {
    name: 'MBS (Memaar Building Systems)',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MySQL', 'Redux', 'JWT'],
    private: true,
    points: [
      'Designed and built an enterprise workflow management system with configurable approval hierarchies and department role masters.',
      'Executed Job Enquiry and Contract Change Order modules with multi-level review and staged approvals.',
      'Reduced document turnaround time by 30% through structured governance pipelines and RBAC-controlled workflows.',
    ],
  },
  {
    name: 'INAE Membership Panel',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'Razorpay'],
    private: true,
    points: [
      'Architected a government-grade membership platform with multi-role RBAC and mechanized approval workflows.',
      'Integrated Razorpay payment gateway with automated invoicing and receipt generation.',
      'Reduced manual processing time by 40% and scaled platform to 1,000+ active users via Vercel cloud deployment.',
    ],
  },
  {
    name: 'LMGGT – Inventory & Stock Management',
    stack: ['React.js', 'Node.js', 'MySQL', 'REST APIs'],
    private: true,
    points: [
      'Engineered a real-time inventory system managing 1,000+ SKUs with bulk uploads, stock transfers, and inventory adjustments.',
      'Implemented tax invoice generation with structured API integration across frontend and backend layers.',
      'Accelerated database performance by 35% through schema indexing and query optimization.',
    ],
  },
  {
    name: 'Kutti & Kasi – Business Management Platform',
    stack: ['React.js', 'Express.js', 'MariaDB', 'MUI', 'JWT'],
    private: true,
    points: [
      'Constructed a business operations platform with inventory tracking, lead management, and follow-up scheduling.',
      'Automated quotation generation and follow-up workflows, slashing manual effort by 50%.',
    ],
  },
  {
    name: 'PUS (Meri Life) – Tamil Nadu Government Volunteer Portal',
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    private: true,
    points: [
      'Spearheaded a volunteer management system for 500+ volunteers with attendance tracking, event coordination, and leaderboard ranking.',
      'Computerized PDF certificate generation with dynamic data population and role-based access control.',
      'Boosted API performance by 45% through database optimization and performance tuning.',
    ],
  },
]

export const certifications = [
  { name: 'Full Stack Development', org: 'Shooting Stars Foundation, Chennai', period: 'Jul 2024 – Sep 2024' },
  { name: 'Web Development', org: 'Siva Sethu Info Tech, Trichy', period: 'Mar 2024 – Apr 2024' },
]

export const education = {
  degree: 'B.Tech in Information Technology',
  school: 'Indra Ganesan College of Engineering, Trichy',
  period: 'Jun 2020 – May 2024',
  cgpa: '8.1 / 10',
}

export const awards = [
  {
    name: 'CRM Expert Award',
    period: 'Jan 2026',
    detail: 'ImaginetVentures – Recognized for outstanding contribution to client relationship management system delivery.',
  },
  {
    name: 'Full Stack Hero Award',
    period: 'Jan 2025',
    detail: 'ImaginetVentures – Honored for exceptional full stack delivery across multiple enterprise and government platforms within the first 3 months.',
  },
]
