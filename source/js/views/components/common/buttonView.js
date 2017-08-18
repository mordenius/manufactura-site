import { Component, createElement } from "react";

class ButtonView extends Component {
	click() {
		this.props.stores.viewport.set({ viewport: `/${this.props.data}` });
	}

	render() {
		return createElement(
			"div",
			{
				className: "button",
				onClick: this.click.bind(this)
			},
			this.props.stores.langPack.getStore.buttons[this.props.data]
		);
	}
}

export default ButtonView;
