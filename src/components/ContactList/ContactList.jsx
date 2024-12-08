import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredData = contacts
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : [];

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
