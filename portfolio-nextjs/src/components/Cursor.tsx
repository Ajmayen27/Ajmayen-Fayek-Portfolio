"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;
    let requestRef: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx - 5 + "px";
        cursorRef.current.style.top = my - 5 + "px";
      }
    };

    const animateRing = () => {
      rx += (mx - rx - 18) * 0.12;
      ry += (my - ry - 18) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestRef = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMouseMove);
    requestRef = requestAnimationFrame(animateRing);

    // Mutation observer to handle dynamically added elements
    const setupHoverEvents = () => {
      document.querySelectorAll('a, button, .skill-chip, .project-card, .cert-card').forEach(el => {
        el.addEventListener('mouseenter', () => ringRef.current?.classList.add('hover'));
        el.addEventListener('mouseleave', () => ringRef.current?.classList.remove('hover'));
      });
    };

    setupHoverEvents();

    const observer = new MutationObserver(() => {
      setupHoverEvents();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(requestRef);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  );
}
