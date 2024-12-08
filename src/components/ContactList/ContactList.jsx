import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice';
import s from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

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
