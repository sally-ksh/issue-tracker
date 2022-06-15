import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

import fonts from "./fonts";

const GlobalStyles = createGlobalStyle` 
	${reset}
	${fonts}

	html {
		font: 400 6.25% "Noto Sans KR", sans-serif ;
		color: ${({ theme }) => theme.color.black};
		background-color: ${({ theme }) => theme.color.white};
		margin: 0;
		padding: 0;
	}

	body {
		width: ${({ theme }) => theme.layout.width};
		margin: 0 auto;
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
