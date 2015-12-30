var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./javascript/init",
  output: {
    path: __dirname,
    filename: "build/bundle.js",
    sourceMapFilename: "sourcemap"
  },
  resolve: {
    // Allow to omit extensions when requiring these files
    extensions: ['', '.js', '.jsx', '.js.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'assets'),
      css: path.resolve(__dirname, 'css'),
      dependencies: path.resolve(__dirname, 'dependencies'),
      javascript: path.resolve(__dirname, 'javascript')
    }
  },
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        loader: "babel", 
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("build/style.css", {
      allChunks: true
    })
  ],
  devtool: "#inline-source-map"
};
