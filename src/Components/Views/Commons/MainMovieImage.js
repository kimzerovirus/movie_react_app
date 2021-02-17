import React from 'react'

function MainMovieImage(props) {
    return (
        <div>
            <article className="__main">
                <div className="__img"
                    style={{ backgroundImage: `url(${props.image})` }}
                >
                </div>
                {/* <img src={`${IMAGE_BASE_URL}w1280${MainImage}`} alt="" /> */}
            </article>

            <div className="__main-tit">
                <h2>{props.title}</h2>
                {
                    props.detail
                        ? props.text ? (<p>영화 설명 정보가 없습니다</p>) : (<p>{props.text}</p>)
                        : (<p className="hide">{props.text}</p>)
                }
            </div>
        </div>
    )
}

export default MainMovieImage
