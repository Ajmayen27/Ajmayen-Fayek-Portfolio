export default function Skills() {
  return (
    <>
      <section id="skills">
        <div className="section-wrap">
          <div className="section-tag reveal">skills</div>
          <h2 className="section-title reveal">
            Technical<br />
            <em>strengths.</em>
          </h2>
          <div className="skills-container reveal">
            <div>
              <div className="skill-category-label">LANGUAGES & FRAMEWORKS</div>
              <div className="skills-row">
                <span className="skill-chip"><span className="dot"></span>Java</span>
                <span className="skill-chip"><span className="dot"></span>Spring Boot</span>
                <span className="skill-chip"><span className="dot"></span>Spring Security</span>
                <span className="skill-chip"><span className="dot"></span>Thymeleaf</span>
                <span className="skill-chip"><span className="dot"></span>Python</span>
                <span className="skill-chip"><span className="dot"></span>React</span>
                <span className="skill-chip"><span className="dot"></span>HTML</span>
                <span className="skill-chip"><span className="dot"></span>CSS</span>
                <span className="skill-chip"><span className="dot"></span>Bootstrap</span>
              </div>
            </div>
            <div>
              <div className="skill-category-label">DATABASES & TOOLS</div>
              <div className="skills-row">
                <span className="skill-chip"><span className="dot"></span>PostgreSQL</span>
                <span className="skill-chip"><span className="dot"></span>MySQL</span>
                <span className="skill-chip"><span className="dot"></span>Docker</span>
                <span className="skill-chip"><span className="dot"></span>Git</span>
                <span className="skill-chip"><span className="dot"></span>Linux</span>
                <span className="skill-chip"><span className="dot"></span>Postman</span>
                <span className="skill-chip"><span className="dot"></span>Gradle</span>
                <span className="skill-chip"><span className="dot"></span>JPA</span>
              </div>
            </div>
            <div>
              <div className="skill-category-label">IDEs & ENVIRONMENT</div>
              <div className="skills-row">
                <span className="skill-chip"><span className="dot"></span>IntelliJ IDEA</span>
                <span className="skill-chip"><span className="dot"></span>VS Code</span>
                <span className="skill-chip"><span className="dot"></span>Arduino</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>
    </>
  );
}
