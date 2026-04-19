'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Volunteer from '@/components/Volunteer';
import Certifications from '@/components/Certifications';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observe all .reveal elements
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <main className="content">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Volunteer />
        <Certifications />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
