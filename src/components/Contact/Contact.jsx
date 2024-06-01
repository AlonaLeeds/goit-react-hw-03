import React from 'react';
import './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  return (
    <li className="contactItem">
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;