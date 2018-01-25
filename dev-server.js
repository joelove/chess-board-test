const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config');

function listener(err) {
  if (err) return console.log(err);
  console.log('Listening at http://localhost:7777/');
}

new WebpackDevServer(webpack(config), {
  stats: { colors: true },
  historyApiFallback: true,
}).listen(7777, 'localhost', listener);
