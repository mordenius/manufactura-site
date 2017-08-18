import React, { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import map from "lodash/map";

import ButtonView from "~/views/components/common/buttonView";
import HomeHeaderComposition from "./homeHeaderComposition";

class HomeComposition extends ComponentStateStore {
	constructor(propsData){
		super({ props: propsData, name: "homeComposition" });
	}
	headerView() {
		return createElement(HomeHeaderComposition, {
			stores: this.props.stores,
			history: this.props.history
		});
	}

	buttonWrap() {
		return (
			<div className="wrapper button-wrapper">
				{map(["quick-start", "tutorial"], button =>
					createElement(ButtonView, {
						key: button,
						stores: this.props.stores,
						className: "button",
						data: button
					})
				)}
			</div>
		);
	}

	pointWrap() {
		return (
			<div className="wrapper point-wrapper">
				{map(this.props.stores.langPack.getStore.point, (point, index) =>
					createElement(
						"div",
						{
							key: index,
							className: "point"
						},
						createElement("h2", null, point.title),
						createElement("p", null, point.description)
					)
				)}
			</div>
		);
	}

	render() {
		return createElement(
			"div",
			{
				className: "article"
			},
			this.headerView(),
			this.buttonWrap(),
			this.pointWrap(),
			this.buttonWrap()
		);
	}
}

export default HomeComposition;
