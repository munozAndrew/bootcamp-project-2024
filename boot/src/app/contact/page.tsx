import React from "react";
import styles from "../Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <form id="contact-form" className={styles.contactForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.formLabel}>
            Name:
          </label>
          <input type="text" id="name" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email:
          </label>
          <input type="email" id="email" className={styles.inputField} />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message:
          </label>
          <textarea
            id="message"
            cols={20}
            rows={2}
            className={styles.textAreaField}
          ></textarea>
        </div>

        <div className={styles.submitGroup}>
          <input type="submit" className={styles.submitButton} />
        </div>
      </form>
    </main>
  );
}
