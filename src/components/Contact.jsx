import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section" style={{ background: "rgba(17,34,64,0.3)" }}>
      <div className="container">
        <p className="section-label">{"// Contact"}</p>
        <h2 className="section-title">Get In Touch<span>.</span></h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="grid-2">
          <div>
            <p className="dim" style={{ lineHeight: 1.8, marginBottom: 24 }}>
              I'm currently looking for new opportunities. Whether you have a project or just want to say hi — my inbox is always open!
            </p>
            <p className="dim" style={{ marginBottom: 8 }}>📧 <span className="mono" style={{ fontSize: 14 }}>shakirullahaup@gmail.com</span></p>
            <p className="dim" style={{ marginBottom: 24 }}>📍 <span className="mono" style={{ fontSize: 14 }}>Peshawar, Pakistan</span></p>
            <div style={{ display: "flex", gap: 16 }}>
              <a href="https://github.com/ShakirUllah12" target="_blank" rel="noreferrer" className="btn" style={{ padding: "8px 16px", fontSize: 13 }}>GitHub</a>
              <a href="https://www.linkedin.com/in/shakir-ullah-203ab4271/" target="_blank" rel="noreferrer" className="btn" style={{ padding: "8px 16px", fontSize: 13 }}>LinkedIn</a>
            </div>
          </div>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
            <input type="email" placeholder="Your Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
            <textarea placeholder="Your Message" rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} required style={{ resize: "none" }} />
            <button type="submit" className="btn-filled" style={{ alignSelf: "flex-start" }}>send_message()</button>
            {sent && <p className="primary mono" style={{ fontSize: 13 }}>✓ Message sent!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
