module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watchOptions: {
    poll: 3500
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    host: '0.0.0.0'
  }
};
