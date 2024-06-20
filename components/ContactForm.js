import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  const initialFormData = {
    from_name: "",
    email: "",
    message: "",
  };

  const [status, setStatus] = useState("Submit");
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.status === 200) {
          setStatus("Email has been sent!");
          setIsSending(false);
          setFormData(initialFormData);
          setStatus("Submit");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          setStatus("Error Sending Email");
          return;
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={sendEmail} className="contact-form">
      <div>
        <input
          type="text"
          id="from_name"
          name="from_name"
          placeholder="Enter Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows={10}
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <div className="submit-button">
        <button type="submit" disabled={isSending}>
          {isSending ? (
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          ) : (
            status
          )}
        </button>
      </div>
    </form>
  );
}
