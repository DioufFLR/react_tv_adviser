import s from './style.module.css';
import FiveStarRating from "../FiveStartRating/FiveStarRating.jsx";

// eslint-disable-next-line react/prop-types
const TvShowDetail = ({tvShow}) =>
{
    // eslint-disable-next-line react/prop-types
    const rating = tvShow.vote_average / 2;

    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <div className={s.title}>{tvShow.name}</div>
            <div className={s.rating_container}>
                <FiveStarRating rating={rating}/>
                <div className={s.rating}>{rating}/5</div>
            </div>
            {/* eslint-disable-next-line react/prop-types */}
            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    );
};

export default TvShowDetail;