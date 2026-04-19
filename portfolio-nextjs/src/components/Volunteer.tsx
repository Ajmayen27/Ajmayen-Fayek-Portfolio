export default function Volunteer() {
  return (
    <>
      <section id="volunteer">
        <div className="section-wrap">
          <div className="section-tag reveal">volunteer</div>
          <h2 className="section-title reveal">
            Community<br />
            <em>involvement.</em>
          </h2>
          <div className="volunteer-grid reveal">
            <div className="vol-card">
              <div className="vol-org">Software Engineering Club, DIU</div>
              <div className="vol-role">Volunteer — Code Trap Programming Contest</div>
              <div className="vol-date">February 2024</div>
              <div className="vol-desc">Managed contestant registrations, provided technical assistance, and ensured a seamless competition experience for the Code Trap Programming Contest.</div>
            </div>
            <div className="vol-card">
              <div className="vol-org">Cyber Security Center, DIU</div>
              <div className="vol-role">Volunteer — International Cyber Security Day</div>
              <div className="vol-date">April 2023</div>
              <div className="vol-desc">Managed time schedules, assisted in program design, and supported overall event organization and execution to ensure smooth operations.</div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
