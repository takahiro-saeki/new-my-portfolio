const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './js/index.js'
  ],
  output: {
    filename: 'app.bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devtool: '#source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    historyApiFallback: true,
    open: true,
    openPage: '',
    port: 9843,
    inline: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'kobo/genre page multiple',
      template: path.join(__dirname, './src/index.ejs')
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  context: path.resolve(__dirname, 'src'),
  performance: {
    hints: false
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => {
                return [require('autoprefixer')];
              }
            }
          }
        ]
      }
    ]
  }
};
