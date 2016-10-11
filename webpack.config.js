let webpack = require('webpack');
let extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'home/': './build/bundles/home.bundle',
    // 'bio/': './build/bundles/bio.bundle',
    // 'teaching.philosophy/': './build/bundles/teaching.philosophy.bundle',
    // 'teaching/': './build/bundles/teaching.bundle',
    // 'performing/': './build/bundles/performing.bundle',
    // 'blog/': './build/bundles/blog.bundle',
    // 'contact/': './build/bundles/contact.bundle',
  },
  output: {
    path: './public/',
    publicPath: 'http://localhost:8080/',
    filename: '[name]app.js'
  },
  devtool: 'source-map',
  plugins: [
    new extractTextPlugin('[name]style.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }, 
    {
      test: /\.less$/,
      loader: extractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
    },
    { 
      test: /\.(png|jpg)$/, 
      loader: 'url-loader?limit=8192' 
    }]
  }
};
