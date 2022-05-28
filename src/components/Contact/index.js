import React from "react";

function ContactForm() {
  //jsx
  return (
    <section>
      <h1 id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type={email} name="email" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
          <button type="submit">Submit</button>
        </div>
      </h1>
    </section>
  );
}

export default ContactForm;