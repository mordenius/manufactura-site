import { ControllerStateStore } from "redux-store-controller";
import enPack from "@/lang/en.json";
import uaPack from "@/lang/ua.json";
import ruPack from "@/lang/ru.json";

const Lang = {
	en: enPack,
	ua: uaPack,
	ru: ruPack,
};

class LangController extends ControllerStateStore {
	stateDidInit() {
		this.stores.langPack.set(Lang[this.state.lang]);
	}

	stateDidUpdate() {
		this.stores.langPack.set(Lang[this.state.lang]);
	}
}

export default LangController;