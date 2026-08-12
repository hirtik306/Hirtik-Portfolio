// ============================================
// Hirtik Kumar — Developer Portfolio (Next.js version)
// Same visual behaviour as the original script.js,
// contact form now posts to the /api/contact backend route.
// ============================================

function initPortfolioEffects() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Preloader ----------
  (function preloader() {
    const pre = document.getElementById("preloader");
    const typedEl = document.getElementById("loaderTyped");
    const fill = document.getElementById("loaderFill");
    if (!pre || !typedEl || !fill) return;
    const message = "Welcome to Hirtik's Portfolio";

    let i = 0;
    function typeNext() {
      if (i <= message.length) {
        typedEl.textContent = message.slice(0, i);
        i++;
        setTimeout(typeNext, 45);
      }
    }
    typeNext();

    setTimeout(() => { fill.style.width = "40%"; }, 500);
    setTimeout(() => { fill.style.width = "75%"; }, 1300);
    setTimeout(() => { fill.style.width = "100%"; }, 2000);

    window.addEventListener("load", () => {
      setTimeout(() => {
        pre.classList.add("hide");
        document.body.style.overflow = "";
        setTimeout(() => pre.remove(), 700);
      }, 2300);
    });

    document.body.style.overflow = "hidden";
    setTimeout(() => {
      pre.classList.add("hide");
      document.body.style.overflow = "";
    }, 4500);
  })();

  // ---------- Scroll progress bar ----------
  const scrollProgress = document.getElementById("scrollProgress");
  function updateScrollProgress() {
    if (!scrollProgress) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = pct + "%";
  }
  window.addEventListener("scroll", updateScrollProgress, { passive: true });
  updateScrollProgress();

  // ---------- Custom cursor ----------
  (function customCursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;
    let dotX = 0, dotY = 0, ringX = 0, ringY = 0;
    let ready = false;

    window.addEventListener("mousemove", (e) => {
      dotX = e.clientX; dotY = e.clientY;
      if (!ready) {
        ready = true;
        document.body.classList.add("cursor-ready");
      }
    });

    function loop() {
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;
      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();

    document.querySelectorAll("a, button, .tilt-card, .skill-card, .pcard").forEach(el => {
      el.addEventListener("mouseenter", () => ring.classList.add("grow"));
      el.addEventListener("mouseleave", () => ring.classList.remove("grow"));
    });
  })();

  // ---------- Hero particle network ----------
  (function particles() {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const hero = canvas.parentElement;
    let w, h, points;

    function resize() {
      w = canvas.width = hero.offsetWidth;
      h = canvas.height = hero.offsetHeight;
      const count = Math.min(60, Math.floor((w * h) / 22000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of points) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(94, 234, 212, ${0.14 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(94, 234, 212, 0.55)";
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }

    resize();
    tick();
    window.addEventListener("resize", resize);
  })();

  // ---------- Magnetic buttons ----------
  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });

  // ---------- Project card 3D tilt ----------
  document.querySelectorAll(".tilt-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  // ---------- Stats counter ----------
  const statNums = document.querySelectorAll(".stat-num");
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        let current = 0;
        const duration = 1400;
        const start = performance.now();

        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          current = Math.floor(eased * target);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(step);
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => statObserver.observe(el));

  window.scrollProject = function () {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // ---------- Rotating role text (eyebrow) ----------
  const roles = ["full-stack developer", "react enthusiast", "problem solver", "lifelong learner"];
  let roleIndex = 0, charIndex = 0, deleting = false;
  const rotateEl = document.getElementById("rotateRole");
  if (rotateEl) {
    (function rotateType() {
      const current = roles[roleIndex];
      if (!deleting) {
        charIndex++;
        rotateEl.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(rotateType, 1400);
          return;
        }
      } else {
        charIndex--;
        rotateEl.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      setTimeout(rotateType, deleting ? 35 : 65);
    })();
  }

  // ---------- Hero code block: staggered line reveal ----------
  const codeLines = document.querySelectorAll(".code-line");
  codeLines.forEach((line, i) => {
    setTimeout(() => {
      line.classList.add("show");
      if (i === codeLines.length - 1) {
        setTimeout(() => {
          const cursor = line.querySelector(".final-cursor");
          if (cursor) cursor.classList.add("show");
        }, 300);
      }
    }, 250 + i * 180);
  });

  // ---------- Reveal on scroll ----------
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  // ---------- Active nav tab on scroll ----------
  const sections = document.querySelectorAll("section[id]");
  const tabs = document.querySelectorAll(".tab");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        tabs.forEach(tab => {
          tab.classList.toggle("active", tab.getAttribute("href") === "#" + id);
        });
      }
    });
  }, { threshold: 0.5, rootMargin: "-80px 0px -50% 0px" });
  sections.forEach(sec => navObserver.observe(sec));

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById("navToggle");
  const navTabs = document.getElementById("navTabs");
  if (navToggle && navTabs) {
    navToggle.addEventListener("click", () => {
      navTabs.classList.toggle("open");
    });
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        navTabs.classList.remove("open");
      });
    });
  }

  // ---------- Copy email to clipboard ----------
  document.querySelectorAll(".copy-btn").forEach(btn => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = "copied!";
        setTimeout(() => { btn.textContent = original; }, 1500);
      } catch (e) {}
    });
  });

  // ---------- Contact form -> /api/contact (Supabase + email, server-side) ----------
  (function contactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;
    const submitBtn = document.getElementById("cfSubmit");
    const status = document.getElementById("cfStatus");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const message = document.getElementById("cf-message").value.trim();

      if (!name || !email || !message) {
        status.textContent = "// please fill in every field";
        status.className = "form-status err";
        return;
      }

      submitBtn.disabled = true;
      status.textContent = "// sending...";
      status.className = "form-status";

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        });
        const data = await res.json();

        if (data.ok) {
          status.textContent = "// message sent — thanks! I'll reply within 24 hours.";
          status.className = "form-status ok";
          form.reset();
        } else if (data.error === "not_configured") {
          const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
          window.location.href = `mailto:hirtikkumar001288@gmail.com?subject=Portfolio message from ${encodeURIComponent(name)}&body=${body}`;
          status.textContent = "// backend not configured yet — opened your email client instead";
          status.className = "form-status ok";
        } else {
          throw new Error(data.error || "failed");
        }
      } catch (err) {
        status.textContent = "// something went wrong — email me directly instead";
        status.className = "form-status err";
      } finally {
        submitBtn.disabled = false;
      }
    });
  })();

  // ---------- FAQ accordion ----------
  document.querySelectorAll(".faq-item").forEach(item => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!wasOpen) item.classList.add("open");
    });
  });

  // ---------- Project filter buttons (/projects page) ----------
  const filterBtns = document.querySelectorAll(".pfilter-btn");
  const pgroups = document.querySelectorAll(".pgroup");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      pgroups.forEach(g => {
        g.style.display = (filter === "all" || g.dataset.group === filter) ? "" : "none";
      });
    });
  });

  // ---------- Make whole project cards clickable ----------
  document.querySelectorAll(".project, .pcard").forEach(card => {
    const link = card.querySelector(".project-links a.primary") || card.querySelector(".project-links a") || card.querySelector("a.primary");
    if (!link) return;
    card.style.cursor = "pointer";
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      const target = link.getAttribute("target") || "_self";
      window.open(link.href, target, "noopener");
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPortfolioEffects);
} else {
  initPortfolioEffects();
}
