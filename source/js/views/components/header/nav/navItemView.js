import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import trim from "lodash/trim";
import kebabCase from "lodash/kebabCase";

class NavItemView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "navItemView" });
	}

	click() {
		const path = kebabCase(this.props.data);
		this.props.stores.viewport.set({ viewport: `/${path}` });
	}

	render() {
		const path = trim(this.props.data)
			.toLocaleLowerCase()
			.replace(/[ ,:]/gi, "-");

		return createElement(
			"div",
			{
				className: this.state.viewport === `/${path}` ? "current" : "",
				onClick: this.click.bind(this)
			},
			this.props.stores.langPack.getStore.sections[this.props.data]
		);
	}
}

export default NavItemView;
