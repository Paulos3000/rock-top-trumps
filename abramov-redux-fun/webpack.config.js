const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: path.join(__dirname, 'public', 'app-client.js'),
    devServer: {
      inline: true,
      port: 3333,
      contentBase: "public/static/",
      historyApiFallback: {
        index: '/index-static.html'
      }
    },
    output: {
      path: path.join(__dirname, 'public', 'static', 'js'),
      publicPath: "/js/",
      filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
               test: path.join(__dirname, 'public'),
               loader: ['babel-loader'],
               query: {
                 presets: debug ? ['react', 'es2015', 'stage-2', 'react-hmre'] : ['react', 'es2015', 'stage-2']
               }
            }
        ]
    },
    plugins: debug ? [] : [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false },
        mangle: true,
        sourcemap: false,
        beautify: false,
        dead_code: true
      }),
   ]
}
