export const profile = {
  name: 'Adarsh Rao',
  role: 'AI / LLM Engineer',
  tagline:
    'I build self-hosted, production-grade systems for large language models — observability, agent memory, and the infrastructure that makes agents reliable in production.',
  location: 'Bengaluru, India',
  email: 'adrao18020@gmail.com',
  phone: '+91 9845402182',
  linkedin: 'https://linkedin.com/in/sa4drao',
  github: 'https://github.com/SA4DRAO',
}

export const marqueeItems = [
  'LLM Observability',
  'Agent Memory',
  'Self-Hosted AI',
  'OpenTelemetry',
  'RAG Pipelines',
  'On-Device Inference',
  'React',
  'Java / Spring Boot',
  'ClickHouse',
  'Neo4j',
]

export type Project = {
  title: string
  subtitle: string
  description: string
  tags: string[]
  link: string
  accent: string
  badge: string
  /** Optional image (imported asset or URL). Shown at the top of the card. */
  image?: string
  /** Optional press / feature callout. */
  press?: {
    source: string
    quote: string
    url: string
  }
}

export const projects: Project[] = [
  {
    title: 'Remi',
    subtitle: 'Open-Source LLM Observability Platform',
    description:
      'OpenTelemetry-native, zero-SDK tracing engine for self-hosted agent platforms. Agent code imports nothing — instrumentation is env vars + a launcher. Flame-chart timelines, prompt-level audit trails, per-release regression comparison, and LLM-as-judge verdicts. Runs entirely on your infrastructure on ClickHouse.',
    tags: ['Java 21', 'Spring Boot', 'ClickHouse', 'React 19', 'OpenTelemetry', 'Postgres'],
    link: 'https://github.com/SA4DRAO/remi-observability',
    accent: 'var(--pink)',
    badge: 'Flagship',
  },
  {
    title: 'Relay Memory',
    subtitle: 'Graph-Memory Support Agent',
    description:
      'A customer-support agent that remembers returning customers. A 12-node LangGraph state machine with Neo4j vector + graph memory, a structured policy controller, and a full reasoning trace for every decision. Semantic recall across 8,400+ tickets.',
    tags: ['Python', 'LangGraph', 'Neo4j', 'Vector Search', 'spaCy'],
    link: 'https://github.com/SA4DRAO/neo4j-hackathon',
    accent: 'var(--blue)',
    badge: 'Agent',
  },
  {
    title: 'umarag',
    subtitle: 'Client-Side RAG Chatbot SDK',
    description:
      'A RAG chatbot runtime where retrieval and LLM generation both run in the end user’s browser — zero backend calls at query time. Dual inference engines (WebLLM/WebGPU + the browser Prompt API) with automatic selection, hot-swapping, and bounded conversational memory.',
    tags: ['TypeScript', 'WebGPU', 'WebLLM', 'Prompt API', 'Orama'],
    link: 'https://github.com/SA4DRAO',
    accent: 'var(--green)',
    badge: 'Edge AI',
  },
  {
    title: 'Amma',
    subtitle: 'Language Learning for Children with Hearing Difficulties',
    description:
      'A Flutter + Firebase app built with speech therapists to help children with hearing difficulties learn vocabulary through visual cues and speech feedback. MLKit flashcard recognition, cloud sync, and 10+ Indian languages. Covered by The Hindu.',
    tags: ['Flutter', 'Firebase', 'MLKit', 'Accessibility'],
    link: 'https://github.com/SA4DRAO/amma',
    accent: 'var(--yellow)',
    badge: 'Mobile',
  },
  {
    title: 'Voter Booth Finder',
    subtitle: 'WhatsApp Chatbot for Lok Sabha Elections',
    description:
      'A WhatsApp chatbot commissioned by the District Collector, Hanamkonda, to help voters find their polling booth. Built with Node.js and Selenium web automation on the WhatsApp Business API, it answered in three languages — English, Telugu, and Urdu. Deployed on Oracle Free Tier and used by 500+ people during the 2024 Lok Sabha elections.',
    tags: ['Node.js', 'JavaScript', 'Selenium', 'WhatsApp Business API', 'Oracle Cloud'],
    link: 'https://www.thehindu.com/elections/lok-sabha/5-km-run-held-in-hanamkonda-to-promote-voter-awareness/article68141798.ece',
    accent: 'var(--green)',
    badge: 'Civic Tech',
    press: {
      source: 'The Hindu',
      quote:
        '“[Add the exact quote from the article here]”',
      url: 'https://www.thehindu.com/elections/lok-sabha/5-km-run-held-in-hanamkonda-to-promote-voter-awareness/article68141798.ece',
    },
  },
]

export type SkillGroup = {
  label: string
  accent: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / ML',
    accent: 'var(--pink)',
    items: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'LLM Observability',
      'Prompt Engineering',
      'Text-to-SQL',
      'On-Device / Edge Inference',
      'WebLLM / WebGPU',
      'pgvector',
      'OpenTelemetry',
    ],
  },
  {
    label: 'Languages',
    accent: 'var(--blue)',
    items: ['Java', 'TypeScript', 'Python', 'JavaScript', 'SQL', 'C++'],
  },
  {
    label: 'Frameworks',
    accent: 'var(--green)',
    items: ['React', 'Spring Boot', 'Angular', 'Redux', 'Node.js', 'FastAPI', 'Next.js'],
  },
  {
    label: 'Data & Infra',
    accent: 'var(--orange)',
    items: [
      'ClickHouse',
      'PostgreSQL',
      'Oracle SQL',
      'Neo4j',
      'Docker',
      'Caddy',
      'Jenkins',
      'Splunk',
    ],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    role: 'Software Development Engineer II',
    company: 'Mastercard',
    period: 'Mar 2026 — Present',
    points: [
      'Lead the frontend for Operational Reports 2.0 — a React/Vite app serving 20,000+ users across 400+ payment-lifecycle reports.',
      'Led the Angular → React migration, cutting Largest Contentful Paint from ~6s to ~1.5s via lazy loading and bundle optimization.',
      'Eliminated a production OutOfMemoryError in a batch job by re-architecting the BLOB write path to stream; proved via a heap A/B benchmark it survives at 36 MB where the old code failed at ≤96 MB.',
      'Cut the paint-blocking JS bundle by 24% and the hero asset by 93% through route-level code-splitting and WebP conversion.',
      'Standardized structured JSON logging across four backend services, improving fleet-wide observability.',
    ],
  },
  {
    role: 'Software Development Engineer I',
    company: 'Mastercard',
    period: 'Jun 2024 — Mar 2026',
    points: [
      'Built a full-stack admin tool (Spring Boot + Angular MFE) with 4-role RBAC and a multi-stage approval pipeline, eliminating weeks of manual metadata work per quarter.',
      'Captured 75K–150K daily interaction events to shape product prioritization and deprecation decisions.',
      'Drove WCAG accessibility modernization across the legacy application to avoid compliance exposure.',
      'Prototyped a text-to-SQL + RAG chatbot (self-hosted LLM + pgvector) for an internal hackathon, presented to engineering directors.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Mastercard',
    period: 'May — Jul 2023',
    points: [
      'Built an automated data backup system in Java/Spring Boot for large-scale migration workflows.',
      'Placed 3rd out of all Pan-India Mastercard interns in the Innovation Challenge for a real-time payment fraud detection solution.',
    ],
  },
]
