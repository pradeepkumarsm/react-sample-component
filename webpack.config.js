var webpack = require('webpack');
const { resolve } = require('path');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");



module.exports = {
	devtool: 'eval',
	entry:
	{
		app:["./index.js"]
	},
	output: {
		path: resolve(__dirname, './dist'),
		filename: "sampleComponent.js",
		pathInfo: __dirname
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: [
					'style',
					'css'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude:/(node_modules)/,
				loaders: [
					'babel-loader'
				],

			},

			{test: /\.css$/, loader: "style!css"}

		]
	},
	plugins: [ // or, new ngminPlugin({dynamic: true}) for dynamic mode.

	]
};
