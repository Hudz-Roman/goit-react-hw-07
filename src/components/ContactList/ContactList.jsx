import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FallingLines } from 'react-loader-spinner';
import toast, { Toaster } from 'react-hot-toast';
import {
  selectContacts,
  selectIsLoading,
  selectIsError,
} from '../../redux/contactsSlice';
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
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error("This didn't work.");
    }
  }, [isError]);

  return (
    <div>
      <div className={s.loader_wrapper}>
        {isLoading && (
          <FallingLines
            color='#000'
            width='50'
            visible={true}
            ariaLabel='falling-circles-loading'
          />
        )}
      </div>
      {isError && <Toaster position='bottom-left' reverseOrder={true} />}
      <ul className={s.list}>
        {filteredData.map((contact) => (
          <Contact key={contact.id} contact={contact} {...contact} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
