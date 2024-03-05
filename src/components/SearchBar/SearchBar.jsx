import css from './SearchBar.module.css';
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({onSubmit}) => {
  return (<>
    <header>
      <form className={css.searchForm} onSubmit={(event) => {
        event.preventDefault();
        if (event.currentTarget.elements.search.value) {
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
  </>)
}

export default SearchBar;