export default function About() {
  return (
    <>
      <section id="objective">
        <div className="section-wrap">
          <div className="section-tag reveal">objective</div>
          <h2 className="section-title reveal">
            Driven to build<br />
            <em>things that matter.</em>
          </h2>
          <div className="about-grid reveal">
            <div className="about-text">
              <p>Results-driven <strong>Java Developer</strong> seeking a challenging role in application development where I can leverage my expertise in Java, Spring Boot, and backend system design to build scalable, high-performance applications.</p>
              <p>Passionate about developing robust APIs, optimizing data-driven solutions, and integrating intelligent technologies to solve real-world problems. Committed to writing <strong>clean, maintainable code</strong> and collaborating in agile teams.</p>
              <p>Currently pursuing BSc in Software Engineering at <strong>Daffodil International University</strong>, with a strong academic record and hands-on experience building full-stack systems.</p>
            </div>
            <div className="about-right">
              <div className="about-card">
                <div className="about-card-label">LOCATION</div>
                <div className="about-card-val">Dhaka, Bangladesh</div>
              </div>
              <div className="about-card">
                <div className="about-card-label">EMAIL</div>
                <div className="about-card-val">ajmayenfayek999999@gmail.com</div>
              </div>
              <div className="about-card">
                <div className="about-card-label">PHONE</div>
                <div className="about-card-val">+880 1763111024</div>
              </div>
              <div className="about-card">
                <div className="about-card-label">STATUS</div>
                <div className="about-card-val" style={{ color: "var(--accent)", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", boxShadow: "0 0 10px rgba(0,212,170,0.6)" }}></span>
                  Available for opportunities
                </div>
              </div>
              <div style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
                <a href="https://www.linkedin.com/in/ajmayen-fayek/" target="_blank" className="btn-outline" style={{ flex: 1, textAlign: "center", justifyContent: "center", fontSize: "11px" }}>LinkedIn ↗</a>
                <a href="https://github.com/Ajmayen27" target="_blank" className="btn-outline" style={{ flex: 1, textAlign: "center", justifyContent: "center", fontSize: "11px" }}>GitHub ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
