import React, { useState } from "react";
import {
  Mail, Phone, MapPin, Send, Clock,
  Twitter, Linkedin, Instagram, Facebook,
  CheckCircle,
} from "lucide-react";
import { z } from "zod";
import "../css/Contact.css";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  phone: z.string().trim().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const services = [
  "SEO & Content Marketing",
  "Pay-Per-Click (PPC)",
  "Social Media Marketing",
  "Web Design & Development",
  "Email Marketing",
  "Analytics & Reporting",
  "Other",
];

const infoCards = [
  {
    icon: <Mail size={22} />,
    title: "Email Us",
    lines: ["hello@digigrowth.com", "support@digigrowth.com"],
    color: "#2563eb",
    bg: "rgba(37,99,235,0.08)",
  },
  {
    icon: <Phone size={22} />,
    title: "Call Us",
    lines: ["+1 (555) 123-4567", "Mon–Fri, 9am–6pm EST"],
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.08)",
  },
  {
    icon: <MapPin size={22} />,
    title: "Visit Us",
    lines: ["123 Marketing St", "New York, NY 10001"],
    color: "#059669",
    bg: "rgba(5,150,105,0.08)",
  },
  {
    icon: <Clock size={22} />,
    title: "Office Hours",
    lines: ["Mon–Fri: 9am – 6pm", "Sat: 10am – 2pm"],
    color: "#d97706",
    bg: "rgba(217,119,6,0.08)",
  },
];

const socialLinks = [
  { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
  { icon: <Linkedin size={18} />, label: "LinkedIn", href: "#" },
  { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
  { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1600));
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-scope">

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <span className="badge">📬 Contact Us</span>
          <h1>Let's Grow Together</h1>
          <p>
            Have a project in mind? We'd love to talk about how we can help your
            business reach its next milestone.
          </p>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ── Info Cards Row ── */}
      <section className="contact-cards-row container-padding">
        {infoCards.map((card) => (
          <div className="contact-info-card" key={card.title}>
            <div className="cic-icon" style={{ color: card.color, background: card.bg }}>
              {card.icon}
            </div>
            <h4 className="cic-title">{card.title}</h4>
            {card.lines.map((l) => (
              <p className="cic-line" key={l}>{l}</p>
            ))}
          </div>
        ))}
      </section>

      {/* ── Main Content ── */}
      <section className="contact-main container-padding">

        {/* Left — Map + Social */}
        <div className="contact-left">
          <div className="map-wrapper">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215681785048!2d-73.9878449!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="contact-social">
            <p className="social-label">Follow Us</p>
            <div className="social-row">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="contact-social-btn"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-form-card">
          <h2 className="form-heading">Send Us a Message</h2>
          <p className="form-subheading">
            Fill out the form below and our team will get back to you within 24 hours.
          </p>

          {submitted && (
            <div className="success-toast">
              <CheckCircle size={20} />
              <span>Message sent! We'll be in touch soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-name">Full Name *</label>
                <input
                  id="cf-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="cf-email">Email Address *</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@company.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="cf-phone">Phone Number</label>
                <input
                  id="cf-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cf-service">Service Interested In *</label>
                <select
                  id="cf-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.service ? "input-error" : ""}
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && <span className="error-text">{errors.service}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="cf-message">Message *</label>
              <textarea
                id="cf-message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or ask us anything…"
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary contact-submit">
              {isSubmitting ? (
                <span className="spinner" />
              ) : (
                <>
                  Send Message <Send size={16} style={{ marginLeft: 8 }} />
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;