import { useEffect, useRef, useState } from "react";
import {
  profile,
  links,
  stats,
  experience,
  education,
  skillCategories,
  certifications,
  highlights,
} from "./config";

const Arrow = () => <span aria-hidden="true">↗</span>;
const sections = [
  ["work", "Selected work"],
  ["experience", "Experience"],
  ["skills", "Toolkit"],
  ["contact", "Contact"],
];
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
function SystemMap() {
  const [active, setActive] = useState(0);
  const nodes = [
    {
      name: "API gateway",
      icon: "↗",
      detail: "REST APIs",
      text: "Backward-compatible APIs for subscription updates and bill estimation.",
    },
    {
      name: "Billing service",
      icon: "{ }",
      detail: "Java + Spring Boot",
      text: "Configurable promotions, partner margins, and scheduled subscription pricing.",
    },
    {
      name: "Event queue",
      icon: "≋",
      detail: "AWS SQS",
      text: "Asynchronous processing, dead letter queues, and production recovery.",
    },
    {
      name: "Data layer",
      icon: "▱",
      detail: "DynamoDB + SQL",
      text: "Subscription data migrations, event expiration, and data integrity.",
    },
  ];
  return (
    <div className="system-window">
      <div className="window-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>architecture.playground</span>
        <span className="mono">⌘</span>
      </div>
      <div className="map-heading">
        <span className="eyebrow">THE SYSTEMS I BUILD</span>
        <span className="tiny-label">INTERACTIVE DEMO</span>
      </div>
      <div className="system-map">
        <svg
          className="connections"
          viewBox="0 0 400 270"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M200 45 V110 M200 110 H80 V210 M200 110 H320 V210" />
          <circle r="4">
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              path="M200 45 V110 H80 V210"
            />
          </circle>
          <circle r="4">
            <animateMotion
              dur="3.7s"
              repeatCount="indefinite"
              path="M200 45 V110 H320 V210"
            />
          </circle>
        </svg>
        {nodes.map((node, index) => (
          <button
            key={node.name}
            className={`system-node node-${index} ${active === index ? "selected" : ""}`}
            onClick={() => setActive(index)}
            aria-pressed={active === index}
          >
            <span className="node-icon">{node.icon}</span>
            <span>{node.name}</span>
            <small>{node.detail}</small>
          </button>
        ))}
      </div>
      <div className="system-detail" aria-live="polite">
        <span className="prompt">❯</span>
        <p>{nodes[active].text}</p>
      </div>
      <div className="window-footer">
        <span>
          <i className="dot" /> Designed for resilience
        </span>
        <span>Click a node to explore</span>
      </div>
    </div>
  );
}
function WorkArt({ type }) {
  return (
    <div
      className={`work-art ${type}`}
      role="img"
      aria-label={
        type === "billing"
          ? "Illustrated subscription pricing chart"
          : type === "queue"
            ? "Illustrated event queue recovery"
            : "Illustrated AI incident analysis"
      }
    >
      <span className="art-label">
        {type === "billing"
          ? "subscription.pricing"
          : type === "queue"
            ? "queue.recovery"
            : "incident.investigate"}
      </span>
      {type === "billing" ? (
        <>
          <div className="chart-bars">
            {[32, 46, 41, 65, 60, 84, 100].map((v, i) => (
              <i
                key={i}
                style={{ height: `${v}%`, animationDelay: `${i * 0.12}s` }}
              />
            ))}
          </div>
          <span className="art-pill">↗ Business impact</span>
        </>
      ) : type === "queue" ? (
        <>
          <div className="queue-blocks">
            {Array.from({ length: 18 }, (_, i) => (
              <i key={i} style={{ animationDelay: `${i * 0.13}s` }} />
            ))}
          </div>
          <span className="art-pill">✓ Backlog resolved</span>
        </>
      ) : (
        <>
          <div className="ai-orbit">
            <span>✳</span>
            <i />
            <i />
            <i />
          </div>
          <span className="art-pill">Logs → context → insight</span>
        </>
      )}
    </div>
  );
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "dark";
    } catch {
      return "dark";
    }
  });
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const [filter, setFilter] = useState("All");
  const [copy, setCopy] = useState("Copy email");
  const [photoFailed, setPhotoFailed] = useState(false);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    document
      .querySelectorAll("main section[id]")
      .forEach((el) => observer.observe(el));
    const escape = (event) => {
      if (event.key === "Escape") setMenu(false);
    };
    window.addEventListener("keydown", escape);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", escape);
    };
  }, []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopy("Email copied ✓");
    } catch {
      setCopy("Please copy the email above");
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header>
        <nav className="nav wrap" aria-label="Main navigation">
          <a className="wordmark" href="#home" aria-label="Bhargav Patel home">
            bp<span>.</span>
            <small>/ software engineer</small>
          </a>
          <div id="navigation" className={`nav-links ${menu ? "open" : ""}`}>
            {sections.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="theme-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "☼" : "☾"}
            </button>
            <a
              className="nav-resume"
              href={profile.resumeLink}
              target="_blank"
              rel="noreferrer"
            >
              Résumé <Arrow />
            </a>
            <button
              className="menu-button"
              aria-expanded={menu}
              aria-controls="navigation"
              aria-label="Toggle navigation"
              onClick={() => setMenu(!menu)}
            >
              {menu ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>
      <main id="main">
        <section id="home" className="hero wrap">
          <div className="hero-topline">
            <span>
              <i className="dot" />
              {profile.status}
            </span>
            <span className="mono">JAVA / CLOUD / DISTRIBUTED SYSTEMS</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="intro">
                Hello, I'm Bhargav <span className="wave">✳</span>
              </div>
              <h1>
                Behind every
                <br />
                great product.
                <br />
                <em>A solid system.</em>
              </h1>
              <p className="hero-description">{profile.bio}</p>
              <div className="hero-actions">
                <a className="button primary" href="#work">
                  Explore my work <span>↓</span>
                </a>
                <a className="button secondary" href={`mailto:${links.email}`}>
                  Let's talk <Arrow />
                </a>
              </div>
              <div className="profile-line">
                {!photoFailed ? (
                  <img
                    src={profile.photo}
                    alt="Bhargav Patel"
                    width="42"
                    height="42"
                    onError={() => setPhotoFailed(true)}
                  />
                ) : (
                  <span className="avatar-fallback">BP</span>
                )}
                <div>
                  <strong>{profile.name}</strong>
                  <span>{profile.title} · Previously at Atlassian</span>
                </div>
                <span className="profile-code">&lt;/&gt;</span>
              </div>
            </div>
            <div className="hero-visual">
              <SystemMap />
              <div className="visual-caption">
                <span>01 / FROM IDEA TO PRODUCTION</span>
                <span>Built to keep working.</span>
              </div>
            </div>
          </div>
          <div className="impact-strip">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-bottom">
            <span>ENGINEERING WITH INTENT.</span>
            <a href="#work">SCROLL TO EXPLORE ↓</a>
          </div>
        </section>
        <section id="work" className="section wrap">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / SELECTED WORK</span>
                <h2>Real systems. Real impact.</h2>
              </div>
              <p>A few engineering challenges I’ve worked on at Atlassian.</p>
            </div>
          </Reveal>
          <div className="work-grid">
            {highlights.map((item, i) => (
              <Reveal key={item.title}>
                <article className="work-card">
                  <WorkArt type={item.type} />
                  <div className="work-content">
                    <span className="eyebrow">
                      0{i + 1} / {item.category}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                    <details>
                      <summary>
                        Engineering details <span>+</span>
                      </summary>
                      <p>{item.detail}</p>
                    </details>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="experience" className="section experience-section">
          <div className="wrap">
            <Reveal>
              <div className="section-heading">
                <div>
                  <span className="eyebrow">02 / THE JOURNEY</span>
                  <h2>Built through experience.</h2>
                </div>
                <p>
                  From intern to Software Engineer II.
                  <br />
                  Four years of building, debugging, and growing.
                </p>
              </div>
            </Reveal>
            <div className="experience-layout">
              <aside className="company-panel">
                <span className="company-mark">A</span>
                <h3>Atlassian</h3>
                <p>Subscription platforms & billing</p>
                <span className="mono">JAN 2022 — MAR 2026</span>
                <div className="company-note">
                  Building the systems behind how customers subscribe, pay, and
                  grow.
                </div>
              </aside>
              <div className="timeline">
                {experience.map((job, i) => (
                  <Reveal key={job.role}>
                    <article className="job">
                      <div className="job-meta">
                        <span>
                          {job.startDate} —{" "}
                          {job.current ? "Present" : job.endDate}
                        </span>
                        <span>{job.location}</span>
                      </div>
                      <h3>{job.role}</h3>
                      <p className="job-summary">{job.summary}</p>
                      <ul>
                        {job.description.slice(0, 3).map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                      </ul>
                      {job.description.length > 3 && (
                        <details>
                          <summary>
                            More contributions <span>+</span>
                          </summary>
                          <ul>
                            {job.description.slice(3).map((text) => (
                              <li key={text}>{text}</li>
                            ))}
                          </ul>
                        </details>
                      )}
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="section wrap">
          <Reveal>
            <div className="section-heading">
              <div>
                <span className="eyebrow">03 / MY TOOLKIT</span>
                <h2>The tools behind the work.</h2>
              </div>
              <p>A backend-first toolkit, grounded in production experience.</p>
            </div>
          </Reveal>
          <div className="filters" aria-label="Filter skills">
            {["All", ...skillCategories.map((c) => c.category)].map(
              (category) => (
                <button
                  key={category}
                  aria-pressed={filter === category}
                  className={filter === category ? "selected" : ""}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ),
            )}
          </div>
          <div className="skills-grid">
            {skillCategories
              .filter((c) => filter === "All" || filter === c.category)
              .map((category) => (
                <article className="skill-card" key={category.category}>
                  <div className="skill-title">
                    <span className="skill-symbol" aria-hidden="true">
                      {category.icon}
                    </span>
                    <h3>{category.category}</h3>
                  </div>
                  <p>{category.description}</p>
                  <div className="tags">
                    {category.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
          </div>
          <div className="credentials">
            {education.map((edu) => (
              <div key={edu.school}>
                <span className="eyebrow">EDUCATION / 2018 — 2022</span>
                <h3>{edu.school}</h3>
                <p>{edu.degree}</p>
                <span className="mono">{edu.score}</span>
              </div>
            ))}
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="eyebrow">
                  CERTIFICATION <Arrow />
                </span>
                <h3>{cert.name}</h3>
                <p>{cert.issuer}</p>
                <span className="text-link">View credential ↗</span>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="wrap">
            <Reveal>
              <span className="eyebrow">
                <i className="dot" /> LET’S BUILD SOMETHING THAT MATTERS
              </span>
              <div className="contact-layout">
                <h2>
                  Good things start
                  <br />
                  with a <em>hello.</em>
                </h2>
                <div>
                  <p>
                    Have a backend engineering opportunity or an interesting
                    systems challenge? I’d love to hear about it.
                  </p>
                  <a className="email-link" href={`mailto:${links.email}`}>
                    {links.email} <Arrow />
                  </a>
                  <button className="copy-button" onClick={copyEmail}>
                    {copy}
                  </button>
                  <span className="sr-only" role="status">
                    {copy === "Copy email" ? "" : copy}
                  </span>
                </div>
              </div>
              <div className="social-links">
                <a href={links.github} target="_blank" rel="noreferrer">
                  GitHub <Arrow />
                </a>
                <a href={links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow />
                </a>
                <a href={links.leetcode} target="_blank" rel="noreferrer">
                  LeetCode <Arrow />
                </a>
                <a href={profile.resumeLink} target="_blank" rel="noreferrer">
                  Résumé <Arrow />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#home">
          bp<span>.</span>
        </a>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="mono">THOUGHTFULLY BUILT. ALWAYS ITERATING.</span>
        <a href="#home" aria-label="Back to top">
          ↑ Back to top
        </a>
      </footer>
    </>
  );
}
