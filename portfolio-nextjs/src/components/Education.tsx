export default function Education() {
  return (
    <>
      <section id="education">
        <div className="section-wrap">
          <div className="section-tag reveal">education</div>
          <h2 className="section-title reveal">
            Academic<br />
            <em>background.</em>
          </h2>
          <div className="edu-card reveal">
            <div>
              <div className="edu-degree">BSc in Software Engineering</div>
              <div className="edu-school">Daffodil International University</div>
              <div className="edu-school" style={{ color: "var(--text3)", fontSize: "12px" }}>Savar, Dhaka, Bangladesh</div>
              <div className="edu-period" style={{ marginTop: "12px" }}>Expected graduation — May 2026</div>
            </div>
            <div className="edu-cgpa">
              <div className="edu-cgpa-num">3.70</div>
              <div className="edu-cgpa-label">CGPA / 4.00</div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
