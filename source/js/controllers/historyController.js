import replace from "lodash/replace";
import words from "lodash/words";
import size from "lodash/size";
import includes from "lodash/includes";
import { ControllerStateStore } from "redux-store-controller";

class HistoryController extends ControllerStateStore {
	constructor(options) {
		HistoryController.basic(options);
		super(options);
		this.history = options.history;
	}

	stateDidUpdate() {
		this.history.push(`/${this.state.lang}${this.state.viewport}`);
	}

	static ignoreLang(str) {
		return replace(str, /\/ua|\/ru|\/en/, ``);
	}

	static basic(options){
		const path = words(options.history.location.pathname, /[^\/]+/g); // eslint-disable-line

		switch(size(path)){
			case 0:
			default:
				break;
			case 1:
				if(includes(['ua', 'ru', 'en'], path[0])){
					options.stores.lang.set({
						lang: path[0]
					});
				}else{
					options.stores.viewport.set({
						viewport: `/${path[0]}`
					});
				}
				break;
			case 2:
				if(includes(['ua', 'ru', 'en'], path[0])) {
					options.stores.lang.set({
						lang: path[0]
					});
					options.stores.viewport.set({
						viewport: `/${path[1]}`
					});
				}else{
					options.stores.viewport.set({
						viewport: `/${path[0]}`
					});
				}
				break;
		}
	}
}

export default HistoryController;
