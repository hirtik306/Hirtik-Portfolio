import { getProjects } from "@/lib/getProjects";

export const metadata = {
  title: "All Projects — Hirtik Kumar",
  description: "Client projects by Hirtik Kumar — custom web development, WordPress and Shopify builds.",
};

const CATEGORY_LABELS = {
  webdev: "Custom Web Development",
  wp: "WordPress",
  shopify: "Shopify",
};
const CATEGORY_SUB = {
  webdev: "Full custom builds — from booking platforms to SaaS dashboards.",
  wp: "Custom themes and page builds on WordPress.",
  shopify: "Ecommerce storefronts built and customized on Shopify.",
};
const CATEGORY_BADGE_CLASS = {
  webdev: "badge-webdev",
  wp: "badge-wp",
  shopify: "badge-shopify",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  const groups = ["webdev", "wp", "shopify"].map((cat) => ({
    key: cat,
    items: projects.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="allwork-hero">
      <div className="wrap">
        <a href="/#projects" className="back-link">&larr; back to home</a>
        <p className="section-tag">~/portfolio/all-projects</p>
        <h1>Client Work &amp; Deployments</h1>
        <p>A running list of live sites I've built or worked on for clients — custom web apps, WordPress builds and Shopify stores. Filter by type or scroll through everything below.</p>

        <div className="pfilters" id="pfilters">
          <button className="pfilter-btn active" data-filter="all">All ({projects.length})</button>
          {groups.map((g) => (
            <button className="pfilter-btn" data-filter={g.key} key={g.key}>
              {CATEGORY_LABELS[g.key]} ({g.items.length})
            </button>
          ))}
        </div>

        {groups.map((g) => (
          <div className="pgroup" data-group={g.key} key={g.key}>
            <h3 className="pgroup-title">{CATEGORY_LABELS[g.key]} <span className="count">{g.items.length} projects</span></h3>
            <p className="pgroup-sub">{CATEGORY_SUB[g.key]}</p>
            <div className="pgrid">
              {g.items.map((p) => (
                <div className="pcard" key={p.id}>
                  <div className="pcard-cover"><img src={p.image} alt={p.title} loading="lazy" /></div>
                  <div className="pcard-top">
                    <h3>{p.title}</h3>
                    <span className={`pcard-badge ${CATEGORY_BADGE_CLASS[g.key]}`}>{CATEGORY_LABELS[g.key]}</span>
                  </div>
                  <p>{p.description}</p>
                  <a className="pcard-link" href={p.url} target="_blank" rel="noopener">
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
