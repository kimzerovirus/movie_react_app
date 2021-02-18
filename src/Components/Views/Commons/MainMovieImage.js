import React from 'react'
import DetailData from '../DetailPage/DetailData'

function MainMovieImage(props) {
    if (props.detail) {
        return (
            <div>
                <article className="__main clfix">
                    <div className="overflow clfix">
                        <div className="__img clfix"
                            style={{ backgroundImage: `url(${props.image})` }}
                        >
                        </div>
                    </div>
                    {/* <img src={`${IMAGE_BASE_URL}w1280${MainImage}`} alt="" /> */}

                    <div className="__main-tit">
                        <h2>{props.title}</h2>
                        {
                            props.detail
                                ? props.text ? (<p>{props.text}</p>) : (<p>영화 설명 정보가 없습니다</p>)
                                : (<p className="hide">{props.text}</p>)
                        }

                        <DetailData movie={props.movie} />
                    </div>

                </article>


            </div>
        )
    } else {
        return (
            <div>
                <article className="__main clfix">
                    <div className="overflow clfix">
                        <div className="__img clfix"
                            style={{ backgroundImage: `url(${props.image})` }}
                        >
                        </div>
                    </div>
                    {/* <img src={`${IMAGE_BASE_URL}w1280${MainImage}`} alt="" /> */}

                    <div className="__main-tit">
                        <h2>{props.title}</h2>
                        {
                            props.detail
                                ? props.text ? (<p>{props.text}</p>) : (<p>영화 설명 정보가 없습니다</p>)
                                : (<p className="hide">{props.text}</p>)
                        }
                    </div>

                </article>


            </div>
        )
    }
}

export default MainMovieImage
