"use client";

import { FormEvent, useEffect, useState } from "react";
import { content, type Locale } from "./site-data";

const projectImages = [
  "https://images.unsplash.com/photo-1519608487953-e999c86e7451?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1400&q=85",
  "https://images.unsplash.com/photo-1519608487953-e999c86e7451?auto=format&fit=crop&w=1000&q=85&sat=-100",
];

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const t = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <div className="grain" aria-hidden="true" />
      <header className="nav-shell">
        <a className="wordmark" href="#top" aria-label="MOONVANTA — home">
          MOONVANTA<span>®</span>
        </a>
        <nav className="desktop-nav" aria-label={t.navigationLabel}>
          {t.nav.map((item) => (
            <button key={item.id} onClick={() => jump(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="locale-switcher" aria-label="Language selector">
            <button
              className={locale === "ru" ? "active" : ""}
              onClick={() => setLocale("ru")}
            >
              RU
            </button>
            <span>/</span>
            <button
              className={locale === "en" ? "active" : ""}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
          </div>
          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i />
            <i />
          </button>
        </div>
      </header>
      <div
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="menu-orb" />
        {t.nav.map((item, index) => (
          <button
            key={item.id}
            style={{ transitionDelay: `${index * 55}ms` }}
            onClick={() => jump(item.id)}
          >
            {item.label}
            <span>0{index + 1}</span>
          </button>
        ))}
      </div>

      <section className="hero section-pad" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow reveal">{t.hero.kicker}</p>
          <h1>
            <span className="reveal">{t.hero.titleFirst}</span>
            <em className="reveal">{t.hero.titleSecond}</em>
          </h1>
          <p className="hero-description reveal">{t.hero.description}</p>
          <div className="hero-actions reveal">
            <button
              className="button button-primary magnetic"
              onClick={() => jump("contact")}
            >
              {t.hero.primary}
              <b>↗</b>
            </button>
            <button className="text-link" onClick={() => jump("work")}>
              {t.hero.secondary}
              <span>↓</span>
            </button>
          </div>
        </div>
        <div className="orb-wrap" aria-label="Abstract lunar form">
          <div className="orb-shadow" />
          <div className="orb">
            <span />
            <i />
            <b />
          </div>
          <p className="orb-label">01 — {t.hero.orbLabel}</p>
        </div>
        <div className="scroll-prompt">
          <span />
          {t.scroll}
        </div>
      </section>
      <section className="manifesto section-pad" id="about">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <div className="manifesto-layout">
          <h2>
            {t.about.title}
            <em>{t.about.emphasis}</em>
          </h2>
          <div>
            <p>{t.about.body}</p>
            <a href="#contact">
              {t.about.link} <span>↗</span>
            </a>
          </div>
        </div>
      </section>
      <section className="work section-pad" id="work">
        <div className="section-heading">
          <p className="eyebrow">{t.work.eyebrow}</p>
          <h2>{t.work.title}</h2>
          <span>({t.projects.length})</span>
        </div>
        <div className="projects-grid">
          {t.projects.map((project, index) => (
            <article
              className={`project project-${index + 1}`}
              key={project.name}
            >
              <div className="project-image">
                <img src={projectImages[index]} alt={project.imageAlt} />
                <div className="project-shade" />
                <span className="view-project">
                  {t.work.view}
                  <b>↗</b>
                </span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.name}</h3>
                  <p>{project.category}</p>
                </div>
                <span>{project.year}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="services section-pad" id="services">
        <div className="section-heading">
          <p className="eyebrow">{t.services.eyebrow}</p>
          <h2>{t.services.title}</h2>
        </div>
        <div className="service-list">
          {t.services.items.map((service, index) => (
            <article className="service-row" key={service.title}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span className="service-arrow">↗</span>
            </article>
          ))}
        </div>
      </section>
      <section className="process section-pad" id="process">
        <div className="process-top">
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2>{t.process.title}</h2>
          <p>{t.process.body}</p>
        </div>
        <ol>
          {t.process.steps.map((step, index) => (
            <li key={step}>
              <span>0{index + 1}</span>
              <strong>{step}</strong>
              <i />
            </li>
          ))}
        </ol>
      </section>
      <section className="reasons section-pad">
        <p className="eyebrow">{t.reasons.eyebrow}</p>
        <div className="reason-grid">
          {t.reasons.items.map((reason, index) => (
            <article key={reason.title}>
              <span>0{index + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="stats section-pad" aria-label={t.stats.eyebrow}>
        {t.stats.items.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
      <section className="cta section-pad">
        <p className="eyebrow">{t.cta.eyebrow}</p>
        <h2>
          {t.cta.lineOne}
          <br />
          <em>{t.cta.lineTwo}</em>
        </h2>
        <button
          className="round-cta magnetic"
          onClick={() => jump("contact")}
          aria-label={t.cta.button}
        >
          ↗<span>{t.cta.button}</span>
        </button>
      </section>
      <section className="contact section-pad" id="contact">
        <div className="contact-intro">
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.body}</p>
          <div className="contact-links">
            {t.socials.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.name}
                <span>↗</span>
              </a>
            ))}
          </div>
        </div>
        <form onSubmit={submit}>
          <label>
            {t.contact.name}
            <input required name="name" autoComplete="name" />
          </label>
          <label>
            {t.contact.email}
            <input required type="email" name="email" autoComplete="email" />
          </label>
          <label>
            {t.contact.company}
            <input name="company" autoComplete="organization" />
          </label>
          <label>
            {t.contact.project}
            <select name="project">
              <option>{t.contact.select}</option>
              {t.services.items.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
            </select>
          </label>
          <label className="form-wide">
            {t.contact.message}
            <textarea required name="message" rows={3} />
          </label>
          <button className="button button-primary" type="submit">
            {sent ? t.contact.sent : t.contact.submit}
            <b>↗</b>
          </button>
        </form>
      </section>
      <footer>
        <a className="wordmark" href="#top">
          MOONVANTA<span>®</span>
        </a>
        <p>{t.footer.tagline}</p>
        <div>
          <span>© 2026 MOONVANTA</span>
          <span>{t.footer.location}</span>
        </div>
      </footer>
    </main>
  );
}
