import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";

class LangItemView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "langItemView" });
	}

	click() {
		this.props.stores.lang.set({ lang: this.props.data.toLocaleLowerCase() });
	}

	render() {
		return createElement(
			"div",
			{
				onClick: this.click.bind(this),
				className: this.state.lang === this.props.data ? "current" : ""
			},
			this.props.data
		);
	}
}

export default LangItemView;
