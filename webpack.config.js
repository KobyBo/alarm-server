const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	context: path.resolve(__dirname, "./src/client"),
	entry: './index.tsx',
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	output: {
		path: path.resolve(__dirname, "./dist/static"),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'ts-loader']
			},
			// TODO: Is this (source-map-loader) needed?
			{ 
				test: /\.js$/,
				use: "source-map-loader",
				enforce: "pre",
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		HtmlWebpackPluginConfig,
		new ExtractTextPlugin("styles.css")
	],

	devServer: {
    	compress: true,
    	disableHostCheck: true,   // That solved it
	}
};