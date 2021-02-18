import React, { useEffect, useState } from 'react'
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from '../../../Config/Key'
import Axios from 'axios'

import GridCards from '../Commons/GridCards'
import MainMovieImage from '../Commons/MainMovieImage'
import SearchIcon from '../Commons/SearchIcon'

function MainPage() {

    const [Movies, setMovies] = useState([])
    const [MainImage, setMainImage] = useState([])
    const [CurrentPage, setCurrentPage] = useState(0)


    useEffect(() => {
        const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

        getMovies(API_URL)

        //console.log(`이미지패스: ${IMAGE_BASE_URL}w1280${MainImage}`)
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

            if (CurrentPage === 0) {
                //first load
                //console.log(CurrentPage)
                //console.log(results[0].backdrop_path)
                setMainImage(
                    [
                        results[0].backdrop_path,
                        results[0].original_title,
                        results[0].overview
                    ]
                )
            }

            setCurrentPage(page)

        } catch (err) {
            //Error
            alert(`API_CALL_ERROR: ${err}`)
        }

    }


    // //Scroll Event
    // document.addEventListener('scroll', function () {
    //     const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;

    //     let currentScroll = document.documentElement.scrollTop + document.documentElement.clientHeight
    //     let height = Math.max(
    //         document.body.scrollHeight, document.documentElement.scrollHeight,
    //         document.body.offsetHeight, document.documentElement.offsetHeight,
    //         document.body.clientHeight, document.documentElement.clientHeight
    //     );

    //     console.log('currentScrollValue is ' + currentScroll + ' / max: ' + height);
    //     if (currentScroll >= height - 10) {

    //         getMovies(API_URL)
    //     }
    // });

    //Button Event
    const loadMore = () => {
        const API_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=ko-KR&page=${CurrentPage + 1}`;

        getMovies(API_URL)
    }



    return (
        <div className="wrap">
            {/* <header className="center">
                <h1>MainPage</h1>
            </header> */}

            <MainMovieImage
                image={`${IMAGE_BASE_URL}w1280${MainImage[0]}`}
                title={MainImage[1]}
                text={MainImage[2]}
            />





            <section className="grid-section mt">

                <div className="menu">
                </div>

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

            <SearchIcon />

            <footer className="center">
                <button onClick={loadMore} className="btn">더 보기</button>
            </footer>

        </div >
    )
}

export default MainPage
