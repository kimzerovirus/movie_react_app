import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
`;

export const GridList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	/* display: grid;
	grid-template-columns: repeat(auto-fill, 1fr); */
	/* @media all and (max-width: 1179px) {
		width: calc(100% / 4 - 0.75rem); // 3rem % 4
	}
	@media all and (max-width: 767px) {
		width: calc(100% / 2 - 0.5rem); // 총gap%한줄당컬럼수 = 1rem % 2
	} */
`;
