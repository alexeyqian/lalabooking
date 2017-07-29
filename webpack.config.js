var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public/js');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
    entry: {
        home: [APP_DIR + '/HomeContainer.js'],
        search: [APP_DIR + '/SearchContainer.js'],
        hotel: [APP_DIR + '/HotelContainer.js'],
        //search: [APP_DIR + '/CityAndDate.js', APP_DIR + '/FilterButtonMobileContainer.js'],

        //adminDashboard: [APP_DIR + '/AdminRLEmailLeadInfoContainer.jsx']
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders: [
          {
              test: /\.js$/,
              include: APP_DIR,
              loader: 'babel-loader'
          },
          {
              test: /\.jsx?/,
              include: APP_DIR,
              loader: 'babel-loader'
          },
          {
              test: /\.css$/,
              loader: 'style-loader'
          },
          {
              test: /\.css$/,
              loader: 'css-loader',
              query: {
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]'
              }
          }
        ]
    }
};

module.exports = config;
