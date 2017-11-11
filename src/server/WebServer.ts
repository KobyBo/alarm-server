import * as Koa from "koa";
import * as serve from "koa-static";
import { WebServerConfig } from "./config";

export class WebServer {
	__server: Koa;
	__port: number;

	constructor(config: WebServerConfig) {
		this.__server = new Koa();
		this.__port = config.port;

		this.__server.use(serve(config.staticFilesRoot));
	}

	start(): void {
		this.__server.listen(this.__port);
	}
}