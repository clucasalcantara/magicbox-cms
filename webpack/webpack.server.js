/**
 * Webpack server
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
*/
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')
const WebpackMessages = require('webpack-messages')

const config = {
  devtool: 'eval',
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application
  entry: './src/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build')
  },
  plugins: [
    new WebpackMessages({
      name: 'server',
      logger: str => console.log(`Server bundle >> ${str}`),
    }),
    'babel-plugin-transform-export-extensions',
    'transform-es2015-modules-commonjs'
  ],

  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
