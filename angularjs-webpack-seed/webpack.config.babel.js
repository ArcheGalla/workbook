const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ProvidePlugin} = require('webpack');

import {join, resolve} from 'path';
const path = require('path');

export default {
  entry: './src/app/index.bootstrap',
  context: __dirname,
  output: {
    path: join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      // jquery: path.resolve('node_modules/jquery/dist/jquery.min.js'),
      // angular: path.resolve('node_modules/angular/index.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src'],
          },
        },
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: /angular/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'sass-loader'},
        ],
      }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(__dirname, 'src', 'tpl-index.ejs'),
    }),
    new ProvidePlugin({
      // $: 'jquery',
    }),
  ],
};