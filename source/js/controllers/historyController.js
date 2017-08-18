import replace from "lodash/replace";
import words from "lodash/words";
import { ControllerStateStore } from "redux-store-controller";

class HistoryController extends ControllerStateStore {
	constructor(options) {
		options.stores.viewport.set({
			viewport: HistoryController.ignoreLang(options.history.location.pathname)
		});
		options.stores.lang.set({
			lang: words(options.history.location.pathname, /[^\/]+/g)[0] //eslint-disable-line
		});
		super(options);
		this.history = options.history;
	}

	stateDidUpdate() {
		this.history.push(`/${this.state.lang}${this.state.viewport}`);
	}

	static ignoreLang(str) {
		return replace(str, /\/ua|\/ru|\/en/, ``);
	}
}

export default HistoryController;
