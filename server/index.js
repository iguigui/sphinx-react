import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';

let app = express();

app.use(bodyParser.json());

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname)) 
app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler, {
	hot: true,
	publicPath: webpackConfig.output.publicPath,
	noInfo: true
}));

app.get('/*',(req, res) => {
	res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/users', (req, res) => {
	res.json({success : true });
	
	console.log(req.body);
});
app.listen(3000, () => console.log('server http://localhost:3000 running...'));