import React, { createElement } from "react";
import map from "lodash/map";
import { ComponentStateStore } from "redux-store-controller";
import Config from "@/config.json";
import NavItemView from "./navItemView";

class NavComposition extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "navComposition" });
	}

	render() {
		return (
			<nav>
				{map(Config.sections, item =>
					createElement(NavItemView, {
						key: item,
						stores: this.props.stores,
						data: item
					})
				)}
			</nav>
		);
	}
}

export default NavComposition;
