import React, { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import trim from "lodash/trim";
import path from "path";

class SubMenuItemView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "subMenuItemView" });
	}

	click() {
		if (this.props.type === "subMenu") this.clackSub();
		else this.clickAnchor();
	}

	clickAnchor() {
		const pathname = trim(this.props.data)
			.toLocaleLowerCase()
			.replace(/[ ,:]/gi, "-");
		const h = this.props.history;
		h.push(`${h.location.pathname}#${pathname}`);
	}

	clackSub() {
		const vp = this.props.stores.viewport;

		vp.set({
			viewport: path.resolve(vp.getStore.viewport, `./${this.props.data}`)
		});
	}

	render() {
		return createElement(
			"div",
			{ onClick: this.click.bind(this) },
			<p>
				{this.state.anchors[this.props.data]}
			</p>
		);
	}
}

export default SubMenuItemView;
