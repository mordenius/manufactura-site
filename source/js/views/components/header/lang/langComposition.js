import React, { Component, createElement } from "react";
import map from "lodash/map";
import LangItemView from "./langItemView";

const menu = [
	"en", "ua", "ru"
];

class LangComposition extends Component {
	render() {
		return (
			<nav>
				{map(menu, item =>
					createElement(LangItemView, {
						key: item,
						stores: this.props.stores,
						data: item
					})
				)}
			</nav>
		);
	}
}

export default LangComposition;
