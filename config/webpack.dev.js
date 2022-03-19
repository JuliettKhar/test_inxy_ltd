const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');

const commonConfig = require('./webpack.common');
const path = require('path');
console.log(path.resolve('./src/styles/_variables.scss'));

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
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: ['./src/styles/_variables.scss'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(
  commonConfig,
  devConfig,
);
