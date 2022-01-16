import styled from 'styled-components';

export const SearchPageWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 100px;
	h1 {
		text-align: center;
	}
	> div {
		margin: 1rem 0 3rem;
	}

	/* mobile Only */
	@media all and (max-width: 767px) {
		padding-top: 50px;
		h1 {
			font-size: 22px;
		}
	}
`;

export const SearchForm = styled.div`
	display: flex;
	input {
		color: #333;
		width: 60vw;
		max-width: 360px;
		padding: 1rem;
	}
	button {
		background: #13aa52;
		box-sizing: border-box;
		width: 60px;
		padding: 1rem;
	}
	@media all and (max-width: 767px) {
		input,
		button {
			padding: 0.5rem;
		}
	}
`;
