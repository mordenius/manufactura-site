import { createElement } from "react";
import { render } from "react-dom";

import HeaderComposition from "./components/header/headerComposition";
import FooterComposition from "./components/footer/footerComposition";
import IndexView from "./indexView";

class ViewController {
	constructor(options) {
		render(
			createElement(
				"div",
				{ id: "wrapper" },
				createElement(HeaderComposition, options),
				createElement(IndexView, options),
				createElement(FooterComposition, options)
			),
			document.getElementById("container")
		);
	}
}

export default ViewController;