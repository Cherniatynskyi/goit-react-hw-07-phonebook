import { useDeleteContactMutation } from "../../../redux/contactsSlice"
import css from '../ContactsList.module.css'

export const ContactItem = ({contact}) =>{

    const {name, phone, id} = contact
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContactMutation()

    return (
        <li>- {name}: {phone}
            <button className={css.contactsButton} disabled={isDeleting} onClick={()=>{deleteContact(id)}}>{isDeleting ? 'Deleting...' : 'Delete'}</button>
        </li>
    )
}