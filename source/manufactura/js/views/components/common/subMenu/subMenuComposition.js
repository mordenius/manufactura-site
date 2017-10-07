import { Component, createElement } from "react";
import Config from "@/config.json";
import map from "lodash/map";
import isArray from "lodash/isArray";
import SubMenuItemView from "./subMenuItemView";

class SubMenuComposition extends Component {
	getItem(item) {
		return createElement(SubMenuItemView, {
			key: item,
			data: item,
			stores: this.props.stores,
			history: this.props.history,
			type: this.props.type
		});
	}

	getLevel(list) {
		const level = map(
			list,
			item => (isArray(item) ? this.getLevel(item) : this.getItem(item))
		);

		return createElement(
			"div",
			{
				className: "sub-menu-level"
			},
			level
		);
	}

	getMenu(list) {
		return createElement(
			"div",
			{
				className: "sub-menu"
			},
			this.getLevel(list)
		);
	}

	render() {
		return createElement(
			"div",
			{
				className: "sub-menu"
			},
			this.getLevel(Config[this.props.type][this.props.data])
		);
	}
}

export default SubMenuComposition;
