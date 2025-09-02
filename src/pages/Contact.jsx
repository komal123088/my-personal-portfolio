import React from "react";
import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";

const Contact = () => {
  return (
    <section className="contact-content">
      <h1 className="section-heading">Contact</h1>
      <h4 className="section-sub-heading">Get in Touch</h4>

      <div className="contact-info">
        <div className="info-box">
          <IoCallOutline />
          <p>+92 3121324083</p>
        </div>

        <div className="info-box">
          <IoLocationOutline />
          <p>Pakistan, Abbottabad</p>
        </div>

        <a
          className="info-box"
          href="mailto:waleedishfaq1515@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoMailOutline />
          <p>waleedishfaq1515@gmail.com</p>
        </a>

        <div className="info-box">
          <IoCheckmarkCircleOutline />
          <p>Hire Available</p>
        </div>
      </div>

      <div className="contact-form">
        <form action="https://formspree.io/f/mgvwyqyb" method="POST">
          <div className="form-grid">
            <div className="grid-left">
              <input type="text" required placeholder="Full Name" name="name" />
              <input
                type="email"
                required
                placeholder="Email Address"
                name="email"
              />
              <input
                type="text"
                required
                placeholder="Subject"
                name="subject"
              />
            </div>

            <div className="grid-right">
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
          </div>

          <button className="contact_btn" type="submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
