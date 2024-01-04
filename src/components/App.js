import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "../redux/contactsSlice";


const App = () => {
  const stateContacts = useSelector(state => state.contacts.contacts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getContactsThunk())
    }, [dispatch])
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        {stateContacts?.length > 0 ? <ContactsList/> : <h3>You have no contacts in your list yet</h3>}
      </>
    )
}

export default App;
