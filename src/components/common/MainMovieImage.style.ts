import styled from 'styled-components';
import { MainImageProps } from './MainMovieImage';

export const Wrapper = styled.div`
	width: 100%;
	height: 600px;
	position: relative;
	top: 0;
	left: 0;

	@media screen and (max-width: 767px) {
		width: 100%;
		height: 250px;
	}

	&:after {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 10;
		background-color: black;
		top: 0;
		left: 0;
		background: linear-gradient(
			0deg,
			rgba(54, 54, 54, 1) 20%,
			rgba(54, 54, 54, 0) 50%
		);
	}
`;

export const MainImage = styled.div<MainImageProps>`
	width: 100%;
	height: 500px;
	background-repeat: no-repeat;
	background-position: center top;
	background-size: cover;
	background-image: url(${props => props.image});

	.container {
		position: absolute;
		bottom: 3rem;
		z-index: 100;
		left: 50%;
		transform: translateX(-50%);
		h2 {
			margin-bottom: 1rem;
		}
	}

	@media screen and (max-width: 767px) {
		width: 100%;
		height: 250px;
		p {
			font-size: 0;
		}
		.container {
			bottom: 0.5rem;
		}
	}
`;
