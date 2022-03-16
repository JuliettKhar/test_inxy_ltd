const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8081,
    historyApiFallback: {
      index: '/index.html',
    },
  },
  module: {
    rules: [

    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(
  commonConfig,
  devConfig,
);
