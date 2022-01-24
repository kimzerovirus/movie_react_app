import React from 'react';

//style
import { MainImage, Wrapper } from './MainMovieImage.style';

export interface MainMovieState extends MainImageProps {
	title: string;
	text: string;
}

export interface MainImageProps {
	image: string | null;
}

const MainMovieImage = (props: MainMovieState) => {
	if (props.image !== null) {
		return (
			<Wrapper>
				<MainImage image={props.image}>
					<div className="container">
						<h2>{props.title}</h2>
						{props.text ? (
							<p>{props.text}</p>
						) : (
							<p>영화 설명 정보가 없습니다</p>
						)}
					</div>
				</MainImage>
			</Wrapper>
		);
	} else {
		return <div></div>;
	}
};

export default MainMovieImage;
