import css from './SearchBar.module.css';
import { IoIosSearch } from "react-icons/io";

import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.error('Field must be filled in!');

const SearchBar = ({onSubmit}) => {
  return (<>
    <header>
      <form className={css.searchForm} onSubmit={(event) => {
        event.preventDefault();
        const search = event.currentTarget.elements.search.value;
        if (!search) {
          notify();
        } else {
          onSubmit(event.currentTarget.elements.search.value);
          event.currentTarget.reset();
        }
      }}>
        <button className={css.searchBtn} type="submit" ><IoIosSearch className={css.searchIcon}/></button>
        <input 
          className={css.searchInput}
          type="text"
          placeholder="Search images and photos"
          name='search'
        />
      </form>
    </header>
    <Toaster position="top-right" reverseOrder={false}/>
  </>)
}

export default SearchBar;