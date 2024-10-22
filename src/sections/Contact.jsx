import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      await emailjs.send(
        "service_ebkvbau",
        "template_a0tzxv3",
        {
          from_name: form.name,
          to_name: "Karam",
          from_email: form.email,
          to_email: "karam.tk20@gmail.com",
          message: form.message,
        },
        "fu64Zz_9JmA4rh5F0",
      );
      setLoading(false);

      alert("Your Message has been successfully sent!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);

      alert("Oops! Something went wrong.");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative flex min-h-screen flex-col items-center justify-center">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container">
          <h3 className="head-text">Let's talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you're looking to build a new website, imporve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="Karam Al Takrity"
            />

            <label className="space-y-3">
              <span className="field-label"> Email </span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="field-input"
              placeholder="karam.tk20@gmail.com"
            />

            <label className="space-y-3">
              <span className="field-label"> Your message </span>
            </label>
            <input
              type="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="field-input"
              placeholder="Hi, I wanna give you a job..."
            />

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
