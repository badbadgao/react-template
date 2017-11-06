var path = require('path');

module.exports = {
 entry: path.resolve(__dirname, 'src/index.js'),
 output: { path: path.resolve(__dirname, 'release/'), filename: 'index.js' },
 resolve: {
   extensions: ['*', '.js', '.jsx', '.css'],
   symlinks: false,
   modules: [
     path.resolve('./src/'),
     path.resolve('./node_modules/'),
   ],
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
