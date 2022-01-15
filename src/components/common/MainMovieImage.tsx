import React from 'react';

interface MovieState {
	title: string;
	text: string;
	image: string;
}

const MainMovieImage = (props: MovieState) => {
	return (
		<div>
			<article className="__main clfix">
				<div className="overflow clfix">
					<div
						className="__img clfix"
						style={{ backgroundImage: `url(${props.image})` }}
					></div>
				</div>

				<div className="__main-tit">
					<h2>{props.title}</h2>
					{props.text ? <p>{props.text}</p> : <p>영화 설명 정보가 없습니다</p>}
				</div>
			</article>
		</div>
	);
};

export default MainMovieImage;
