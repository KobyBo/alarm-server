import { WebServer } from "./WebServer"; 
import { Config, defaultConfig } from "./config";

class AlarmManager {
	__webServer: WebServer;

	constructor(config: Config = defaultConfig) {
		this.__webServer = new WebServer(config.webServer);
	}

	start(): void {
		this.__webServer.start();
	}
}

const alarmManager: AlarmManager = new AlarmManager();

alarmManager.start();
console.log(`Server is listening on port ${defaultConfig.webServer.port}...`);