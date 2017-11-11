
export interface WebServerConfig {
	staticFilesRoot: string,
	port: number
}

export interface Config {
	webServer: WebServerConfig
}

export const defaultConfig: Config = {
	webServer: {
		staticFilesRoot: "./static",
		port: 3000
	}
};