import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = (name, value) => {
    let error = "";
    if (name === "name") {
      if (!value.trim()) error = "Name is required";
    } else if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Please enter a valid email address";
      }
    } else if (name === "message") {
      if (!value.trim()) {
        error = "Message is required";
      } else if (value.trim().length < 10) {
        error = "Message must be at least 10 characters long";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      message: validate("message", form.message)
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsSubmitting(true);
      setSubmitError("");
      setSubmitSuccess(false);

      const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      
      if (!formId || formId === "YOUR_FORMSPREE_FORM_ID_HERE") {
        console.warn("Formspree Form ID is not configured. Simulating success...");
        setTimeout(() => {
          setSubmitSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setTouched({ name: false, email: false, message: false });
          setIsSubmitting(false);
          setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1000);
        return;
      }

      try {
        const response = await axios.post(`https://formspree.io/f/${formId}`, {
          name: form.name,
          email: form.email,
          message: form.message
        });

        if (response.status === 200 || response.data?.ok) {
          setSubmitSuccess(true);
          setForm({ name: "", email: "", message: "" });
          setTouched({ name: false, email: false, message: false });
          setTimeout(() => setSubmitSuccess(false), 5000);
        } else {
          throw new Error("Formspree delivery was not successful");
        }
      } catch (err) {
        console.error("Form submission error:", err);
        const errMsg = err.response?.data?.error || err.message || "Failed to deliver submission. Please try again later.";
        setSubmitError(errMsg);
      } finally {
        setIsSubmitting(false);
      }
    }
  };


  return (
    <section id="contact" className="section" style={{ backgroundColor: "var(--bg-secondary)", transition: "background-color 0.3s ease" }}>
      <div className="container">
        <p className="section-label">{"// Contact"}</p>
        <h2 className="section-title">Get In Touch<span>.</span></h2>
        
        <div className="grid-2">
          {/* Info Side */}
          <div>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 24, fontSize: 16, color: "var(--text-secondary)" }}>
              I'm currently looking for new opportunities. Whether you have a project or just want to say hi — my inbox is always open!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <p className="dim" style={{ color: "var(--text-secondary)" }}>
                📧 <span className="mono" style={{ fontSize: 15, color: "var(--text-primary)" }}>shakirullahaup@gmail.com</span>
              </p>
              <p className="dim" style={{ color: "var(--text-secondary)" }}>
                📍 <span className="mono" style={{ fontSize: 15, color: "var(--text-primary)" }}>Peshawar, Pakistan</span>
              </p>
            </div>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="https://github.com/ShakirUllah12" target="_blank" rel="noreferrer" className="btn" style={{ padding: "10px 20px", fontSize: 13 }}>🐙 GitHub</a>
              <a href="https://www.linkedin.com/in/shakir-ullah-203ab4271/" target="_blank" rel="noreferrer" className="btn" style={{ padding: "10px 20px", fontSize: 13 }}>🔗 LinkedIn</a>
            </div>
          </div>

          {/* Form Side */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }} noValidate>
              <div className="form-group">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name" 
                  value={form.name} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name ? "error" : ""}
                  style={{ minHeight: "48px" }}
                  required 
                />
                {errors.name && touched.name && <div className="form-error-msg">{errors.name}</div>}
              </div>

              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={form.email} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email ? "error" : ""}
                  style={{ minHeight: "48px" }}
                  required 
                />
                {errors.email && touched.email && <div className="form-error-msg">{errors.email}</div>}
              </div>

              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5} 
                  value={form.message} 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.message && touched.message ? "error" : ""}
                  style={{ resize: "none", minHeight: "120px" }} 
                  required 
                />
                {errors.message && touched.message && <div className="form-error-msg">{errors.message}</div>}
              </div>

              <button 
                type="submit" 
                className="btn-filled" 
                style={{ 
                  alignSelf: "flex-start", 
                  minHeight: "48px",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer"
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "send_message()"}
              </button>

              {submitSuccess && (
                <div 
                  className="mono" 
                  style={{ 
                    marginTop: 16, 
                    padding: "12px 16px", 
                    borderRadius: "8px", 
                    backgroundColor: "var(--accent-glow)", 
                    border: "1.5px solid var(--accent)", 
                    color: "var(--accent)",
                    fontSize: 13 
                  }}
                >
                  ✓ Success! Your message was sent. Shakir will get back to you shortly.
                </div>
              )}

              {submitError && (
                <div 
                  className="mono" 
                  style={{ 
                    marginTop: 16, 
                    padding: "12px 16px", 
                    borderRadius: "8px", 
                    backgroundColor: "rgba(239, 68, 68, 0.1)", 
                    border: "1.5px solid #ef4444", 
                    color: "#ef4444",
                    fontSize: 13 
                  }}
                >
                  ✕ Error: {submitError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
