import s from './style.module.css'
import {Search as SearchIcon} from "react-bootstrap-icons";

const SearchBar = ( {onSubmit} ) =>
{
    function submit( e ) {
        if (e.key === 'Enter' && e.target.value.trim()!== '') {
            onSubmit(e.target.value);
        }
    }

    return (
        <>
            <SearchIcon size={ 27 } className={ s.icon }/>
            <input
                onKeyUp={ submit }
                type="text"
                placeholder='Search a tv show you may like'
                className={ s.input }
            />
        </>
    );
};

export default SearchBar;