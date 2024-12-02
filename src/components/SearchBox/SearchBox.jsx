import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input
        type='text'
        placeholder='Search'
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      ></input>
    </div>
  );
};

export default SearchBox;
