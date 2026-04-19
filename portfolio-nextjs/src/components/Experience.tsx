export default function Experience() {
  return (
    <>
      <section id="experience">
        <div className="section-wrap">
          <div className="section-tag reveal">experience</div>
          <h2 className="section-title reveal">
            Where I&apos;ve<br />
            <em>worked.</em>
          </h2>
          <div className="exp-timeline reveal">
            <div className="exp-item">
              <div className="exp-period">SEPT 2025 — PRESENT</div>
              <div className="exp-role">Software Engineer Intern</div>
              <div className="exp-company">Software Gaze · Dhaka, Bangladesh</div>
              <ul className="exp-bullets">
                <li>Contributed to an internal office management portal for secure employee management.</li>
                <li>Implemented role-based access control with JWT authentication to improve security.</li>
                <li>Built real-time group and private chat using WebSocket for better team collaboration.</li>
                <li>Designed and integrated backend APIs with frontend components to improve performance and UX.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
