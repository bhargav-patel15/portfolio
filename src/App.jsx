import { profile, links, skillCategories, certifications, codingProfiles, experience, education, stats } from './config.js';
import { useState, useEffect, useRef } from 'react';

// ── Icons ─────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
    <rect x="2" y="4" width="20" height="16" rx="3"/>
    <path d="M2 7l10 7 10-7"/>
  </svg>
);
const LeetcodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);
const ExternalLinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
  </svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="12"/>
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const GradCapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
    <path d="M22 10L12 5 2 10l10 5 10-5z"/>
    <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>
  </svg>
);
const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="14" height="14">
    <rect x="9" y="9" width="12" height="12" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
);
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

// ── Reveal-on-scroll wrapper ────────────────────────────────
function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}

// ── Animated count-up number ───────────────────────────────
function CountUp({ value, prefix = '', suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
              setDisplay(Math.round(eased * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className="stat__number">
      {prefix}{display.toLocaleString()}{suffix}
    </span>
  );
}

// ── Typewriter effect for rotating hero taglines ───────────
function Typewriter({ words = [], typeSpeed = 55, deleteSpeed = 28, pause = 1400 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">
      {text}
      <span className="typewriter__cursor">|</span>
    </span>
  );
}

// ── Main App ──────────────────────────────────────────────
const NAV_ITEMS = ['About', 'Experience', 'Education', 'Skills', 'Coding', 'Certifications', 'Contact'];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const saved = window.localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return false; // light mode by default
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [skillFilter, setSkillFilter] = useState('All');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    window.localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Scrollspy — highlight the nav link for the section in view
  useEffect(() => {
    const sections = NAV_ITEMS.map((s) => document.getElementById(s.toLowerCase())).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const copyEmail = () => {
    navigator.clipboard?.writeText(links.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  const initials = profile.name.split(' ').map(n => n[0]).join('');
  const filteredCategories = skillFilter === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === skillFilter);

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <span className="nav__logo">{profile.name.split(' ')[0]}<span className="accent">.</span></span>
          {/* Desktop links */}
          <div className="nav__desktop">
            {NAV_ITEMS.map(s => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className={`nav__link ${activeSection === s.toLowerCase() ? 'nav__link--active' : ''}`}
              >
                {s}
              </a>
            ))}
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)} title="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          {/* Mobile controls */}
          <div className="nav__mobile-controls">
            <button className="theme-toggle" onClick={() => setIsDark(!isDark)} title="Toggle theme">
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {/* Mobile drawer */}
        <div className={`nav__drawer ${menuOpen ? 'nav__drawer--open' : ''}`}>
          {NAV_ITEMS.map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className="nav__drawer-link"
              onClick={() => setMenuOpen(false)}>{s}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="about">
        <div className="hero__glow" />
        <div className="hero__grid" />
        <div className="hero__inner">
          <div className="hero__avatar">
            {profile.photo
              ? <img src={profile.photo} alt={profile.name} className="hero__photo" />
              : <div className="hero__initials">{initials}</div>
            }
            <div className="hero__status">
              <span className="status-dot" />
              {profile.status}
            </div>
          </div>
          <div className="hero__text">
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__title">
              <span className="accent"><Typewriter words={profile.taglines?.length ? profile.taglines : [profile.title]} /></span>
              {profile.company && <> @ <span className="company">{profile.company}</span></>}
            </p>
            <p className="hero__bio">{profile.bio}</p>
            <div className="hero__actions">
              <a href={`mailto:${links.email}`} className="btn btn--primary">Get in Touch</a>
              {profile.resumeLink !== '#' && (
                <a href={profile.resumeLink} target="_blank" rel="noreferrer" className="btn btn--outline">
                  View Resume <ExternalLinkIcon />
                </a>
              )}
            </div>
            <div className="hero__socials">
              <a href={links.github} target="_blank" rel="noreferrer" className="social-btn" title="GitHub"><GithubIcon /></a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn"><LinkedInIcon /></a>
              <a href={`mailto:${links.email}`} className="social-btn" title="Email"><EmailIcon /></a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" className="social-btn" title="LeetCode"><LeetcodeIcon /></a>
            </div>
          </div>
        </div>

        {/* Stat strip */}
        {stats?.length > 0 && (
          <Reveal className="stat-strip" as="div">
            <div className="stat-strip__inner">
              {stats.map((s, i) => (
                <div key={i} className="stat">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  <span className="stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="section section--alt" id="experience">
        <div className="section__inner">
          <Reveal><h2 className="section__title">Work Experience</h2></Reveal>
          <Reveal delay={60}><p className="section__sub">My professional journey</p></Reveal>
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal key={i} delay={i * 80} className="timeline__item-wrap">
                <div className="timeline__item">
                  <div className="timeline__dot">
                    <BriefcaseIcon />
                  </div>
                  <div className="timeline__card">
                    <div className="timeline__header">
                      <div className="timeline__title-group">
                        <h3 className="timeline__role">{job.role}</h3>
                        <span className="timeline__company">{job.company}</span>
                      </div>
                      <div className="timeline__meta">
                        <span className="timeline__date">
                          <CalendarIcon />
                          {job.startDate} — {job.current ? <span className="timeline__present">Present</span> : job.endDate}
                        </span>
                        {job.location && (
                          <span className="timeline__location">
                            <MapPinIcon />{job.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <ul className="timeline__bullets">
                      {job.description.map((point, j) => (
                        <li key={j} className="timeline__bullet">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      {education?.length > 0 && (
        <section className="section" id="education">
          <div className="section__inner">
            <Reveal><h2 className="section__title">Education</h2></Reveal>
            <Reveal delay={60}><p className="section__sub">Academic background</p></Reveal>
            <div className="edu-list">
              {education.map((ed, i) => (
                <Reveal key={i} delay={i * 80} as="div">
                  <div className="edu-card">
                    <div className="edu-card__icon"><GradCapIcon /></div>
                    <div className="edu-card__body">
                      <h3 className="edu-card__school">{ed.school}</h3>
                      <p className="edu-card__degree">{ed.degree}</p>
                      <div className="edu-card__meta">
                        <span className="timeline__date"><CalendarIcon />{ed.startDate} — {ed.endDate}</span>
                        {ed.score && <span className="edu-card__score">{ed.score}</span>}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SKILLS ── */}
      <section className="section section--alt" id="skills">
        <div className="section__inner">
          <Reveal><h2 className="section__title">Tech Stack</h2></Reveal>
          <Reveal delay={60}><p className="section__sub">Technologies & tools I work with</p></Reveal>
          <Reveal delay={100}>
            <div className="skill-tabs">
              {['All', ...skillCategories.map((c) => c.category)].map((cat) => (
                <button
                  key={cat}
                  className={`skill-tab ${skillFilter === cat ? 'skill-tab--active' : ''}`}
                  onClick={() => setSkillFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
          <div className="skills-grid">
            {filteredCategories.flatMap((c) => c.items).map((skill, i) => (
              <div key={`${skillFilter}-${skill}-${i}`} className="skill-chip">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODING PROFILES ── */}
      <section className="section" id="coding">
        <div className="section__inner">
          <Reveal><h2 className="section__title">Coding Profiles</h2></Reveal>
          <Reveal delay={60}><p className="section__sub">Find me across platforms</p></Reveal>
          <div className="cards-grid">
            {codingProfiles.map((p, i) => (
              <Reveal key={i} delay={i * 80} as="div">
                <a href={p.url} target="_blank" rel="noreferrer" className="card card--link">
                  <div className="card__icon" style={{ background: `${p.color}22`, color: p.color }}>
                    {p.icon === 'github' ? <GithubIcon /> : <LeetcodeIcon />}
                  </div>
                  <div className="card__body">
                    <h3 className="card__title">{p.platform}</h3>
                    <p className="card__handle">{p.handle}</p>
                    <p className="card__desc">{p.description}</p>
                  </div>
                  <div className="card__arrow"><ExternalLinkIcon /></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section section--alt" id="certifications">
        <div className="section__inner">
          <Reveal><h2 className="section__title">Certifications</h2></Reveal>
          <Reveal delay={60}><p className="section__sub">Credentials & accomplishments</p></Reveal>
          <div className="certs-list">
            {certifications.map((cert, i) => (
              <Reveal key={i} delay={i * 80} as="div">
                <a href={cert.link} target="_blank" rel="noreferrer" className="cert-card">
                  <div className="cert-card__badge">{cert.badge}</div>
                  <div className="cert-card__body">
                    <h3 className="cert-card__name">{cert.name}</h3>
                    <p className="cert-card__meta">{cert.issuer}{cert.year ? ` · ${cert.year}` : ''}</p>
                  </div>
                  <div className="cert-card__arrow"><ExternalLinkIcon /></div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section--alt" id="contact">
        <div className="section__inner section__inner--center">
          <Reveal><h2 className="section__title">Get In Touch</h2></Reveal>
          <Reveal delay={60}><p className="section__sub">Let's connect and build something great</p></Reveal>
          <Reveal delay={100}>
            <div className="contact-grid">
              <button onClick={copyEmail} className="contact-item contact-item--btn">
                {copied ? <CheckIcon /> : <EmailIcon />}
                <span>{copied ? 'Copied!' : links.email}</span>
                {!copied && <CopyIcon />}
              </button>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="contact-item"><LinkedInIcon /><span>LinkedIn</span></a>
              <a href={links.github} target="_blank" rel="noreferrer" className="contact-item"><GithubIcon /><span>GitHub</span></a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" className="contact-item"><LeetcodeIcon /><span>LeetCode</span></a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Built by {profile.name} · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
