import styled, { keyframes } from 'styled-components';

const animate = keyframes`
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
`;

export const Loader = styled.div`
	width: 100%;
	height: 150px;

	div,
	div:after {
		border-radius: 50%;
		width: 5em;
		height: 5em;
	}

	div {
		margin: 60px auto;
		position: relative;
		// 애니메이션 작동시 높이값이 널뛰는 이슈? styledcomponents일때만 그런것 같음
		/* font-size: 10px;
		text-indent: -9999em;
		border-top: 0.7em solid rgba(255, 255, 255, 0.1);
		border-right: 0.7em solid rgba(255, 255, 255, 0.1);
		border-bottom: 0.7em solid rgba(255, 255, 255, 0.1);
		border-left: 0.7em solid green;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		animation: ${animate} 1.2s infinite linear; */
	}
`;
