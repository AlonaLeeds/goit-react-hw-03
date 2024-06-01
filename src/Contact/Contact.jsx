import React from 'react';
import styles from './Contact.module.css';


const Contact = ({ contact, onDelete }) => (
  <li className={styles.contact}>
    {contact.name}: {contact.number}
    <button onClick={() => onDelete(contact.id)} className={styles.deleteBtn}>Delete</button>
  </li>
);

export default Contact;