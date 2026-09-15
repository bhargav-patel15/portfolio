// ============================================================
//  PORTFOLIO CONFIG — Edit everything here!
//  This is the ONLY file you need to touch to update content.
//  After editing, run: npm run deploy
// ============================================================

export const profile = {
  name: "Bhargav Patel",
  // Shown as static text next to "Hi, I'm" in the hero.
  title: "Software Engineer II",
  company: null, // e.g. "Atlassian" — set to null if between roles / not disclosing
  // Cycling typewriter phrases under your name. Add/remove/reorder freely.
  taglines: [
    "Software Engineer II",
    "Backend & Distributed Systems",
    "Java • Spring Boot • AWS",
    "Building resilient microservices",
  ],
  bio: "I build reliable backend systems that turn complex problems into seamless product experiences. Previously at Atlassian, working across subscription billing, distributed systems, and developer tooling.",
  photo: "https://avatars.githubusercontent.com/bhargav-patel15",
  // Example: photo: "https://avatars.githubusercontent.com/u/YOURID"
  resumeLink: "https://drive.google.com/file/d/1ei_FvjbrMdAwWNSplZ5ZowXSidv_Ha4I/view?usp=sharing",
  status: "Open to Opportunities", // hero badge text — change to "Open to Work" etc.
};

// ── Hero stat strip ──────────────────────────────────────
// Small animated counters shown under the bio. Keep to 3–4 for best layout.
// `value` is the number that counts up; `prefix`/`suffix` decorate it.
export const stats = [
  {
    value: 10,
    prefix: "$",
    suffix: "M",
    label: "ARR — Partner Incentive Promotions",
  },
  {
    value: 5,
    prefix: "$",
    suffix: "M",
    label: "ARR — Partner & Blended Margin",
  },
  { value: 725, suffix: "K", label: "Queued SQS Messages Resolved" },
  { value: "20–30", suffix: "%", label: "Faster On-call Troubleshooting" },
];

// ── Work Experience ──────────────────────────────────────
// To add a new job: copy one block below and paste above the others.
// Set current: true if it's your current job (shows "Present" instead of end date).
export const experience = [
  {
    role: "Software Engineer II",
    summary:
      "Owned complex billing features, production reliability, and tooling that helped the team ship faster.",
    company: "Atlassian",
    startDate: "Sept 2025",
    endDate: "Mar 2026",
    current: false,
    location: "Bengaluru, India",
    description: [
      "Delivered Partner Incentive promotions end to end, replacing multi-year tiered discounts with configurable subscription discounts and contributing to $10M ARR.",
      "Recovered an AWS SQS backlog of 725K messages during a rate-limit incident by tuning queue throughput and scaling processing capacity, restoring service availability.",
      "Built an LLM-powered investigation agent connecting AWS DLQ messages, Splunk logs, and Stripe data through MCP integrations. Automated failure grouping and root cause analysis improved on-call troubleshooting efficiency by 20–30%.",
      "Modernized microservices deployment by moving from Stash/Bamboo to Bitbucket pipelines, reducing build time from 15 to 9 minutes, accelerating PR merges, saving 10,000 minutes/month and reducing build costs.",
      "Designed and delivered Ramp Pricing, supporting scheduled subscriptions across Atlassian cloud products with upfront or period-based charges; implemented subscription update APIs, maintained backward compatibility, and added bill estimation to preview subscription pricing.",
      "Mentored new hires on core subscription services to accelerate onboarding and ramp-up time.",
      "Managed high-priority production incidents during on-call rotations, resolving issues within strict SLAs to maintain service availability.",
      "Resolved 40–50 customer support tickets per week, fixing critical bugs and manually restoring impacted subscriptions to unblock customer deals.",
    ],
  },
  {
    role: "Software Engineer",
    summary:
      "Built the foundations for flexible subscription pricing and safer platform migrations.",
    company: "Atlassian",
    startDate: "Jul 2022",
    endDate: "Aug 2025",
    current: false,
    location: "Bengaluru, India",
    description: [
      "Delivered Partner & Blended Margin pricing logic for accurate partner margin calculations, contributing to $5M ARR.",
      "Migrated 13 subscription tables to vNext, building migration scripts and configurations with alerts for data loss and ingestion latency.",
      "Extended REST APIs and subscription lifecycle flows with a grace period, giving customers more time to finalize deals before cancellation.",
      "Integrated mutation testing to strengthen test suites, increasing overall test coverage by 10%.",
      "Led Agile team ceremonies including sprint planning and retrospectives, improving team alignment and delivery efficiency.",
      "Maintained the reliability of high-scale microservices by monitoring AWS SQS Dead Letter Queues (DLQs), fixing underlying bugs, and restoring data integrity.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
    summary:
      "Strengthened release confidence and subscription lifecycle testing.",
    company: "Atlassian",
    startDate: "Jan 2022",
    endDate: "Jun 2022",
    current: false,
    location: "Remote",
    description: [
      "Introduced Post Deployment Verification (PDV) testing for critical subscription flows in staging to detect failures in key workflows and proactively identify potential production issues before release, with hourly automated runs via Pollinators and Slack notifications.",
      "Implemented TTL in AWS DynamoDB to automatically expire records for external events, improving event handling efficiency.",
      "Added support for Billing Clock, enabling subscriptions to attach a frozen timestamp for controlled time evaluation and future state simulation.",
    ],
  },
];

// ── Education ─────────────────────────────────────────────
export const education = [
  {
    school:
      "Dhirubhai Ambani Institute of Information and Communication Technology",
    degree: "B.Tech, Information and Communication Technology (Minor: CS)",
    startDate: "Jul 2018",
    endDate: "Jun 2022",
    score: "CPI: 7.8 / 10",
  },
];

export const links = {
  github: "https://github.com/bhargav-patel15",
  linkedin: "https://www.linkedin.com/in/bhargav1541/",
  leetcode: "https://leetcode.com/u/bhargav1504/",
  email: "bhargavpatel1541@gmail.com",
  // Add more or remove any you don't need:
  // twitter: "https://twitter.com/yourusername",
  // portfolio: "https://yourwebsite.com",
};

// ── Skills, grouped to match resume categories ───────────
// The Skills section renders filter tabs from these category names automatically.
export const skillCategories = [
  {
    category: "Backend",
    icon: "{ }",
    description: "Services and APIs for complex subscription lifecycles.",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices", "Maven"],
  },
  {
    category: "Cloud & Data",
    icon: "▱",
    description: "Event-driven processing and reliable data flows.",
    items: ["AWS SQS", "Dead Letter Queues", "DynamoDB", "SQL", "Docker"],
  },
  {
    category: "Quality & Delivery",
    icon: "✓",
    description: "Confidence from local tests to production releases.",
    items: [
      "JUnit",
      "Mockito",
      "Mutation Testing",
      "Post-deployment Verification",
      "Bitbucket Pipelines",
      "Git",
    ],
  },
  {
    category: "AI & Observability",
    icon: "✳",
    description: "Connecting operational signals to actionable insights.",
    items: [
      "LLM-powered Agents",
      "MCP Integrations",
      "Splunk",
      "Incident Investigation",
      "Production Debugging",
    ],
  },
  {
    category: "Foundations",
    icon: "⌘",
    description: "The fundamentals behind thoughtful system design.",
    items: [
      "System Design",
      "Data Structures",
      "Algorithms",
      "C++",
      "OOP",
      "DBMS",
    ],
  },
  {
    category: "Developer Tools",
    icon: "⌥",
    description: "A practical toolkit for collaborative engineering.",
    items: ["IntelliJ", "VS Code", "Postman", "Jira", "Agile / Scrum"],
  },
];

export const highlights = [
  {
    type: "billing",
    category: "SUBSCRIPTION PLATFORMS",
    title: "Flexible pricing. Tangible growth.",
    description:
      "Partner promotions and margin capabilities contributing to $15M in combined annual recurring revenue.",
    tags: ["Java", "Spring Boot", "REST APIs"],
    detail:
      "Delivered configurable Partner Incentive promotions ($10M ARR) and Partner & Blended Margin logic ($5M ARR). Also developed Ramp Pricing with scheduled charges, subscription update APIs, backward compatibility, and bill estimation.",
  },
  {
    type: "queue",
    category: "PRODUCTION RELIABILITY",
    title: "725K messages. A path to recovery.",
    description:
      "Investigated an AWS SQS rate-limit incident and restored processing for a substantial message backlog.",
    tags: ["AWS SQS", "Distributed Systems"],
    detail:
      "Mitigated the incident through high-throughput queue configuration and scaled processing capacity. Ongoing work included monitoring dead letter queues, resolving underlying bugs, and restoring subscription data integrity.",
  },
  {
    type: "ai",
    category: "DEVELOPER PRODUCTIVITY",
    title: "Less searching. Faster answers.",
    description:
      "An LLM-powered investigation agent that improved on-call troubleshooting efficiency by 20–30%.",
    tags: ["LLMs", "MCP", "Splunk"],
    detail:
      "Connected AWS DLQ messages, Splunk logs, and Stripe data through MCP server integrations. The agent helped identify root causes, categorize errors, and group related failures for on-call engineers.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: null, // resume doesn't list a year — add one here if you have it, e.g. "2024"
    badge: "☁️",
    link: "https://drive.google.com/file/d/1lD6_GOxQ2PreyQUNuEp0RC47NgquL0p1/view",
  },
  // Add more certifications:
  // {
  //   name: "Oracle Java SE 11 Developer",
  //   issuer: "Oracle",
  //   year: "2023",
  //   badge: "☕",
  //   link: "#",
  // },
];

export const codingProfiles = [
  {
    platform: "GitHub",
    handle: "@bhargav-patel15",
    description: "Open source contributions & personal projects",
    url: "https://github.com/bhargav-patel15",
    icon: "github",
    color: "#6e40c9",
  },
  {
    platform: "LeetCode",
    handle: "bhargav1504",
    description: "DSA practice & competitive problem solving",
    url: "https://leetcode.com/bhargav1504",
    icon: "leetcode",
    color: "#FFA116",
  },
];
