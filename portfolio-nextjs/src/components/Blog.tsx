export default function Blog() {
  return (
    <>
      <section id="blog">
        <div className="section-wrap">
          <div className="section-tag reveal">blog</div>
          <h2 className="section-title reveal">
            Writing &<br />
            <em>thoughts.</em>
          </h2>
          <div className="blog-card reveal">
            <a href="https://medium.com/@fayek22205341186/deploying-a-full-stack-spring-boot-react-hobby-project-for-free-beginner-friendly-pipeline-b6e3fbd25cf7" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="blog-img-container">
                <img src="/Blogs/blog p.webp" alt="Blog post cover" className="blog-img" />
              </div>
              <div className="blog-platform">Featured on Medium · April 2026</div>
              <div className="blog-title">Deploying a Full-Stack Spring Boot + React Hobby Project for Free (Beginner-Friendly Pipeline)</div>
              <div className="blog-meta">
                <span>7 min read</span>
                <span>·</span>
                <span>April 2026</span>
              </div>
              <div className="blog-tags">
                <span className="blog-tag">Spring Boot</span>
                <span className="blog-tag">React</span>
                <span className="blog-tag">Free Hosting</span>
                <span className="blog-tag">DevOps</span>
              </div>
              <div className="blog-arrow">read article →</div>
            </a>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
