import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import kebabCase from "lodash/kebabCase";
import startsWith from "lodash/startsWith";

class NavItemView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "navItemView" });
	}

	click() {
		const path = kebabCase(this.props.data);
		this.props.stores.viewport.set({ viewport: `/${path}` });
	}

	render() {
		const path = kebabCase(this.props.data);

		return createElement(
			"div",
			{
				className: startsWith(this.state.viewport, `/${path}`) ? "current" : "",
				onClick: this.click.bind(this)
			},
			this.props.stores.langPack.getStore.sections[this.props.data]
		);
	}
}

export default NavItemView;
