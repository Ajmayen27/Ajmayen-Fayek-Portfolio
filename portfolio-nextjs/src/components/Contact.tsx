'use client';

import { useState, useRef } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

// ── Web3Forms access key ──────────────────────────────────────────────────────
// 1. Go to https://web3forms.com
// 2. Enter your email → click "Create Access Key"
// 3. Check your inbox → copy the key and paste it below
const WEB3FORMS_KEY = '973dd8f0-9588-4953-a224-70f5e697bd3e';
// ─────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // ── Validation ──────────────────────────────────────────────────────────────
  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    const name = nameRef.current?.value.trim() ?? '';
    const email = emailRef.current?.value.trim() ?? '';
    const subject = subjectRef.current?.value.trim() ?? '';
    const message = messageRef.current?.value.trim() ?? '';

    if (!name) e.name = 'Name is required.';
    if (!email) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = 'Enter a valid email address.';
    if (!subject) e.subject = 'Subject is required.';
    if (!message) e.message = 'Message cannot be empty.';
    return e;
  };

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState('loading');

    const payload = {
      access_key: WEB3FORMS_KEY,
      name: nameRef.current?.value.trim() ?? '',
      email: emailRef.current?.value.trim() ?? '',
      subject: subjectRef.current?.value.trim() ?? '',
      message: messageRef.current?.value.trim() ?? '',
      // Makes Web3Forms send a nice confirmation email to the visitor too
      botcheck: '',
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (data.success) {
        setFormState('success');
        nameRef.current!.value = '';
        emailRef.current!.value = '';
        subjectRef.current!.value = '';
        messageRef.current!.value = '';
        setTimeout(() => setFormState('idle'), 6000);
      } else {
        console.error('Web3Forms error:', data);
        setFormState('error');
        setTimeout(() => setFormState('idle'), 5000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setFormState('error');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  // ── Mailto fallback ─────────────────────────────────────────────────────────
  const openMailto = () => {
    const name = nameRef.current?.value.trim() ?? '';
    const email = emailRef.current?.value.trim() ?? '';
    const subject = subjectRef.current?.value.trim() || 'Portfolio Inquiry';
    const message = messageRef.current?.value.trim() ?? '';
    const body = encodeURIComponent(
      (name ? `Name: ${name}\n` : '') +
      (email ? `Email: ${email}\n` : '') +
      `\n${message}`
    );
    window.open(
      `mailto:ajmayenfayek999999@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`,
      '_blank'
    );
  };

  const isLoading = formState === 'loading';
  const isSuccess = formState === 'success';
  const isError = formState === 'error';

  return (
    <section id="contact">
      <div className="section-wrap">
        <div className="section-tag reveal">contact</div>
        <div className="contact-grid reveal">

          {/* ── Left: Info ── */}
          <div>
            <h2 className="contact-tagline">
              Let&apos;s build something <em>great.</em>
            </h2>
            <p className="contact-sub">
              Available for Java and backend development roles. Reach out to discuss
              your next web or enterprise application.
            </p>
            <div className="contact-links">
              <a href="mailto:ajmayenfayek999999@gmail.com" className="contact-link">
                <div className="contact-link-icon">@</div>
                ajmayenfayek999999@gmail.com
              </a>
              <a href="tel:+8801763111024" className="contact-link">
                <div className="contact-link-icon">☏</div>
                +880 1763111024
              </a>
              <a
                href="https://www.linkedin.com/in/ajmayen-fayek/"
                target="_blank" rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">in</div>
                linkedin.com/in/ajmayen-fayek
              </a>
              <a
                href="https://github.com/Ajmayen27"
                target="_blank" rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-link-icon">gh</div>
                github.com/Ajmayen27
              </a>
            </div>
          </div>

          {/* ── Right: Form ── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            {/* Hidden botcheck field – prevents spam */}
            <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

            <div className="form-row">
              <div className="form-field">
                <label className="form-label">YOUR NAME</label>
                <input
                  ref={nameRef}
                  type="text"
                  className={`form-input${errors.name ? ' form-input-error' : ''}`}
                  placeholder="John Doe"
                  disabled={isLoading || isSuccess}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className="form-field">
                <label className="form-label">EMAIL</label>
                <input
                  ref={emailRef}
                  type="email"
                  className={`form-input${errors.email ? ' form-input-error' : ''}`}
                  placeholder="hello@company.com"
                  disabled={isLoading || isSuccess}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">SUBJECT</label>
              <input
                ref={subjectRef}
                type="text"
                className={`form-input${errors.subject ? ' form-input-error' : ''}`}
                placeholder="Job opportunity / Project collaboration"
                disabled={isLoading || isSuccess}
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className="form-field">
              <label className="form-label">MESSAGE</label>
              <textarea
                ref={messageRef}
                className={`form-textarea${errors.message ? ' form-input-error' : ''}`}
                placeholder="Tell me about the role or project..."
                disabled={isLoading || isSuccess}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {/* Submit button */}
            <button
              id="contactSubmit"
              type="submit"
              className={`form-submit${isLoading ? ' form-submit-loading' : ''}${isSuccess ? ' form-submit-success' : ''}`}
              disabled={isLoading || isSuccess}
            >
              {isLoading && <span className="form-spinner" />}
              {isLoading
                ? 'sending...'
                : isSuccess
                  ? 'message sent ✓'
                  : 'send message →'}
            </button>

            {/* Success feedback */}
            {isSuccess && (
              <p className="form-feedback form-feedback-success">
                ✓ Message delivered! I&apos;ll get back to you soon.
              </p>
            )}

            {/* Error feedback with mailto fallback */}
            {isError && (
              <p className="form-feedback form-feedback-error">
                ✗ Could not send right now.&nbsp;
                <button
                  type="button"
                  className="form-fallback-btn"
                  onClick={openMailto}
                >
                  Email me directly →
                </button>
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
