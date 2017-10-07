import { createElement } from "react";
import { ComponentStateStore } from "redux-store-controller";
import RouteList from "./routeList";

class IndexView extends ComponentStateStore {
	constructor(propsData) {
		super({ props: propsData, name: "indexView" });
	}

	render() {
		return this.getRoute();
	}

	getRoute() {
		let component = RouteList.default.child;
		try {
			component = RouteList[this.state.viewport].child;
		} catch (e) {
			// Apply default component
		}

		return createElement(component, {
			stores: this.props.stores,
			history: this.props.history
		});
	}
}

export default IndexView;
