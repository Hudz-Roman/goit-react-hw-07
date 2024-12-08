import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { name, number, id } = contact;
  return (
    <li className={s.list_el}>
      <div className={s.user_info_wrapper}>
        <span className={s.user_info}>
          <FaUser />
          {name}
        </span>
        <span className={s.user_info}>
          <FaPhone />
          {number}
        </span>
      </div>
      <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
