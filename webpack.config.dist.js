const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: {
    'react-virtualized': './src/index.js'
  },
  output: {
    path: 'dist',
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'react-virtualized'
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  },
  plugins: [
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules&importLoaders=1', 'cssnext'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}