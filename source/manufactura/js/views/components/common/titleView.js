import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";

class TitleView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "titleView" });
	}

	render() {
		return createElement(
			"h1",
			null,
			this.state.sections[this.props.data]
		);
	}
}

export default TitleView;
