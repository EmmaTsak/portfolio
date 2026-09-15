import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Github,
  Linkedin,
  Mail,
  Palette,
  Quote,
  ShieldCheck,
  TerminalSquare,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredProjects } from '../data/projects';
import { experience, profile, skillGroups } from '../data/profile';
import { ProjectCard } from '../components/ProjectCard';
import { Reveal } from '../components/Reveal';
import { SectionHeading } from '../components/SectionHeading';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta({ title: 'Emmanouela Tsakalidou | Portfolio', description: profile.positioning, path: '/' });
  const copyEmail = async () => navigator.clipboard.writeText(profile.email);
  return <>
    <section className="hero section"><div className="container hero-grid"><div className="hero-copy"><p className="availability"><span /> Open to software development and quality-engineering opportunities</p><p className="eyebrow">Software Developer</p><h1>Emmanouela<br/><span>Tsakalidou</span></h1><p className="hero-lead">{profile.positioning}</p><div className="discipline-line"><strong>Software Development</strong><span>Quality Engineering</span><span>UI/UX</span></div><div className="button-row"><a className="button button--primary" href="#featured-work">View my work <ArrowRight /></a><Link className="button button--ghost" to="/resume">View CV</Link></div><div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github />GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin />LinkedIn</a><a href={`mailto:${profile.email}`}><Mail />Email</a></div></div><div className="hero-panel" aria-label="Engineering focus"><div className="code-card"><div className="code-card__top"><span/><span/><span/></div><code>
  <span className="code-line">
    <span className="code-muted">const</span> developer = {'{'}
  </span>

  <span className="code-line code-line--indent">
    <span>focus:</span> <em>'reliable software'</em>,
  </span>

  <span className="code-line code-line--indent">
    <span>strengths:</span> [<em>'full stack'</em>, <em>'testing'</em>, <em>'UX'</em>],
  </span>

  <span className="code-line code-line--indent">
    <span>mindset:</span> <em>'build → validate → improve'</em>
  </span>

  <span className="code-line">
    {'}'};
  </span>
</code></div><div className="hero-mini-grid"><div><TerminalSquare/><strong>Build</strong><span>Frontend, backend & APIs</span></div><div><ShieldCheck/><strong>Validate</strong><span>Testing & debugging</span></div><div><Palette/><strong>Design</strong><span>User-centred interfaces</span></div></div></div></div></section>

    <Reveal>
  <section className="section section--soft" id="about">
    <div className="container split-intro">

      <div className="about-intro">
        <SectionHeading
          eyebrow="About"
          title="Engineering with quality and usability in the loop"
          description="My experience spans application development, testing, debugging and interface work. I like projects where implementation decisions can be traced back to user needs and verified behaviour."
        />
      
        <p className="about-relocation">
          Open to relocation across Europe · Greek & English
        </p>
      </div>

      <div className="fact-grid">
        <div>
          <span>01</span>
          <strong>Full-stack foundation</strong>
          <p>React, Node.js, APIs, relational and NoSQL databases.</p>
        </div>

        <div>
          <span>02</span>
          <strong>Quality mindset</strong>
          <p>Jest, manual validation, API testing, debugging and defect investigation.</p>
        </div>

        <div>
          <span>03</span>
          <strong>UI/UX awareness</strong>
          <p>Figma, research, personas, journeys and responsive interface decisions.</p>
        </div>
      </div>

    </div>
  </section>
</Reveal>

    <section className="section" id="featured-work"><div className="container"><SectionHeading eyebrow="Selected work" title="Projects that show how I build" description="A focused selection chosen for technical depth, range and relevance to software-engineering roles."/><div className="project-grid">{featuredProjects.map((project) => <Reveal key={project.slug}><ProjectCard project={project}/></Reveal>)}</div><div className="section-cta"><Link className="button button--ghost" to="/projects">See all projects <ArrowRight /></Link></div></div></section>

    <Reveal><section className="section quality-section"><div className="container quality-grid"><div><p className="eyebrow">Quality engineering</p><h2>I don’t treat testing as an afterthought.</h2><p>My internship work included writing and executing Jest tests, reproducing defects, debugging and supporting release readiness. In PriceWise, the thesis evaluation was primarily manual testing, with automated Jest tests explicitly documented as future work rather than claimed as completed.</p></div><div className="quality-list"><div><ClipboardCheck/><span><strong>Testing</strong>Jest, API validation, manual flows, behaviour checks</span></div><div><ShieldCheck/><span><strong>Investigation</strong>Defect reproduction, troubleshooting, root-cause analysis</span></div><div><CheckCircle2/><span><strong>Release thinking</strong>Consistency, integration and expected behaviour</span></div></div></div></section></Reveal>

    <section className="section" id="experience"><div className="container"><SectionHeading eyebrow="Experience" title="Where development and quality met"/><div className="timeline">{experience.map((item) => <Reveal key={item.role}><article className="timeline-item"><div className="timeline-period">{item.period}</div><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article></Reveal>)}</div></div></section>

    <Reveal>
      <section className="section section--soft" id="recommendation">
        <div className="container">
          <SectionHeading
            eyebrow="Recommendation"
            title="What it was like to work with me"
            description="A professional recommendation from my software-development internship at Valmore Technologies."
          />
    
          <article className="recommendation-card">
            <Quote className="recommendation-icon" />
    
            <blockquote className="recommendation-quote">
              “Her strong work ethic and willingness to support the team made her
              a valued member of our organization.”
            </blockquote>
    
            <div className="recommendation-author">
              <strong>Dimitris Ampelakiotis</strong>
              <span>Co-Owner & CTO · Valmore Technologies</span>
            </div>
    
            <p className="recommendation-context">
              Software Development Internship · React Native · Testing · Debugging · Troubleshooting
            </p>
    
            <a
              className="button button--ghost"
              href={`${import.meta.env.BASE_URL}Letter%20of%20Recommendation-Emmanouela%20Tsakalidou.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              <FileText />
              View full recommendation
            </a>
          </article>
        </div>
      </section>
    </Reveal>
    
    <Reveal><section className="section section--soft" id="education"><div className="container"><SectionHeading eyebrow="Education" title="Software-development foundations, applied in projects"/><div className="education-grid"><article><span>Sep 2024 — Jun 2026</span><h3>BSc (Hons) Computing (Software Development)</h3><p>University of Essex</p><p>Coursework covered software development, APIs, databases, testing and debugging. Advanced Programming included a RESTful API with JWT authentication and Postman validation of filtering, sorting, pagination and protected endpoints.</p></article><article><span>Sep 2023 — Jun 2024</span><h3>Web Designer/Developer — Video Games</h3><p>IVT OMIROS</p><p>Earlier web-development and design study that supports the interface and user-experience side of my software work.</p></article></div></div></section></Reveal>

    <section className="section" id="skills"><div className="container"><SectionHeading eyebrow="Skills" title="Evidence over proficiency bars" description="Technologies are grouped by how I use them, not assigned arbitrary percentages."/><div className="skills-grid">{skillGroups.map((group) => <Reveal key={group.title}><article className="skill-card"><h3>{group.title}</h3><div className="tag-row">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article></Reveal>)}</div></div></section>

    <section className="section" id="contact"><div className="container contact-card">

  <div className="contact-profile">
    <img
      src={`${import.meta.env.BASE_URL}assets/136719701.jpg`}
      alt="Portrait of Emmanouela Tsakalidou"
    />

    <div>
      <p className="eyebrow">Contact</p>
      <h2>Looking for a developer who cares how the software behaves?</h2>
      <p>
        I’m interested in software-development roles, with quality engineering
        and UI/UX as complementary strengths.
      </p>
    </div>
  </div><div className="contact-actions"><a className="button button--primary" href={`mailto:${profile.email}`}><Mail/>Email me</a><button className="button button--ghost" onClick={copyEmail}>Copy email</button><a href={profile.github} target="_blank" rel="noreferrer"><Github/>GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/>LinkedIn</a></div></div></section>
  </>;
}
