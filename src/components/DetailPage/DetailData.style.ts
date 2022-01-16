import styled from 'styled-components';

export const Table = styled.div`
	.tr {
		width: 50%;
		float: left;
	}

	.td,
	.th {
		box-shadow: 2px 0 0 0 #888, 0 2px 0 0 #888, 2px 2px 0 0 #888,
			2px 0 0 0 #888 inset, 0 2px 0 0 #888 inset;
		box-sizing: border-box;
		float: left;
		height: 36px;
		line-height: 36px;
		overflow: hidden;
	}
	.td {
		width: 70%;
		padding-left: 1rem;
	}
	.th {
		width: 30%;
		text-align: center;
	}
	/* mobile Only */
	@media all and (max-width: 767px) {
		margin-bottom: 3rem;
		p {
			margin-bottom: 3rem;
		}
		h3 {
			margin-bottom: 1rem;
		}
		.tr {
			width: 100%;
		}
	}

	/* tablet & PC */
	@media all and (min-width: 768px) {
		margin-bottom: 5rem;
		p {
			display: none;
		}
		h3 {
			margin: 3rem 0 1rem;
		}
		.th,
		.td {
			height: 60px;
			line-height: 60px;
		}
	}
`;
