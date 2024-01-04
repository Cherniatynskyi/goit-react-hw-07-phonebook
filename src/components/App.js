import { ContactsList } from "./ContactsList/ContactsList";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { useFetchContactsQuery } from "../redux/contactsSlice";

import { useDispatch } from "react-redux";
import { getContactsThunk } from "../redux/contactsSlice";


const App = () => {
  const dispatch = useDispatch();
  const {data} = useFetchContactsQuery()
  // useEffect(() => {
  //   dispatch(getContactsThunk())
  // }, [dispatch])
  
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter/>
        {data?.length > 0 ? <ContactsList/> : <h3>You have no contacts in your list yet</h3>}
      </>
    )
}

export default App;
