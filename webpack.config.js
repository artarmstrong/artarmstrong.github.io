var path = require('path');
var pathSrc = path.join(__dirname, 'src');
var pathBuild = path.join(__dirname, 'dist');

module.exports = {
  context: pathSrc,
  entry: path.join(pathSrc, 'js', 'client.js'),
  output: {
    path: pathBuild,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
