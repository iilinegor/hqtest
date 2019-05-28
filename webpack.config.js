var webpack = require('webpack');

module.exports = {
	entry: "./src/index.js",
	output: {
		path: __dirname + "/public/build/",
		publicPath: "build/",
		filename: "bundle.js"
	},


	resolve: {
		extensions: ['.js', '.jsx']
	},

	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],

	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				loader: "babel-loader",
				exclude: [/node_modules/, /public/],
				query:
				{
					presets: ['react', "stage-0"]
				}
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
				exclude: [/node_modules/]
			},
			{
				test: /\.gif$/,
				exclude: [/node_modules/],
				loader: "url-loader&limit=10000&mimetype=image/gif"
			},
			{
				test: /\.jpg$/,
				exclude: [/node_modules/],
				loader: "url-loader"
			},
			{
				test: /\.png$/,
				exclude: [/node_modules/],
				loader: "file-loader?limit=10000&mimetype=image/png"
			}
		]
	}
}