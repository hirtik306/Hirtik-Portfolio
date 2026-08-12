import { getProjects } from "@/lib/getProjects";

export default async function HomePage() {
  const allProjects = await getProjects();
  const projects = allProjects.slice(0, 6);

  return (
    <>
      <section id="home" className="hero">
        <canvas id="particleCanvas"></canvas>
        <div className="wrap hero-inner">
          <div className="hero-text">
            <p className="eyebrow">// <span id="rotateRole"></span><span className="cursor-blink">&nbsp;</span></p>
            <h1>Hi, I'm <span className="accent-name">Hirtik Kumar</span></h1>
            <p className="hero-sub">I build fast, responsive web apps — from pixel-perfect interfaces to the APIs and databases running underneath them.</p>

            <div className="hero-actions">
              <a className="btn btn-primary magnetic" href="#projects">View Projects</a>
              <a className="btn btn-ghost magnetic" href="/resume_hirtik_kumar.pdf" target="_blank" rel="noopener">
                <i className="fa-solid fa-download"></i> Résumé
              </a>
            </div>

            <div className="hero-meta">
              <span><i className="fa-solid fa-graduation-cap"></i> Graduating Soon</span>
              <span><i className="fa-solid fa-briefcase"></i> Open for Projects &amp; Freelance</span>
            </div>
          </div>

          <div className="hero-code">
            <div className="window-bar">
              <span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span>
              <span className="window-title">developer.js</span>
            </div>
            <pre className="code-block"><code>
<span className="code-line"><span className="tok-kw">const</span> <span className="tok-var">developer</span> <span className="tok-punc">=</span> <span className="tok-punc">{"{"}</span></span>
<span className="code-line"><span className="tok-key">  name:</span> <span className="tok-str">'Hirtik Kumar'</span><span className="tok-punc">,</span></span>
<span className="code-line"><span className="tok-key">  role:</span> <span className="tok-str">'Full-Stack Developer'</span><span className="tok-punc">,</span></span>
<span className="code-line"><span className="tok-key">  stack:</span> <span className="tok-punc">[</span><span className="tok-str">'React'</span><span className="tok-punc">,</span> <span className="tok-str">'React Native'</span><span className="tok-punc">,</span> <span className="tok-str">'Node.js'</span><span className="tok-punc">,</span> <span className="tok-str">'MongoDB'</span><span className="tok-punc">,</span> <span className="tok-str">'Supabase'</span><span className="tok-punc">]</span><span className="tok-punc">,</span></span>
<span className="code-line"><span className="tok-key">  toolkit:</span> <span className="tok-punc">[</span><span className="tok-str">'Cursor'</span><span className="tok-punc">,</span> <span className="tok-str">'Antigravity'</span><span className="tok-punc">,</span> <span className="tok-str">'VS Code'</span><span className="tok-punc">]</span><span className="tok-punc">,</span></span>
<span className="code-line"><span className="tok-key">  loves:</span> <span className="tok-str">'clean UI + solid backend'</span><span className="tok-punc">,</span></span>
<span className="code-line"><span className="tok-key">  status:</span> <span className="tok-fn">getStatus</span><span className="tok-punc">()</span></span>
<span className="code-line"><span className="tok-punc">{"}"};</span></span>
<span className="code-line"><span className="tok-kw">export default</span> <span className="tok-var">developer</span><span className="tok-punc">;</span><span className="final-cursor"></span></span>
            </code></pre>
          </div>
        </div>
      </section>

      <section id="stats" className="stats reveal">
        <div className="wrap stats-grid">
          <div className="stat">
            <p className="stat-num" data-target="3" data-suffix="+">0</p>
            <p className="stat-label">Years Learning to Code</p>
          </div>
          <div className="stat">
            <p className="stat-num" data-target="19" data-suffix="+">0</p>
            <p className="stat-label">Projects Built</p>
          </div>
          <div className="stat">
            <p className="stat-num" data-target="16" data-suffix="+">0</p>
            <p className="stat-label">Technologies Used</p>
          </div>
          <div className="stat">
            <p className="stat-num" data-target="100" data-suffix="%">0</p>
            <p className="stat-label">Committed to Clean Code</p>
          </div>
        </div>
      </section>

      <section id="about" className="about reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/about</p>
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-photo">
              <img src="/Hirtik.png" alt="Hirtik Kumar" />
            </div>
            <div className="about-text">
              <p>
                I'm a Computer Science student who enjoys turning ideas into working software —
                from the first line of markup to the API call that makes it feel alive.
                I care about interfaces that are clean, fast, and actually pleasant to use.
              </p>
              <p>
                Most of my time goes into the JavaScript ecosystem: building interactive UIs with React,
                wiring up backends with Node.js and Express, and modeling data with MongoDB. I'm still
                learning every day, and I like it that way.
              </p>
              <ul className="about-facts">
                <li><span>Focus</span> Full-stack web development</li>
                <li><span>Stack</span> React · Node.js · Express · MongoDB</li>
                <li><span>Education</span> BS Computer Science</li>
                <li><span>Now</span> Deepening React patterns &amp; REST API design</li>
                <li><span>Status</span> <span className="status-dot"></span>Open for Projects · Freelancer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="process reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/process</p>
          <h2>How I Work</h2>
          <p className="process-lead">Every project follows the same loop — small enough to stay fast, disciplined enough to ship something solid.</p>
          <div className="process-grid">
            <div className="process-card">
              <p className="process-step">01</p>
              <h3>Understand</h3>
              <p>Start with the actual problem, not the tech — who it's for, what "done" looks like, and what can be cut.</p>
            </div>
            <div className="process-card">
              <p className="process-step">02</p>
              <h3>Build</h3>
              <p>Wireframe fast, then build in small working pieces — UI first, wired to real data as soon as it's ready.</p>
            </div>
            <div className="process-card">
              <p className="process-step">03</p>
              <h3>Test</h3>
              <p>Break it on purpose — edge cases, weird inputs, slow networks — before anyone else finds the cracks.</p>
            </div>
            <div className="process-card">
              <p className="process-step">04</p>
              <h3>Ship &amp; Iterate</h3>
              <p>Deploy, watch how it's actually used, and come back to improve it — done isn't a one-time event.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/skills</p>
          <h2>Skills</h2>
          <div className="skills-window">
            <div className="window-bar">
              <span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span>
              <span className="window-title">skills.json</span>
            </div>
            <div className="skills-body">
              <div className="skill-group">
                <p className="group-label">"frontend":</p>
                <div className="skill-grid">
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-html5"></i><span>HTML5</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"90%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-css3-alt"></i><span>CSS3</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"85%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-js"></i><span>JavaScript</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"80%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-react"></i><span>React</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"70%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-react"></i><span>React Native</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"55%"}}></div></div></div>
                </div>
              </div>
              <div className="skill-group">
                <p className="group-label">"backend":</p>
                <div className="skill-grid">
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-node"></i><span>Node.js</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"70%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-server"></i><span>Express</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"65%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-database"></i><span>MongoDB</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"60%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-bolt supabase-ic"></i><span>Supabase</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"65%"}}></div></div></div>
                </div>
              </div>
              <div className="skill-group">
                <p className="group-label">"tools":</p>
                <div className="skill-grid">
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-git-alt"></i><span>Git</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"80%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-github"></i><span>GitHub</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"80%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-terminal"></i><span>VS Code</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"85%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-figma"></i><span>Figma</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"65%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-palette"></i><span>Canva</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"70%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-cloud-arrow-up"></i><span>Deployment</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"75%"}}></div></div></div>
                </div>
              </div>
              <div className="skill-group">
                <p className="group-label">"ai-assisted workflow":</p>
                <div className="skill-grid">
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-i-cursor"></i><span>Cursor</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"80%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-meteor"></i><span>Antigravity</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"70%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-robot"></i><span>Claude</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"85%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-brands fa-github"></i><span>Copilot</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"75%"}}></div></div></div>
                  <div className="skill-card"><div className="skill-card-top"><i className="fa-solid fa-comment-dots"></i><span>Prompt Engineering</span></div><div className="skill-meter"><div className="skill-meter-fill" style={{width:"85%"}}></div></div></div>
                </div>
              </div>
            </div>
          </div>
          <p className="skills-note"><strong>Note:</strong> these percentages reflect comfort level, not certification — I'm actively leveling all of these up.</p>
          <p className="skills-note"><strong>Yes, I use AI tools daily</strong> — knowing <em>how</em> to direct them is a skill on its own. I still read, understand and own every line that ships.</p>
        </div>
      </section>

      <section id="services" className="services reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/services</p>
          <h2>What I Can Build For You</h2>
          <p className="process-lead">Whether it's a full product or one stubborn feature, here's where I'm most useful.</p>
          <div className="services-grid">
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-layer-group"></i></div><h3>Full-Stack Web Apps</h3><p>End-to-end builds — React front end, Node.js/Express API, and a database that doesn't fall over.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-bolt supabase-ic"></i></div><h3>Supabase Backends</h3><p>Auth, Postgres, real-time subscriptions and storage — shipped fast without hand-rolling your own backend.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-plug"></i></div><h3>APIs &amp; Integrations</h3><p>REST APIs, third-party integrations, and clean data models that make the front end's job easy.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-mobile-screen-button"></i></div><h3>Responsive UI/UX</h3><p>Interfaces that hold up on any screen size — accessible, fast, and built with intent, not templates.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-brands fa-react"></i></div><h3>React Native Apps</h3><p>Cross-platform mobile builds sharing logic with the web app where it makes sense.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div><h3>AI-Accelerated Delivery</h3><p>I use tools like Cursor, Antigravity and Claude to move faster on boilerplate — so more time goes into the parts that actually need a human.</p></div>
            <div className="service-card"><div className="service-icon"><i className="fa-solid fa-comment-dots"></i></div><h3>Prompt Engineering</h3><p>Designing effective prompts and AI workflows — for coding assistants, chatbots, and content or automation pipelines that actually deliver reliable results.</p></div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/projects</p>
          <h2>Projects</h2>
          <div className="project-container">
            {projects.map((p) => (
              <div className="project tilt-card" key={p.id}>
                <div className="project-banner project-banner-img"><img src={p.image} alt={p.title} loading="lazy" /></div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <ul className="project-features">
                    {p.features.map((f, i) => <li key={i}>{f}</li>)}
                  </ul>
                  <div className="tech-tags">
                    {p.tech.map((t, i) => <span key={i}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.url} className="primary" target="_blank" rel="noopener">$ live site</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign:"center", marginTop:"36px"}}>
            <a href="/projects" className="btn btn-ghost magnetic">$ view all client work ({allProjects.length}+)</a>
          </div>
        </div>
      </section>

      <section id="journey" className="journey reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/journey</p>
          <h2>Journey So Far</h2>
          <p className="process-lead">Still early, still climbing — here's the trajectory.</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-date">Year 1</p>
                <h3>Started Computer Science</h3>
                <p>Picked up the fundamentals — logic, data structures, and the first "hello world" that didn't feel small anymore.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-date">Year 2</p>
                <h3>Went Full-Stack</h3>
                <p>Moved past static pages into React, Node.js and MongoDB — started shipping small apps end to end.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-date">Now</p>
                <h3>Building Mobile Apps</h3>
                <p>Currently working on app development with React Native — turning web-dev fundamentals into real mobile apps, alongside deepening React patterns, REST API design, and Supabase.</p>
              </div>
            </div>
            <div className="timeline-item timeline-future">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <p className="timeline-date">Next</p>
                <h3>Open For Projects</h3>
                <p>Wrapping up my degree and open for freelance projects, contract work, and collaborations where I can build something real for someone.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/experience</p>
          <h2>Experience &amp; Achievements</h2>
          <p className="process-lead">Internships, courses and hands-on work that got me here.</p>

          <div className="exp-timeline">
            <div className="exp-row">
              <div className="exp-card">
                <p className="exp-title"><i className="fa-solid fa-mobile-screen-button"></i> React Native Developer — Gitrex Technologies Inc.</p>
                <p className="exp-meta">Internship <span>·</span> Currently ongoing <span>·</span> Islamabad, Pakistan</p>
                <p className="exp-desc">Currently interning as a React Native developer, building cross-platform mobile apps and applying my full-stack fundamentals to real app-development work.</p>
                <span className="exp-badge">In Progress</span>
              </div>
              <div className="exp-spacer"></div>
            </div>

            <div className="exp-row right-side violet">
              <div className="exp-spacer"></div>
              <div className="exp-card">
                <p className="exp-title"><i className="fa-solid fa-code"></i> Frontend Developer — HA Technologies (Pvt) Ltd</p>
                <p className="exp-meta">Internship <span>·</span> Jul 2025 – Aug 2025 <span>·</span> Islamabad, Pakistan</p>
                <p className="exp-desc">Worked primarily on front-end development — building and refining web interfaces with HTML, CSS and JavaScript in a professional team environment.</p>
                <span className="exp-badge">2 months</span>
              </div>
            </div>

            <div className="exp-row rose">
              <div className="exp-card">
                <p className="exp-title"><i className="fa-brands fa-wordpress"></i> WordPress Developer — Morosoft Technologies</p>
                <p className="exp-meta">Internship <span>·</span> Jul 2024 – Aug 2024 <span>·</span> Rawalpindi, Pakistan</p>
                <p className="exp-desc">Built and customized WordPress websites — worked with themes and plugins, optimized performance, managed security, and troubleshot real client issues.</p>
                <span className="exp-badge">2 months</span>
              </div>
              <div className="exp-spacer"></div>
            </div>

            <div className="exp-row right-side amber">
              <div className="exp-spacer"></div>
              <div className="exp-card">
                <p className="exp-title"><i className="fa-solid fa-graduation-cap"></i> Full-Stack Web Development — NAVTTC</p>
                <p className="exp-meta">Course <span>·</span> Feb 2024 – May 2024 <span>·</span> Islamabad, Pakistan</p>
                <p className="exp-desc">Completed a full stack web development course under the National Vocational and Technical Training Commission — HTML, CSS, JavaScript, Bootstrap and React.js on the front end, Node.js with MongoDB and MySQL on the back end.</p>
                <span className="exp-badge">3 months</span>
              </div>
            </div>

            <div className="exp-row">
              <div className="exp-card">
                <p className="exp-title"><i className="fa-solid fa-graduation-cap"></i> Web Development — Sina Institute of Networks &amp; Aesthetics</p>
                <p className="exp-meta">Course <span>·</span> Jul 2023 – Aug 2023 <span>·</span> Islamabad, Pakistan</p>
                <p className="exp-desc">Built a responsive front-end project using HTML, CSS and JavaScript — my first real focus on clean design and user interactivity.</p>
                <span className="exp-badge">2 months</span>
              </div>
              <div className="exp-spacer"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="faq reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/faq</p>
          <h2>Frequently Asked</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question"><span>Are you available for freelance work?</span><i className="fa-solid fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Yes — I'm graduating soon and actively taking on freelance projects, on Upwork, Fiverr, and directly. Check the status badge in the contact section below.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>What's your usual turnaround time?</span><i className="fa-solid fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Depends on scope — small features can land in days, full builds take longer. I'll give you a realistic estimate after a quick call about what you need.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>Do you work with Supabase or only MongoDB?</span><i className="fa-solid fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Both. MongoDB for flexible document-style data, Supabase when I want Postgres, auth and real-time out of the box without standing up my own backend.</p></div>
            </div>
            <div className="faq-item">
              <button className="faq-question"><span>Do you use AI tools like Cursor or Antigravity?</span><i className="fa-solid fa-chevron-down"></i></button>
              <div className="faq-answer"><p>Yes, daily — for scaffolding and boilerplate. Every line that ships is something I've read, tested and understand. AI speeds up the typing, not the thinking.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact reveal">
        <div className="wrap">
          <p className="section-tag">~/portfolio/contact</p>
          <h2>Let's Build Something</h2>
          <p className="process-lead">
            <span className="status-dot"></span> Graduating soon and open for freelance projects &amp; collaborations — I usually reply within 24 hours.
          </p>
          <div className="contact-grid">
            <div className="info-card">
              <div className="window-bar">
                <span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span>
                <span className="window-title">Get In Touch</span>
              </div>
              <div className="info-body">
                <div className="info-row">
                  <span className="info-icon icon-email"><i className="fa-solid fa-envelope"></i></span>
                  <span className="info-text">
                    <strong>Email</strong>
                    <a href="mailto:hirtikkumar001288@gmail.com">hirtikkumar001288@gmail.com</a>
                  </span>
                  <button className="copy-btn" data-copy="hirtikkumar001288@gmail.com">copy</button>
                </div>
                <a className="info-row" href="https://github.com/hirtik306" target="_blank" rel="noopener">
                  <span className="info-icon icon-github"><i className="fa-brands fa-github"></i></span>
                  <span className="info-text"><strong>GitHub</strong><span>github.com/hirtik306</span></span>
                  <i className="fa-solid fa-arrow-up-right-from-square info-arrow"></i>
                </a>
                <a className="info-row" href="https://www.linkedin.com/in/hirtikkumar/" target="_blank" rel="noopener">
                  <span className="info-icon icon-linkedin"><i className="fa-brands fa-linkedin"></i></span>
                  <span className="info-text"><strong>LinkedIn</strong><span>linkedin.com/in/hirtikkumar</span></span>
                  <i className="fa-solid fa-arrow-up-right-from-square info-arrow"></i>
                </a>
                <a className="info-row" href="https://www.upwork.com/freelancers/~01532d07b5ff38115b" target="_blank" rel="noopener">
                  <span className="info-icon icon-upwork"><i className="fa-brands fa-upwork"></i></span>
                  <span className="info-text"><strong>Upwork</strong><span>$200+ earned — hire me for freelance work</span></span>
                  <i className="fa-solid fa-arrow-up-right-from-square info-arrow"></i>
                </a>
                <a className="info-row" href="https://www.fiverr.com/hirtikkumar1288" target="_blank" rel="noopener">
                  <span className="info-icon icon-fiverr"><i className="fa-solid fa-bolt"></i></span>
                  <span className="info-text"><strong>Fiverr</strong><span>Book a gig, fast turnaround</span></span>
                  <i className="fa-solid fa-arrow-up-right-from-square info-arrow"></i>
                </a>
              </div>
            </div>

            <div className="terminal-card">
              <div className="window-bar">
                <span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span>
                <span className="window-title">Send a Message</span>
              </div>
              <form id="contactForm" className="contact-form">
                <label htmlFor="cf-name">name</label>
                <input type="text" id="cf-name" name="name" placeholder="your name" required autoComplete="off" />
                <label htmlFor="cf-email">email</label>
                <input type="email" id="cf-email" name="email" placeholder="you@example.com" required autoComplete="off" />
                <label htmlFor="cf-message">message</label>
                <textarea id="cf-message" name="message" rows={4} placeholder="tell me about your project..." required></textarea>
                <button type="submit" className="btn btn-primary" id="cfSubmit">
                  <i className="fa-solid fa-paper-plane"></i> Send Message
                </button>
                <p className="form-status" id="cfStatus"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
