import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../../data/initialContacts.json";

import { useState, useEffect} from "react";
import css from "./App.module.css"


function App() {
    const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem("contacts");
    return saveContacts
      ? JSON.parse(saveContacts)
      :initialContacts;
  });
    const [filter, setFilter] = useState('');

    const addContact =(newUser)=> {
        console.log(newUser);
        setContacts((prevContacts) => {
            return [...prevContacts, newUser]
        })
    }

    const deleteContact =(contactId) =>{
        setContacts((prevContacts) => {
            return prevContacts.filter((contact) => contact.id !== contactId)
           
        })
        
    }

    const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        
   useEffect(() => {
     localStorage.setItem("contacts", JSON.stringify(contacts));
   }, [contacts]);

    

    return (
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
      </div>
    ); 
}

export default App;