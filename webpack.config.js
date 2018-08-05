const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const distPath = path.join(__dirname, './dist');

module.exports = {
  entry: {
    js: './src/index.js'
  },
  output: {
    path: distPath,
    filename: '[name].bundle.js',
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: `empty`,
    fs: `empty`,
    net: `empty`,
    tls: `empty`,
    child_process: `empty`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
  ]
}
