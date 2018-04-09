/**
 * Webpack dev
 * @author Caio Alcantara - 2018
 * @memberof effect-cms
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
