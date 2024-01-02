import {useSelector} from 'react-redux'
// import { deleteContact} from "../../redux/contactsSlice";
import css from './ContactsList.module.css'
import { useFetchContactsQuery} from '../../redux/contactsSlice';
// import { Loader } from 'components/Loader/Loader';
import { ContactItem } from './ContactItem/ContactItem';


export const ContactsList = () => {

    // const stateContacts = useSelector(state => state.contacts.contacts)
    const stateFilter = useSelector(state => state.filter.filter)
    // const dispatch = useDispatch();
    const {data: contacts} = useFetchContactsQuery()


    const getFilteredContacts = () => {
        const normalizedFilter = stateFilter.toLowerCase()
        if(contacts){
            return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
        }
      }

    const filteredContacts = getFilteredContacts()

    return (
        <>
            {/* {isFetching && <Loader/>} */}
            <div className={css.contactsContainer}>
                <ul className={css.contactsList}>
                    {filteredContacts && filteredContacts.map((contact) =>
                        <ContactItem key={contact.id} contact={contact}/>)}
                </ul>
            </div>
        </>
    )
}