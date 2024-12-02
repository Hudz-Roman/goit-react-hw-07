import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import s from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredData = contacts
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
