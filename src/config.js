// ============================================================
//  PORTFOLIO CONFIG — Edit everything here!
// ============================================================

export const profile = {
  name: "Bhargav Patel",
  title: "Backend Software Engineer",
  company: null,
  bio: "Backend Software Engineer with experience building scalable microservices and distributed systems using Java, Spring Boot, and AWS. Proficient in REST API development, cloud services, and event-driven architectures, with a strong focus on system reliability and performance. Skilled in production debugging, CI/CD, and designing efficient backend solutions.",
  photo: "https://drive.google.com/file/d/1LRsr-XoPbC8-zNhN3ez6aSa9scydxCgZ/view?usp=sharing",
    // Example: photo: "https://avatars.githubusercontent.com/u/YOURID"
  resumeLink: "https://drive.google.com/file/d/1FEAD3Pe8qHxSRJs309GT2S7LOFzwiNY5/view?usp=sharing", // Link to your resume PDF
};

// ── Work Experience ──────────────────────────────────────
// To add a new job: copy one block below and paste above the others.
// Set current: true if it's your current job (shows "Present" instead of end date).
export const experience = [
  {
    role: "Backend Software Engineer II",
    company: "Atlassian",
    startDate: "Jan 2022",
    endDate: "Mar 2026",
    current: false,
    location: "Remote",
    description: [
      "Led end-to-end development of Partner Incentive promotions, migrating from multi-year tiered discounts to configurable discount models, contributing to $10M in annual recurring revenue (ARR).",
      "Built an AI-powered agent using LLM-based analysis to investigate operational failures via AWS DLQ, Splunk logs, and Stripe data, improving on-call troubleshooting efficiency by 20–30%.",
      "Modernized microservices deployment by migrating from Stash/Bamboo to Bitbucket pipelines, reducing build time from 15 to 9 minutes and saving 10,000 minutes/month in build costs.",
      "Designed and developed Partner & Blended Margin logic for subscription pricing, enabling accurate partner margin calculations and contributing to $5M in additional annual recurring revenue.",
    ],
    // Add more bullet points above as needed
  },
  // ── ADD A NEW JOB LIKE THIS ──
  // {
  //   role: "Backend Engineer I",
  //   company: "Previous Company",
  //   startDate: "Jun 2020",
  //   endDate: "Dec 2021",
  //   current: false,
  //   location: "Bangalore, India",
  //   description: [
  //     "What you did here.",
  //     "Another achievement.",
  //   ],
  // },
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

export const skills = [
  "Java", "Spring Boot", "Microservices", "System Design",
  "AWS", "REST APIs", "DynamoDB", "Maven", "JUnit", "Mockito", "SQL",
  "Agile / Scrum", "Billing Systems", "Git", "CI/CD", "Mentoring",
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    badge: "☁️",
    link: "https://drive.google.com/file/d/1lD6_GOxQ2PreyQUNuEp0RC47NgquL0p1/view", // Add your credential URL
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

