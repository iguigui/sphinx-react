import path from 'path'
import webpack from 'webpack'
export default {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		filename: 'bundle.js',
		path: '/',
		publicPath: '/'
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'client'),
				loaders: ['react-hot-loader/webpack', 'babel-loader']
			}
		]
	},
	resolve:{
		extensions: ['.js']
	}
}