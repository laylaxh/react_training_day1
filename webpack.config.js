const path = require('path');

const config = {
  devtool: 'eval-source-map', 
  entry: './index.js', // start here
  output: {  // write to here
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //for every js file, scan it for JSX and transpile using babel
      { test: /\.js$/, 
        exclude: /node_modules/, // only want my own js files, not reacts. makes npm run webpack a lot faster
        use: 'babel-loader' }
    ]
  }
};


module.exports = config;
