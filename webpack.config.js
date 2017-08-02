const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const APP_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'public');

var config = {
    entry: {
        home: [APP_DIR + '/HomeContainer.js'],
        search: [APP_DIR + '/SearchContainer.js'],
        hotel: [APP_DIR + '/HotelContainer.js'],
        test: [APP_DIR + '/TestContainer.js'],
        //search: [APP_DIR + '/CityAndDate.js', APP_DIR + '/FilterButtonMobileContainer.js']
    },
    output: {
        path: BUILD_DIR,
        filename: 'js/[name].js'
    },
    module: {
        rules: [
          {
              test: /\.js$/,
              loader: "babel-loader",
              options: {
                presets: [["es2015", {modules: false}], "react"]
              }
          },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                { loader: "css-loader",  options: {sourceMap: true}},
                { loader: "sass-loader", options: {sourceMap: true}}
              ]
            })
          },
          // {
          //   test: /\.scss$/,
          //   use: [
          //     {
          //       loader: "style-loader" // creates style nodes from JS strings
          //     },
          //     {
          //       loader: "css-loader", // translates CSS into CommonJS
          //       options: {
          //           sourceMap: true
          //       }
          //     },
          //     {
          //       loader: "sass-loader", // compiles Sass to CSS
          //       options: {
          //           sourceMap: true
          //       }
          //       // options: {
          //       //     includePaths: ["absolute/path/a", "absolute/path/b"]
          //       // }
          //     }
          //   ]
          // },
          // {
          //     test: /\.css$/,
          //     loader: 'style-loader'
          // },
          // {
          //     test: /\.css$/,
          //     loader: 'css-loader',
          //     query: {
          //         modules: true,
          //         localIdentName: '[name]__[local]___[hash:base64:5]'
          //     }
          // },
          // {
          //   test: /\.(png|jpg|gif)$/,
          //   loader: "file-loader?name=img/img-[hash:6].[ext]"
          // },
          // {
          //   test: /\.(png|jpg|gif)$/,
          //   loader: "url-loader?limit=5000&name=img/img-[hash:6].[ext]"
          // },
          // {
          //   test: /\.html$/,
          //   loader: "html-loader"
          // },
          // {
          //   test: require.resolve("lodash"),
          //   loader: 'expose?_'
          // }
        ]
    },
    plugins: [
      new ExtractTextPlugin("css/site.css"),
    ]
};

module.exports = config;
