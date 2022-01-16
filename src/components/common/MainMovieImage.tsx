import React from 'react';

//style
import { MainImage, Wrapper } from './MainMovieImage.style';

interface MovieState extends MainImageProps {
	title: string;
	text: string;
}

export interface MainImageProps {
	image: string;
}

const MainMovieImage = (props: MovieState) => {
	return (
		<Wrapper>
			<MainImage image={props.image}>
				<div className="container">
					<h2>{props.title}</h2>
					{props.text ? <p>{props.text}</p> : <p>영화 설명 정보가 없습니다</p>}
				</div>
			</MainImage>
		</Wrapper>
	);
};

export default MainMovieImage;
