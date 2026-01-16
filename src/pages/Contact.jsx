import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-scope">
      {/* Page Header */}
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you.</p>
      </section>

      <div className="container-padding py-60">
        <div className="contact-grid">
          
          {/* Left Column: Info */}
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div>
                <h4>Email Us</h4>
                <p>hello@digigrowth.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MapPin /></div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Marketing St, New York, NY</p>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={errors.message ? "input-error" : ""}
                ></textarea>
                {errors.message && <span className="error-text">{errors.message}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} style={{marginLeft: '10px'}} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;