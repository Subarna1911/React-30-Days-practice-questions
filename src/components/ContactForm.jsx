import React, { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';

    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = 'Invalid Email Format';
    }

    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmittedName(form.name);
      setSubmitted(true);
      setErrors({});
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-form" data-testid="contact-form">
        <h1>Feel Free To Contact</h1>
      {submitted ? (
        <h2>Thank you, {submittedName}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="name-field">
            <label htmlFor="name">Name:</label>
            <input
              value={form.name}
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="Enter your name"
              data-testid="input-name"
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>

          <div className="email-field">
            <label htmlFor="email">Email:</label>
            <input
              value={form.email}
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              data-testid="input-email"
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>

          <div className="message-field">
            <label htmlFor="message">Message:</label>
            <textarea
              value={form.message}
              name="message"
              onChange={handleChange}
              placeholder="Your message here..."
              data-testid="input-message"
            />
            {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          </div>

          <button type="submit" className="submit-btn" data-testid="submit-button">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
