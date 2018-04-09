/**
 * Webpack dev
 * Author: Caio Alcantara - 2018
 * @memberOf effect-cms
*/
module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'env'
          ]
        }
      }
    ]
  }
}
