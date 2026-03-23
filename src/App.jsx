import { profile, links, skills, certifications, codingProfiles } from './config.js';
import { useState, useEffect } from 'react';

// ── SVG Icons ──────────────────────────────────────────────
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

// ── Main App ──────────────────────────────────────────────
export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = profile.name.split(' ').map(n => n[0]).join('');

  return (
    <div className="app">
      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <span className="nav__logo">{profile.name.split(' ')[0]}<span className="accent">.</span></span>
          <div className="nav__links">
            {['About', 'Skills', 'Coding', 'Certifications', 'Contact'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="nav__link"
                onClick={() => setActiveSection(s.toLowerCase())}>
                {s}
              </a>
            ))}
          </div>
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
              Open to Opportunities
            </div>
          </div>
          <div className="hero__text">
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">{profile.name}</h1>
            <p className="hero__title">
              <span className="accent">{profile.title}</span>
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
              <a href={links.github} target="_blank" rel="noreferrer" className="social-btn" title="GitHub">
                <GithubIcon />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="social-btn" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href={`mailto:${links.email}`} className="social-btn" title="Email">
                <EmailIcon />
              </a>
              <a href={links.leetcode} target="_blank" rel="noreferrer" className="social-btn" title="LeetCode">
                <LeetcodeIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="section" id="skills">
        <div className="section__inner">
          <h2 className="section__title">Tech Stack</h2>
          <p className="section__sub">Technologies & tools I work with</p>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="skill-chip">{skill}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CODING PROFILES ── */}
      <section className="section section--alt" id="coding">
        <div className="section__inner">
          <h2 className="section__title">Coding Profiles</h2>
          <p className="section__sub">Find me across platforms</p>
          <div className="cards-grid">
            {codingProfiles.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noreferrer" className="card card--link">
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
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section className="section" id="certifications">
        <div className="section__inner">
          <h2 className="section__title">Certifications</h2>
          <p className="section__sub">Credentials & accomplishments</p>
          <div className="certs-list">
            {certifications.map((cert, i) => (
              <a key={i} href={cert.link} target="_blank" rel="noreferrer" className="cert-card">
                <div className="cert-card__badge">{cert.badge}</div>
                <div className="cert-card__body">
                  <h3 className="cert-card__name">{cert.name}</h3>
                  <p className="cert-card__meta">{cert.issuer} · {cert.year}</p>
                </div>
                <div className="cert-card__arrow"><ExternalLinkIcon /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section section--alt" id="contact">
        <div className="section__inner section__inner--center">
          <h2 className="section__title">Get In Touch</h2>
          <p className="section__sub">Let's connect and build something great</p>
          <div className="contact-grid">
            <a href={`mailto:${links.email}`} className="contact-item">
              <EmailIcon /><span>{links.email}</span>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="contact-item">
              <LinkedInIcon /><span>LinkedIn</span>
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="contact-item">
              <GithubIcon /><span>GitHub</span>
            </a>
            <a href={links.leetcode} target="_blank" rel="noreferrer" className="contact-item">
              <LeetcodeIcon /><span>LeetCode</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>Built by {profile.name} · {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
