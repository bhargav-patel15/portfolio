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
  bio: "Software Engineer II with ~4 years building scalable microservices and distributed systems on Java and Spring Boot. I've shipped subscription-billing features touching $15M+ in combined ARR at Atlassian, resolved a 725K-message AWS SQS backlog, and built an LLM-powered agent to speed up on-call incident investigation. Comfortable across REST API design, event-driven architectures, cloud infra (AWS), and production debugging.",
  photo: "https://avatars.githubusercontent.com/bhargav-patel15",
  // Example: photo: "https://avatars.githubusercontent.com/u/YOURID"
  resumeLink: "https://drive.google.com/file/d/1FEAD3Pe8qHxSRJs309GT2S7LOFzwiNY5/view?usp=sharing",
  status: "Open to Opportunities", // hero badge text — change to "Open to Work" etc.
};

// ── Hero stat strip ──────────────────────────────────────
// Small animated counters shown under the bio. Keep to 3–4 for best layout.
// `value` is the number that counts up; `prefix`/`suffix` decorate it.
export const stats = [
  { value: 10, prefix: "$", suffix: "M", label: "ARR — Partner Incentive Promotions" },
  { value: 5, prefix: "$", suffix: "M", label: "ARR — Partner & Blended Margin" },
  { value: 725, suffix: "K", label: "Queued SQS Messages Resolved" },
  { value: 30, suffix: "%", label: "On-call Efficiency Improvement" },
];

// ── Work Experience ──────────────────────────────────────
// To add a new job: copy one block below and paste above the others.
// Set current: true if it's your current job (shows "Present" instead of end date).
export const experience = [
  {
    role: "Software Engineer II",
    company: "Atlassian",
    startDate: "Sept 2025",
    endDate: "Mar 2026",
    current: false,
    location: "Bengaluru, India",
    description: [
      "Led end-to-end development of Partner Incentive promotions, enabling migration from multi-year tiered discounts to configurable discount models for partner subscriptions, contributing to $10M in annual recurring revenue (ARR).",
      "Investigated and mitigated an AWS SQS rate-limit incident with 725K queued messages, restoring service availability and improving system stability through high-throughput queue configurations and scaled processing capacity.",
      "Built an AI-powered agent using LLM-based analysis to investigate operational failures by processing AWS DLQ messages, Splunk logs, and Stripe data via MCP server integrations, enabling automated root cause detection, error categorization, and failure grouping — improving on-call troubleshooting efficiency by 20–30%.",
      "Modernized microservices deployment by moving from Stash/Bamboo to Bitbucket pipelines, reducing build time from 15 to 9 minutes, accelerating PR merges, saving 10,000 minutes/month and reducing build costs.",
      "Designed and delivered Ramp Pricing, supporting scheduled subscriptions across Atlassian cloud products with upfront or period-based charges; implemented subscription update APIs, maintained backward compatibility, and added bill estimation to preview subscription pricing.",
      "Mentored new hires on core subscription services to accelerate onboarding and ramp-up time.",
      "Managed high-priority production incidents during on-call rotations, resolving issues within strict SLAs to maintain service availability.",
      "Resolved 40–50 customer support tickets per week, fixing critical bugs and manually restoring impacted subscriptions to unblock customer deals.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Atlassian",
    startDate: "Jul 2022",
    endDate: "Aug 2025",
    current: false,
    location: "Bengaluru, India",
    description: [
      "Designed and developed Partner & Blended Margin logic for subscription pricing, enabling accurate partner margin calculations and contributing to $5M in annual recurring revenue (ARR).",
      "Migrated 13 subscription database tables to the vNext platform, defining configurations and building migration scripts while setting up alerts for data loss and ingestion latency.",
      "Implemented Grace Period support for subscriptions, allowing customers additional time near cancellation to finalize deals; extended existing REST APIs and subscription lifecycle flows to support the feature.",
      "Integrated mutation testing to strengthen test suites, increasing overall test coverage by 10%.",
      "Led Agile team ceremonies including sprint planning and retrospectives, improving team alignment and delivery efficiency.",
      "Maintained the reliability of high-scale microservices by monitoring AWS SQS Dead Letter Queues (DLQs), fixing underlying bugs, and restoring data integrity.",
    ],
  },
  {
    role: "Software Development Engineer Intern",
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
    school: "Dhirubhai Ambani Institute of Information and Communication Technology",
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
    category: "Languages",
    items: ["Java", "C++", "SQL"],
  },
  {
    category: "Frameworks & Cloud",
    items: ["Spring Boot", "AWS (SQS, DLQ, DynamoDB)", "Microservices", "REST APIs", "Docker", "Maven"],
  },
  {
    category: "Testing",
    items: ["JUnit", "Mockito", "Mutation Testing"],
  },
  {
    category: "Developer Tools",
    items: ["Git", "IntelliJ", "VS Code", "Bitbucket", "JIRA", "Postman"],
  },
  {
    category: "Concepts",
    items: ["Data Structures", "Algorithms", "OOP", "System Design", "DBMS", "SDLC", "Agile / Scrum"],
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
