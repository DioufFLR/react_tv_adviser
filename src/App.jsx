import './global.css';
import s from './style.module.css';
import {TVShowAPI} from "./api/tv-show.js";
import {useEffect, useState} from "react";
import {BACKDROP_BASE_URL} from "./config.js";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail.jsx";
import Logo from "./components/Logo/Logo.jsx";
import logo from "./assets/images/logo3.png"
import TvShowList from "./components/TVShowList/TVShowList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

function App() {

    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationList, setRecommendationList] = useState([]);

    async function fetchPopulars() {
        try {
            const populars = await TVShowAPI.fetchPopulars();
            if (populars.length > 0) {
                setCurrentTVShow(populars[1])
            }
        } catch (error) {
            alert('Erreur durant la recherche des séries populaires')
        }
    }

    async function fetchRecommendations( tvShowId ) {
        try {
            const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
            if (recommendations.length > 0) {
                setRecommendationList(recommendations.slice(0, 10))
            }
        } catch (error) {
            alert('Erreur lors de la recherche des séries recommandées')
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

    async function searchTVShow( tvShowName ) {
        try {
            const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
            if (searchResponse.length > 0) {
                setCurrentTVShow(searchResponse[0])
            }
        } catch (error) {
            alert('Erreur lors de la recherche de la série')
        }
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
                        <SearchBar
                            onSubmit={ searchTVShow }
                        />
                    </div>
                </div>
            </div>
            <div className={ s.tv_show_detail }>
                { currentTVShow && <TVShowDetail tvShow={ currentTVShow }/> }
            </div>
            <div className={ s.recommended_shows }>
                { recommendationList && recommendationList.length > 0 && (
                    <TvShowList
                        onClickItem={ setCurrentTVShow }
                        tvShowList={ recommendationList }
                    />
                ) }
            </div>
        </div>
    )
}

export default App
