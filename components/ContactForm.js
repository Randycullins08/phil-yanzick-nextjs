import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setTimeout(() => {
        setStatus("Error Sending Email");
      }, 1000);
      return;
    }

    if (res.status === 200) {
      setStatus("Submit");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <div>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder="Enter Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="submit-button">
        <button type="submit">{status}</button>
      </div>
    </form>
  );
}
