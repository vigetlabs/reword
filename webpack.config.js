var Webpack = require('webpack')

module.exports = {
  devtool : 'source-map',

  resolve: {
    extensions: [ '', '.js'],
    modulesDirectories: [ 'web_modules', 'node_modules', 'src' ]
  },

  module: {
    loaders: [
      {
        test    : /\.js*$/,
        exclude : /node_modules/,
        loader  : 'babel'
      }
    ]
  }
}
