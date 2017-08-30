const path = require('path');

const config = {
  entry: './index.js', // start here
  output: {  // write to here
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //for every js file, scan it for JSX and transpile using babel
      { test: /\.js$/, use: 'babel-loader' }
    ]
  }
};


module.exports = config;
