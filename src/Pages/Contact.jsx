import React from "react";

const Contact = () => {
  const handleFormSubmit = (FormData) => {
    const formInputData = Object.fromEntries(FormData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="off"
            placeholder="Enter your name"
            name="username"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            name="message"
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            required
            autoComplete="off"
            id=""
          ></textarea>

          <button type="submit" value="send" className="!pl-85">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
