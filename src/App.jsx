import './global.css';
import s from './style.module.css';
import {TVShowAPI} from "./api/tv-show.js";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config.js";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail.jsx";
import Logo from "./components/Logo/Logo.jsx";
import logo from "./assets/images/logo3.png"
import TVShowListItem from "./components/TVShowListItem/TVShowListItem.jsx";

function App() {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        const populars = await TVShowAPI.fetchPopulars();
        if (populars.length > 0) {
            setCurrentTVShow(populars[1])
        }
    }

    async function fetchRecommendations(tvShowId) {
        const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
        if (recommendations.length > 0) {
            setRecommendationList(recommendations.slice(0, 10))
        }
    }

    useEffect(() =>
    {
        fetchPopulars();
    }, [])

    useEffect(() =>
    {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id)
        }
    }, [currentTVShow])

    function setCurrentTVShowFromRecommandation( tvShow ) {
        alert(JSON.stringify(tvShow))
    }

    return (
        <div
            className={ s.main_container }
            style={ {
                background: currentTVShow
                    ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${ BACKDROP_BASE_URL }${ currentTVShow.backdrop_path }") no-repeat center / cover`
                    : 'black'
            } }
        >
            <div className={ s.header }>
                <div className="row">
                    <div className="col-4">
                        <Logo
                            image={ logo }
                            title="WatchBetter"
                            subtitle='Find a show you may like'
                        />
                    </div>
                    <div className="col-sm-12 col-md-4">
                        <input style={ {width: '100%'} } type="text"/>
                    </div>
                </div>
            </div>
            <div className={ s.tv_show_detail }>
                { currentTVShow && <TVShowDetail tvShow={ currentTVShow }/> }
            </div>
            <div className={ s.recommanded_shows }>
                { currentTVShow && (
                    <TVShowListItem
                        onClick={ setCurrentTVShowFromRecommandation }
                        tvShow={ currentTVShow }
                    />
                    )}
            </div>
        </div>
    )
}

export default App
