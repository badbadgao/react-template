var path = require('path');

module.exports = {
 entry: path.resolve(__dirname, 'war/src/index.js'),
 output: { path: path.resolve(__dirname, 'war/release/'), filename: 'index.js' },
 resolve: {
   extensions: ['*', '.js', '.jsx', '.css'],
   symlinks: false,
 },
 module: {
   loaders: [
     {
       test: /.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       query: {
         presets: ['es2015', 'es2017', 'react', 'stage-2'],
         plugins: ['transform-class-properties'],
       },
     },
     {
       test: /\.css$/,
       use: [ 'style-loader', 'css-loader' ]
     },
   ],
 },
};
