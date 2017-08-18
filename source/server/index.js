import http from "http";
import express from "express";
import path from "path";
import fs from "fs";
// import ip from "ip";
import Config from "@/config.json";

class HttpServer {
	constructor() {
		this.app = express();
		this.server = http.createServer(this.app);

		// this.ip = ip.address();
		this.ip = "localhost";
	}

	init() {
		return new Promise((resolve, reject) => {
			this.start()
				.then(() => {
					this.initMiddleware();
					this.initView();
					this.initGetHandlers();
				})
				.then(resolve)
				.catch(reject);
		});
	}

	start() {
		return new Promise(resolve => {
			this.server.listen(Config.port, this.ip, () => {
				global.console.log(
					`${new Date()} Server ${this.ip} is listening on port ${Config.port}`
				);
				resolve();
			});
		});
	}

	initMiddleware() {
		// this.app.use(helmet.noCache());
		// this.app.use(helmet.frameguard());
		//
		// this.app.use(bodyParser.json());
		// this.app.use(
		// 	bodyParser.urlencoded({
		// 		extended: true
		// 	})
		// );

		this.app.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Credentials", true);
			res.header("Access-Control-Allow-Methods", "GET, POST");
			res.header("Access-Control-Allow-Headers", "Cache-Control");
			next();
		});
	}

	initView() {
		this.app.use("/build", express.static("build"));
	}

	initGetHandlers() {
		this.app.get("/favicon.ico", (req, res) => res.sendStatus(204));

		this.app.get("/md*", (req, res) => {
			let mark = `404 for GET: ${req.url}`;

			try {
				mark = fs.readFileSync(path.resolve(`./source/${req.url}.md`), "utf8");
			} catch (e) {
				global.console.log(mark);
			}
			res.json({ message: mark });
		});

		this.app.get('*', (req, res) => {
			res.sendFile(path.resolve('./index.html'));
		});
	}
}

const server = new HttpServer();
server.init();
