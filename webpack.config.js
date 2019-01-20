const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: [
    '@babel/polyfill', // enables async-await
    './client/index.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
    // alias: {
    //   snapsvg: 'snapsvg/dist/snap.svg.js',
    // }
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(jsx?|svg)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
      // {
      // test: require.resolve('snapsvg'),
      //   test: require.resolve('snapsvg/dist/snap.svg.js'),
      //   use: 'imports-loader?this=>window,fix=>module.exports=0',
      // }
    ]
  }
}

// module: {
//   rules: [
//     {
//       test: require.resolve('snapsvg/dist/snap.svg.js'),
//       use: 'imports-loader?this=>window,fix=>module.exports=0',
//     },
//   ],
// },
// resolve: {
//   alias: {
//     snapsvg: 'snapsvg/dist/snap.svg.js',
//   },
// },
