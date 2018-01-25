/* eslint-disable quote-props, no-unused-vars */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BabelPresetEnv = require('@babel/preset-env');
const BabelPresetReact = require('@babel/preset-react');

const targets = { browsers: ['> 1%', 'last 2 versions'] };

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
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [BabelPresetEnv, { targets }],
              [BabelPresetReact],
            ],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ].map(require.resolve),
          }
        },
      },
    ],
  },
  plugins: [
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
