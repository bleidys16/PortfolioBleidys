'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './ContactForm.module.css';

interface ContactFormProps {
  content: {
    title: string;
    name: string;
    namePlaceholder: string;
    message: string;
    msgPlaceholder: string;
    btnSubmit: string;
    sending?: string; // Opcional por si no está en el diccionario
    successTitle?: string;
    successMsg?: string;
  };
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const [state, handleSubmit] = useForm("xaqveykb");

  if (state.succeeded) {
    return (
      <div className={styles.container}>
        <div className={styles.successMsg}>
          <h3>{content.successTitle || '¡Mensaje Enviado!'}</h3>
          <p>{content.successMsg || 'Gracias por contactarme.'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{content.title}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.group}>
          <label htmlFor="full-name" className={styles.label}>
            {content.name}
          </label>
          <input
            id="full-name"
            type="text"
            name="name"
            placeholder={content.namePlaceholder}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="nombre@ejemplo.com"
            className={styles.input}
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="message" className={styles.label}>
            {content.message}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={content.msgPlaceholder}
            className={styles.textarea}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting} 
          className={styles.submitBtn}
        >
          {state.submitting ? (content.sending || 'Enviando...') : content.btnSubmit}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
