export default function Projects() {
  return (
    <>
      <section id="projects">
        <div className="section-wrap">
          <div className="section-tag reveal">projects</div>
          <h2 className="section-title reveal">
            Things I&apos;ve<br />
            <em>built.</em>
          </h2>

          <div className="project-card reveal" style={{ gridColumn: "1 / -1", transitionDelay: "0.1s" }}>
            <div className="project-num">04 / 2026</div>
            <div className="project-name">Software Gaze HR</div>
            <div className="project-desc">
              An enterprise HR and client support platform featuring advanced employee
              management, payroll processing, role-based access control, and real-time
              client support. Built a WebSocket-powered support system allowing clients
              to create and track tickets with instant updates. Includes multiple user
              roles, secure JWT authentication, and scalable business workflows.
            </div>

            <div className="project-stack">
              <span className="stack-tag">Java</span>
              <span className="stack-tag">Spring Boot</span>
              <span className="stack-tag">Spring Security</span>
              <span className="stack-tag">JWT</span>
              <span className="stack-tag">WebSocket</span>
              <span className="stack-tag">JPA</span>
              <span className="stack-tag">React</span>
              <span className="stack-tag">Vite</span>
              <span className="stack-tag">PostgreSQL</span>
              <span className="stack-tag">Docker</span>
            </div>

            <a
              href="https://github.com/Ajmayen27/Software-Gaze-HR"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              view on github →
            </a>
          </div>

          <div className="projects-grid reveal">
            <div className="project-card reveal" style={{ transitionDelay: "0s" }}>
              <div className="project-num">01 / 2026</div>
              <div className="project-name">Smart Depot</div>
              <div className="project-desc">A full-stack depot management system for tracking incoming and outgoing chalan operations. Features real-time stock management with automatic updates and validation to prevent negative inventory. Includes dealer management with deposit and due calculations.</div>
              <div className="project-stack">
                <span className="stack-tag">Java</span>
                <span className="stack-tag">Spring Boot</span>
                <span className="stack-tag">JPA</span>
                <span className="stack-tag">React</span>
                <span className="stack-tag">PostgreSQL</span>
                <span className="stack-tag">Git</span>
              </div>
              <a href="https://github.com/Ajmayen27/Your-Depo-.git" className="project-link" target="_blank">view on github →</a>
            </div>

            <div className="project-card reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="project-num">02 / 2025</div>
              <div className="project-name">Software Gaze Portal</div>
              <div className="project-desc">A full-stack office management system with secure role-based access and separate admin/user portals. Developed employee, attendance, and expense management modules with PDF reporting. Integrated real-time chat using WebSocket.</div>
              <div className="project-stack">
                <span className="stack-tag">Spring Boot</span>
                <span className="stack-tag">Spring Security</span>
                <span className="stack-tag">JWT</span>
                <span className="stack-tag">Docker</span>
                <span className="stack-tag">React</span>
                <span className="stack-tag">Vite</span>
                <span className="stack-tag">PostgreSQL</span>
              </div>
              <a href="https://softwaregazeportal.netlify.app" className="project-link" target="_blank">view live →</a>
            </div>

            <div className="project-card reveal" style={{ gridColumn: "1 / -1", transitionDelay: "0.2s" }}>
              <div className="project-num">03 / 2025</div>
              <div className="project-name">DevDeploy</div>
              <div className="project-desc">An internal deployment portal to automate application deployment and reduce server management complexity. Developed a Java Spring Boot backend with JWT-based security and login/registration APIs. Automated deployment workflows using Docker and VPS to enable modern DevOps practices.</div>
              <div className="project-stack">
                <span className="stack-tag">Java</span>
                <span className="stack-tag">Spring Boot</span>
                <span className="stack-tag">H2 Database</span>
                <span className="stack-tag">JWT</span>
                <span className="stack-tag">React.js</span>
                <span className="stack-tag">Python Django</span>
                <span className="stack-tag">Docker</span>
                <span className="stack-tag">VPS</span>
                <span className="stack-tag">GitHub</span>
              </div>
              <a href="https://github.com/Ajmayen27/devDeploy.git" className="project-link" target="_blank">view on github →</a>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
