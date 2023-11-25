import s from './style.module.css'
import {SMALL_IMG_COVER_BASE_URL} from "../../config.js";

const TvShowListItem = ( {tvShow, onClick} ) =>
{
    return (
        <div
            onClick={() => onClick(tvShow)}
            className={ s.container }>
            <img
                className={ s.img }
                src={ SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path }
                alt={ tvShow.name }
            />
            <div className={s.title}>{tvShow.name}</div>
        </div>
    );
};

export default TvShowListItem;