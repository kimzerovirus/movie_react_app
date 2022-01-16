import styled from 'styled-components';

export const GridCard = styled.li`
	img {
		width: 100%;
		border-radius: 0.7rem;
	}

	@media all and (max-width: 767px) {
		width: calc(100% / 2 - 0.5rem); // 총gap%한줄당컬럼수 = 1rem % 2
	}
	@media all and (min-width: 768px) {
		width: calc(100% / 4 - 0.75rem); // 3rem % 4
	}
	@media all and (min-width: 1280px) {
		width: calc(100% / 5 - 0.8rem); // 4rem % 5
	}
`;
