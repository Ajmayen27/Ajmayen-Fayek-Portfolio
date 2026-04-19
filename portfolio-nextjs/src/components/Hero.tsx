import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const resumeLink = "/resume/Ajmayen_Fayek_Resume.pdf";

  return (
    <section className="hero" id="hero">
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-inner">
        <div className="hero-badge">software engineer &amp; data science enthusiast</div>
        <h1 className="hero-name">
          AJMAYEN<br />
          <span className="line2">F<span className="accent-char">A</span>YEK</span>
        </h1>
        <p className="hero-desc">
          Building scalable backend systems &amp; modern application architectures.<br />
          Java · Spring Boot · React · PostgreSQL · Docker · AWS
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">view projects →</a>
          <a href="#contact" className="btn-outline">let&apos;s talk</a>
          <Link href={resumeLink} className="btn-outline" download="Ajmayen_Fayek_Resume.pdf">download cv ↓</Link>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">3<span>.70</span></div>
            <div className="stat-label">CGPA / 4.00</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3<span>+</span></div>
            <div className="stat-label">PROJECTS SHIPPED</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">7<span>+</span></div>
            <div className="stat-label">CERTIFICATIONS</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">2<span>yrs</span></div>
            <div className="stat-label">JAVA EXPERIENCE</div>
          </div>
        </div>
      </div>
      
      <div className="hero-photo-wrap">
        <img
          src="/ProfilePics/profilephoto-removebg-preview.png"
          alt="Ajmayen Fayek"
          className="hero-photo-img"
        />
      </div>
      <div className="hero-scroll">scroll</div>
    </section>
  );
}
