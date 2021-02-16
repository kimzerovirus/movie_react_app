import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../../../Config/Key'
import Axios from 'axios'
import $ from 'jquery';

import GridCards from '../Commons/GridCards'

function MainPage() {

    const [Movies, setMovies] = useState([])
    const [MainImage, setMainImage] = useState()
    const [CurrentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

        getMovies(API_URL)

    }, [])



    //TMDB api_call
    const getMovies = async (url) => {
        try {
            const {
                data: {
                    page,
                    results
                },
            } = await Axios.get(url)

            //console.log(results)
            //console.log('currentPage: ' + page)

            setMovies([...Movies, ...results])
            setCurrentPage(page)

            if (CurrentPage === 0) {
                //first load
                setMainImage(results[0])
            }

        } catch (err) {
            //Error
            alert(`API_CALL_ERROR: ${err}`)
        }

    }


    //Scroll Event
    // document.addEventListener('scroll', function () {
    //     const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;

    //     let currentScroll = document.documentElement.scrollTop + document.documentElement.clientHeight
    //     let height = Math.max(
    //         document.body.scrollHeight, document.documentElement.scrollHeight,
    //         document.body.offsetHeight, document.documentElement.offsetHeight,
    //         document.body.clientHeight, document.documentElement.clientHeight
    //     );

    //     if (currentScroll >= height) {
    //         console.log('currentScrollValue is ' + currentScroll + ' / max: ' + height);

    //         getMovies(API_URL)
    //     }
    // });


    const loadMore = () => {
        const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;

        getMovies(API_URL)
    }




    return (
        <div className="wrap">
            <header className="center">
                <h1>MainPage</h1>
            </header>
            <article className="__main">
                <img src="" alt="" />
            </article>

            <section className="grid-section">
                <ul className="grid-list clfix">
                    {Movies && Movies.map((movie, index) => (
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

            <footer className="center">
                <button onClick={loadMore}>Load More ...</button>
            </footer>

        </div>
    )
}

export default MainPage
