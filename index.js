// require('babel-core/register')()
// require('babel-polyfill')

// const env = process.env.NODE_ENV || 'development';
// const port = process.env.PORT || 5000;
// const src = env === 'production' ? './build/app' : './src/app';
//
// require('babel-polyfill');
// if (env === 'development') {
//   // for development use babel/register for faster runtime compilation
//   require('babel-register');
// }
//
// const app = require(src).default;
// app.listen(port);

//require('./bin/server.js');

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;
const src = env === 'production' ? './build/server' : './src/server';

const app = require(src);
app.listen(port);
