import styled from 'styled-components';
// import { ImageProps } from './GridCards';

export const GridCard = styled.li`
	a {
		display: block;
		width: 100%;
		height: 100%;
		img {
			width: 100%;
			border-radius: 0.7rem;
		}
	}
	padding: 5px;
	width: calc(100% / 5);
	@media all and (max-width: 1179px) {
		width: calc(100% / 4); // 3rem % 4
	}
	@media all and (max-width: 539px) {
		width: calc(100% / 2); // 총gap%한줄당컬럼수 = 1rem % 2
	}
`;
