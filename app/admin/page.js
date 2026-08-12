"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState("projects");
  const [projects, setProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "", category: "webdev", description: "",
    features: "", tech: "", image: "", url: "",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) {
      setPassword(saved);
      setAuthed(true);
    }
  }, []);

  useEffect(() => {
    if (authed) loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authed, tab]);

  async function login(e) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = await res.json();
    if (data.ok) {
      sessionStorage.setItem("admin_pw", password);
      setAuthed(true);
    } else {
      setLoginError("Galat password.");
    }
  }

  function logout() {
    sessionStorage.removeItem("admin_pw");
    setAuthed(false);
    setPassword("");
  }

  async function loadData() {
    setLoading(true);
    if (tab === "projects") {
      const res = await fetch("/api/admin/projects", { headers: { "x-admin-password": password } });
      const data = await res.json();
      if (data.ok) setProjects(data.projects);
    } else {
      const res = await fetch("/api/admin/messages", { headers: { "x-admin-password": password } });
      const data = await res.json();
      if (data.ok) setMessages(data.messages);
    }
    setLoading(false);
  }

  async function addProject(e) {
    e.preventDefault();
    const payload = {
      ...newProject,
      features: newProject.features.split("\n").map((s) => s.trim()).filter(Boolean),
      tech: newProject.tech.split(",").map((s) => s.trim()).filter(Boolean),
    };
    const res = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-password": password },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (data.ok) {
      setNewProject({ title: "", category: "webdev", description: "", features: "", tech: "", image: "", url: "" });
      loadData();
    } else {
      alert(data.error || "Failed to add project");
    }
  }

  async function deleteProject(id) {
    if (!confirm("Delete this project?")) return;
    await fetch(`/api/admin/projects?id=${id}`, {
      method: "DELETE",
      headers: { "x-admin-password": password },
    });
    loadData();
  }

  if (!authed) {
    return (
      <section className="allwork-hero">
        <div className="wrap" style={{ maxWidth: 420 }}>
          <p className="section-tag">~/portfolio/admin</p>
          <h1>Admin Login</h1>
          <form onSubmit={login} className="contact-form" style={{ marginTop: 24 }}>
            <label htmlFor="admin-pw">password</label>
            <input
              id="admin-pw"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin password"
              required
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>
              $ login()
            </button>
            {loginError && <p className="form-status err">{loginError}</p>}
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="allwork-hero">
      <div className="wrap">
        <p className="section-tag">~/portfolio/admin</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <h1 style={{ marginBottom: 0 }}>Admin Dashboard</h1>
          <button className="btn btn-ghost" onClick={logout}>logout</button>
        </div>

        <div className="pfilters" style={{ marginTop: 24 }}>
          <button className={`pfilter-btn ${tab === "projects" ? "active" : ""}`} onClick={() => setTab("projects")}>Projects</button>
          <button className={`pfilter-btn ${tab === "messages" ? "active" : ""}`} onClick={() => setTab("messages")}>Messages</button>
        </div>

        {tab === "projects" && (
          <>
            <div className="terminal-card" style={{ marginTop: 32, maxWidth: 640 }}>
              <div className="window-bar">
                <span className="dot red"></span><span className="dot amber"></span><span className="dot green"></span>
                <span className="window-title">Add New Project</span>
              </div>
              <form onSubmit={addProject} className="contact-form">
                <label>title</label>
                <input value={newProject.title} onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} required />

                <label>category</label>
                <select
                  value={newProject.category}
                  onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                  style={{ background: "var(--bg-2, #111)", color: "inherit", border: "1px solid var(--border, #333)", borderRadius: 6, padding: "10px 12px" }}
                >
                  <option value="webdev">Custom Web Dev</option>
                  <option value="wp">WordPress</option>
                  <option value="shopify">Shopify</option>
                </select>

                <label>description</label>
                <textarea rows={3} value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required></textarea>

                <label>features (one per line)</label>
                <textarea rows={3} value={newProject.features} onChange={(e) => setNewProject({ ...newProject, features: e.target.value })}></textarea>

                <label>tech (comma separated)</label>
                <input value={newProject.tech} onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })} placeholder="React, Next.js, Supabase" />

                <label>image URL</label>
                <input value={newProject.image} onChange={(e) => setNewProject({ ...newProject, image: e.target.value })} />

                <label>live URL</label>
                <input value={newProject.url} onChange={(e) => setNewProject({ ...newProject, url: e.target.value })} required />

                <button type="submit" className="btn btn-primary" style={{ marginTop: 12 }}>$ add_project()</button>
              </form>
            </div>

            <h3 style={{ marginTop: 40 }}>Existing Projects ({projects.length})</h3>
            {loading ? <p>Loading...</p> : (
              <div className="pgrid" style={{ marginTop: 16 }}>
                {projects.map((p) => (
                  <div className="pcard" key={p.id}>
                    <div className="pcard-cover"><img src={p.image} alt={p.title} loading="lazy" /></div>
                    <div className="pcard-top"><h3>{p.title}</h3></div>
                    <p>{p.description}</p>
                    <button className="btn btn-ghost" onClick={() => deleteProject(p.id)} style={{ marginTop: 8 }}>
                      delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {tab === "messages" && (
          <div style={{ marginTop: 32 }}>
            <h3>Contact Messages ({messages.length})</h3>
            {loading ? <p>Loading...</p> : (
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
                {messages.map((m) => (
                  <div className="info-card" key={m.id}>
                    <div className="info-body" style={{ padding: 20 }}>
                      <p><strong>{m.name}</strong> — <a href={`mailto:${m.email}`}>{m.email}</a></p>
                      <p style={{ marginTop: 8 }}>{m.message}</p>
                      <p style={{ marginTop: 8, opacity: 0.6, fontSize: 13 }}>
                        {new Date(m.created_at).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
                {messages.length === 0 && <p>Abhi tak koi message nahi aaya.</p>}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
