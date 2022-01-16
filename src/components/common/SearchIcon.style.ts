import styled from 'styled-components';

export const SearchWrapper = styled.div`
	cursor: pointer;
	width: 80px;
	height: 80px;
	position: fixed;
	bottom: 0;
	right: 0;
	z-index: 5010;
	margin: 3vw;
	background: #13aa52;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	a {
		i {
			font-size: 28px;
		}
	}

	@media all and (max-width: 767px) {
		width: 50px;
		height: 50px;
		a {
			i {
				font-size: 16px;
			}
		}
	}

	@media all and (max-width: 1279px) {
		width: 60px;
		height: 60px;
		a {
			i {
				font-size: 20px;
			}
		}
	}
`;
