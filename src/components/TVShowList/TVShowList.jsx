import s from './style.module.css'
import TVShowListItem from "../TVShowListItem/TVShowListItem.jsx";

const TvShowList = ( {tvShowList, onClickItem} ) =>
{
    return (
        <>
            <div className={ s.title }>You may also like:</div>
            <div className={ s.list }>
                { tvShowList.map(( tvShow ) =>
                {
                    return (
                        <span key={ tvShow.id } className={ s.tv_show_list_item }>
                            <TVShowListItem
                                onClick={ onClickItem }
                                tvShow={ tvShow }
                            />
                        </span>
                    )
                }) }
            </div>
        </>
    );
};

export default TvShowList;