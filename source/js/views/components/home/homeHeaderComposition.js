import React, { Component, createElement } from "react";
import LogoView from "~/views/components/common/logoView";

class HomeHeaderComposition extends Component {
	descriptionView() {
		return createElement(
			"h3",
			{
				className: "d-lb"
			},
			this.props.stores.langPack.getStore.description
		);
	}

	lineWrap() {
		return createElement(
			"div",
			{
				className: "line"
			},
			<LogoView />,
			this.descriptionView()
		);
	}

	versionView() {
		return createElement(
			"h2",
			null,
			this.props.stores.langPack.getStore.version
		);
	}

	titleWrap() {
		return createElement(
			"div",
			{
				className: "title"
			},
			this.lineWrap(),
			this.versionView()
		);
	}

	render() {
		return createElement(
			"div",
			{
				className: "home-header"
			},
			this.titleWrap()
		);
	}
}

export default HomeHeaderComposition;
