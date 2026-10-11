
import { useState } from "react";
import "./Contact.css";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  CornerDownLeft,
  GitBranch,
  Check,
  CircleDot,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "Workflow automation",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">

        <h1>
          Let's start a
          <br />
          <span>conversation.</span>
        </h1>

        <p>
          Tell us what your team is working on and which
          repetitive processes you'd like to simplify.
        </p>
      </section>

      <section className="contact-layout">
        <aside className="contact-aside">
          <p className="section-eyebrow">GET IN TOUCH</p>
          <h2>Good work starts with a clear conversation.</h2>

          <p className="contact-aside-description">
            Whether you're exploring workflow ideas or
            figuring out where to begin, use the form to
            describe what you have in mind.
          </p>

          <div className="contact-detail">
            <span className="contact-detail-number">01</span>
            <div>
              <h3>Share the challenge</h3>
              <p>Tell us which tasks take more effort than they should.</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">02</span>
            <div>
              <h3>Outline the process</h3>
              <p>Describe how the work happens today.</p>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-number">03</span>
            <div>
              <h3>Explore the next step</h3>
              <p>Consider what a simpler workflow could look like.</p>
            </div>
          </div>
        </aside>

        <div className="contact-form-panel">
          <div className="contact-form-heading">
            <h2>Tell us about your project</h2>
            <p>Fields marked with * are required.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Work email *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="company">Company or team</label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Where do you work?"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="interest">What are you interested in?</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              >
                <option>Workflow automation</option>
                <option>Managing repetitive tasks</option>
                <option>Team processes</option>
                <option>Something else</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Tell us a little more *</label>
              <textarea
                id="message"
                name="message"
                placeholder="What would you like to make simpler?"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send enquiry <span aria-hidden="true"><ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" /></span>
            </button>

            {submitted && (
              <p className="form-feedback" role="status">
                This is demo, when we apply backend then server can recieve POST request from user.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
