import React from 'react';
import styles from  './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <div className={styles.contactItem}>
      <p>{contact.name}: {contact.number}</p>
      <button className={styles.deleteBtn} onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default Contact;