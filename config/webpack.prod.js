const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodConfig = {
  mode: 'production',
  output: {
    path: path.resolve(
      __dirname,
      '../dist',
    ),
    publicPath: '/dist/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets',
          to: 'assets',
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
};

module.exports = merge(
  commonConfig,
  prodConfig,
);
