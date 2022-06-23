import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import { LAYOUT } from "@/styles/theme";

import fonts from "./fonts";

const GlobalStyles = createGlobalStyle` 
	${reset}
	${fonts}

	html {
		font: 400 6.25% "Noto Sans KR", sans-serif ;
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.background};
		margin: 0;
		padding: 0;
	}

	body {
		width: ${LAYOUT.width}
		margin: 0 auto;
		padding: 0 80rem;
	}
	
	div {
		box-sizing: border-box;
	}


	img {
		width: 100%;
		height: 100%;
	}

	button {
		cursor: pointer;
		border: none;
 		background-color: transparent;
		padding: 0;
	}

	a {
		text-decoration:none;
		color: inherit;
	}

	span {
		display:block;
	}
`;

export default GlobalStyles;
