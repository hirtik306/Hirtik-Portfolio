import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Hirtik Kumar — Full-Stack Developer",
  description:
    "Portfolio of Hirtik Kumar, a full-stack web developer building fast, responsive web applications with React, Node.js, MongoDB and Supabase.",
  icons: { icon: "/hirtik-avatar.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body>
        <div id="preloader">
          <div className="loader-content">
            <p className="loader-hand">👋</p>
            <p className="loader-welcome">
              <span id="loaderTyped"></span>
              <span className="loader-caret">|</span>
            </p>
            <div className="loader-bar">
              <div className="loader-fill" id="loaderFill"></div>
            </div>
          </div>
        </div>

        <div id="scrollProgress"></div>
        <div className="cursor-dot" id="cursorDot"></div>
        <div className="cursor-ring" id="cursorRing"></div>

        <nav>
          <div className="nav-inner">
            <a href="/#home" className="brand">
              <img src="/hirtik-avatar.png" alt="Hirtik Kumar" className="brand-avatar" />
              Hirtik Kumar
            </a>
            <button className="nav-toggle" id="navToggle" aria-label="Toggle menu">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            <ul className="tabs" id="navTabs">
              <li><a href="/#home" className="tab">Home</a></li>
              <li><a href="/#about" className="tab">About</a></li>
              <li><a href="/#process" className="tab">Process</a></li>
              <li><a href="/#skills" className="tab">Skills</a></li>
              <li><a href="/#services" className="tab">Services</a></li>
              <li><a href="/#projects" className="tab">Projects</a></li>
              <li><a href="/#journey" className="tab">Journey</a></li>
              <li><a href="/#experience" className="tab">Experience</a></li>
              <li><a href="/#contact" className="tab">Contact</a></li>
            </ul>
          </div>
        </nav>

        {children}

        <footer>
          <p>© <span id="year"></span> Hirtik Kumar — built with <span className="accent">&lt;/&gt;</span> and a lot of coffee</p>
        </footer>

        <Script src="/effects.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
