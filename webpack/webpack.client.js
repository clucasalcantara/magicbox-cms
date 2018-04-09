/**
 * Webpack client
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
*/
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const WebpackMessages = require('webpack-messages')

const config = {
  // Tell webpack the root file of our
  // server application
  entry: './src/client/index.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'scripts.js',
    path: path.resolve(__dirname, '../public')
  },
  plugins: [
    new WebpackMessages({
      name: 'client',
      logger: str => console.log(`Client bundle >> ${str}`)
    })
  ],
}

module.exports = merge(baseConfig, config)
