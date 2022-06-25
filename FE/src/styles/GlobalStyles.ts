import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import { FONTSIZE, FONTWEIGHT, LAYOUT } from "@/styles/constTheme";

const GlobalStyles = createGlobalStyle` 
	${reset}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font: inherit;
		color: inherit;
		flex-shrink: 0;
	}

	html {
		font: ${FONTWEIGHT.base} 6.25%/2 "Noto Sans KR", sans-serif ;
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.background};
		height: 100%;
	}
	

	body {
		width: ${LAYOUT.width}rem;
		margin: 0 auto;
		padding: 0 80rem;
		font-size: ${FONTSIZE.M}rem;
		height: 100%;
	}
	
	div {
		box-sizing: border-box;

	}

	input {
		border:none;
		background-color: transparent;
		outline:none;
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

	ui,li,ol{
		list-style: none;

	}

	span {
		display:block;
	}
`;

export default GlobalStyles;
