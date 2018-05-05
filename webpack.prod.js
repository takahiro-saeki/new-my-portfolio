const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Merge(common, {
  mode: 'production',
  entry: './js/index.js',
  output: {
    filename: 'app.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'my new portfolio',
      template: path.join(__dirname, './src/index.ejs')
    }),
    new CopyWebpackPlugin([{ from: 'img/pulse.png', to: 'pulse.png' }])
  ]
});
