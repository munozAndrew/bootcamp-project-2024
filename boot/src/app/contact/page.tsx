"use client";

import React, { useRef, useState } from "react";
import styles from "../Contact.module.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // We'll attach the <form> element to this ref
  const formRef = useRef<HTMLFormElement>(null);

  // State for showing success/error messages
  const [statusMessage, setStatusMessage] = useState("");

  // Handler for form submission
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      // Send the form to EmailJS
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "", // from .env
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "", // from .env
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "" // from .env
      );

      // If successful, show a success message
      console.log("EmailJS result:", result.text);
      setStatusMessage("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      // If something goes wrong, show an error
      console.error("EmailJS error:", error);
      setStatusMessage("Error sending message. Please try again later.");
    }
  }

  return (
    <main className={styles.contactPage}>
      <h1 className={styles.contactTitle}>Contact</h1>

      {/* Attach our handleSubmit to the form's onSubmit */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={styles.contactForm}
      >
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          {/* IMPORTANT: Give a name attribute matching your EmailJS template variable */}
          <input
            type="text"
            id="name"
            name="name"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.inputField}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message:
          </label>
          {/* Again, name must match your EmailJS template variable, e.g. {{message}} */}
          <textarea
            id="message"
            name="message"
            cols={20}
            rows={2}
            className={styles.textAreaField}
            required
          ></textarea>
        </div>

        <div className={styles.submitGroup}>
          <input type="submit" value="Send" className={styles.submitButton} />
        </div>

        {/* Show a status message if we have one (either success or error) */}
        {statusMessage && <p style={{ marginTop: "1rem" }}>{statusMessage}</p>}
      </form>
    </main>
  );
}
