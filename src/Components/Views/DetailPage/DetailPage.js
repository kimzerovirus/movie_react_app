import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../../../Config/Key'
import Axios from 'axios'

import MainMovieImage from '../Commons/MainMovieImage'
import SearchIcon from '../Commons/SearchIcon'

function DetailPage(props) {

    let movieId = props.match.params.movieId

    const [Movie, setMovie] = useState([])

    useEffect(() => {
        let URL = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=ko-KR`

        getMovies(URL)
        //console.log(URL)
    }, [])

    const getMovies = (url) => {
        Axios.get(url)
            .then(res => {
                try {
                    //api_DATA => state
                    //console.log(res.data)
                    setMovie(res.data)
                } catch (err) {
                    alert(`state_error: ${err}`)
                }
            })
            .catch(err => { alert(`api_call_error: ${err}`); return false })
    }

    const goBack = () => {
        props.history.goBack();
    };

    return (
        <div className="wrap">
            <MainMovieImage
                image={`${IMAGE_BASE_URL}w1280${Movie.backdrop_path}`}
                title={Movie.original_title}
                text={Movie.overview}
                detail
            />

            {/* <SearchIcon /> */}

            <div className="search-icon" onClick={goBack}>
                <a>
                    <img src={`${process.env.PUBLIC_URL}/search_back.svg`} alt="" />
                </a>
            </div>


        </div>
    )
}

export default DetailPage
