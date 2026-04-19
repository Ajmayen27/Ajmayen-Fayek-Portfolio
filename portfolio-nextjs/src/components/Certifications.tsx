'use client';

import { useState, useEffect } from 'react';

const certifications = [
  {
    id: 1,
    title: "AWS Cloud Computing Essentials",
    issuer: "AWS",
    date: "2024",
    image: "/certifications/AWS Cloud Computing Essentials .png",
    link: "#"
  },
  {
    id: 2,
    title: "AWS Computing Solution",
    issuer: "AWS",
    date: "2024",
    image: "/certifications/AWS Computing Solution.png",
    link: "#"
  },
  {
    id: 3,
    title: "AWS First NoSQL Database",
    issuer: "AWS",
    date: "2024",
    image: "/certifications/AWS First NoSQL Database.png",
    link: "#"
  },
  {
    id: 4,
    title: "AWS Machine Learning",
    issuer: "AWS",
    date: "2024",
    image: "/certifications/AWS Machine Learning.png",
    link: "https://www.credly.com/badges/4dd451be-de97-4aab-a830-fdd1daac158d/print"
  },
  {
    id: 5,
    title: "AWS Serverless Foundation",
    issuer: "AWS",
    date: "2024",
    image: "/certifications/AWS Serverless Foundation.png",
    link: "#"
  },
  {
    id: 6,
    title: "IBM Machine Learning",
    issuer: "IBM",
    date: "2024",
    image: "/certifications/IBM Machine Learning.png",
    link: "https://www.coursera.org/account/accomplishments/verify/2HA0NCGFHB5L"
  },
  {
    id: 7,
    title: "Data Structure & Algorithms in Java",
    issuer: "Great Learning",
    date: "2024",
    image: "/certifications/Data Structure & Algorithms in Java for Intermidiate level.jpg",
    link: "https://www.mygreatlearning.com/certificate/ACNVZEDX"
  }
];

export default function Certifications() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const openLightbox = (imgSrc: string) => {
    setLightboxImg(imgSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxImg(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (lightboxImg) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxImg]);

  // Duplicate items to ensure a seamless infinite scroll loop
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <>
      <section id="certifications" className="overflow-hidden">
        <div className="section-wrap" style={{ paddingBottom: '120px' }}>
          <div className="section-tag reveal">certifications</div>
          <h2 className="section-title reveal">
            Professional<br />
            <em>credentials.</em>
          </h2>
          
          <div className="carousel-container reveal">
            <div className="carousel-track">
              {duplicatedCerts.map((cert, index) => (
                <div 
                  className="cert-card" 
                  key={`${cert.id}-${index}`} 
                  onClick={() => openLightbox(cert.image)}
                >
                  <div className="cert-img-wrap">
                    <img src={cert.image} alt={cert.title} className="cert-img" />
                    <div className="cert-overlay">
                      <div className="cert-overlay-text">VIEW CERTIFICATE</div>
                    </div>
                  </div>
                  <div className="cert-info">
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                    <div className="cert-date">{cert.date}</div>
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="cert-link" 
                      onClick={(e) => e.stopPropagation()}
                    >
                      verify credential ↗
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Lightbox */}
      <div className={`lightbox ${lightboxImg ? 'open' : ''}`} id="lightbox" onClick={closeLightbox}>
        <div className="lightbox-close">[ ESC to close ]</div>
        {lightboxImg && <img src={lightboxImg} alt="Certificate" className="lightbox-img" id="lightbox-img" />}
      </div>

    </>
  );
}
