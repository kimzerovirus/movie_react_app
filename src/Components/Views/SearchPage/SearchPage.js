import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../../../Config/Key'
import Axios from 'axios'

import GridCards from '../Commons/GridCards'


function SearchPage({ history }) {

    const [SearchItem, setSearchItem] = useState("")
    const [Movie, setMovie] = useState([])
    console.log(SearchItem)

    //https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false => movie쿼리 필요

    let URL = `${BASE_URL}search/movie?query=${SearchItem}&api_key=${API_KEY}&language=ko-KR&page=1&include_adult=false`

    useEffect(() => {
        if (SearchItem !== '') {
            console.log('hi')
            getMovies(URL)
        }
    }, [])


    //Back
    const goBack = () => {
        history.goBack();
    };

    //API_CALL
    const getMovies = (url) => {
        Axios.get(url)
            .then(res => {
                try {
                    //api_DATA => state
                    console.log(res.data.results)
                    setMovie(res.data.results)
                    console.log(Movie)
                } catch (err) {
                    alert(`state_error: ${err}`)
                }
            })
            .catch(err => { alert(`api_call_error: ${err}`); return false })
    }

    //Input Event
    const onSearchItemHandler = (e) => {
        setSearchItem(e.currentTarget.value)

    }

    //Submit Event
    const onSubmitHandler = () => {
        //console.log(URL)
        if (SearchItem === '') {
            alert('검색어를 입력해주세요')
            return false
        }
        getMovies(URL)

    }

    return (
        <div>
            <div className="center">
                <h1>찾는 영화가 있으신가요?</h1>
            </div>
            <div className="center">
                <input type="text" onChange={onSearchItemHandler} />
                <button onClick={onSubmitHandler}>검색</button>
            </div>

            <section className="grid-section">

                <div className="menu">
                </div>

                <ul className="grid-list clfix">
                    {Movie && Movie.map((movie, index) => (
                        <GridCards
                            key={index}
                            landingPage
                            image={movie.poster_path ?
                                `${IMAGE_BASE_URL}w500${movie.poster_path}` : null
                            }
                            movieId={movie.id}
                            movieName={movie.original_title}
                        />
                    ))}
                </ul>
            </section>




            <div className="search-icon" onClick={goBack}>
                <a>
                    <img src={`${process.env.PUBLIC_URL}/search_back.svg`} alt="" />
                </a>
            </div>
        </div>
    )
}

export default SearchPage
