class ScrollController {
	constructor(options){
		this.history = options.history;
		this.history.listen(this.scroll.bind(this));
		setTimeout(()=> {this.scroll()}, 500);
	}

	scroll() {
		if (this.history.location.hash === "") {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			return;
		}

		try {
			const scrollTo = document.getElementById(this.history.location.hash.replace("#", ""));
			scrollTo.scrollIntoView();
		} catch (e) {
			global.console.log("Can't scroll to nonexistent anchor", this.history.location.hash.replace("#", ""));
		}
	}
}

export default ScrollController;