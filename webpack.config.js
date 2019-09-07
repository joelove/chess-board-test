/* eslint-disable quote-props, no-unused-vars, object-shorthand, func-names */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');

const BabelPresetEnv = require('@babel/preset-env');
const BabelPresetReact = require('@babel/preset-react');
const babelOptions = require('./.babelrc');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [path.join(__dirname, 'node_modules')],
    alias: {
      'actions': path.join(__dirname, 'actions'),
      'components': path.join(__dirname, 'components'),
      'constants': path.join(__dirname, 'constants'),
      'containers': path.join(__dirname, 'containers'),
      'reducers': path.join(__dirname, 'reducers'),
      'routes': path.join(__dirname, 'routes'),
      'sagas': path.join(__dirname, 'sagas'),
      'schemas': path.join(__dirname, 'schemas'),
      'selectors': path.join(__dirname, 'selectors'),
      'services': path.join(__dirname, 'services'),
      'store': path.join(__dirname, 'store'),
      'assets': path.join(__dirname, 'assets'),
      'styles': path.join(__dirname, 'assets/styles'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: babelOptions,
        },
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [autoprefixer('> 1%', 'last 2 versions', 'IE 10')];
                },
              },
            },
            { loader: 'sass-loader' },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('css/[name].css'),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};
