const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname);
const { presets } = require('./babel.config.js');

const compileModules = [
  'react-native-reanimated',
  // Add the packages that needs to be compiled here
].map(module => path.resolve(APP_DIR, `node_modules/${module}`));

const babelLoaderConfig = {
  test: /\.js$|tsx?$/,
  include: [
    path.resolve(__dirname, 'index.js'),
    path.resolve(__dirname, 'src'),
    ...compileModules,
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web'],
    },
  },
};

const svgLoaderConfig = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
    },
  ],
};

const imageLoaderConfig = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: { name: '[name].[ext]', esModule: false },
  },
};

module.exports = {
  entry: {
    app: path.join(__dirname, 'index.js'),
  },
  output: {
    path: path.resolve(APP_DIR, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
    sourceMapFilename: '[name].js.map',
  },
  resolve: {
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
  module: {
    rules: [babelLoaderConfig, imageLoaderConfig, svgLoaderConfig],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'web/index.html'),
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
      process: { env: {} },
    }),
  ],
};
