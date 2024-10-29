const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve(__dirname, 'dist'), // Output directory
    clean: true, // Cleans the dist folder before each build
  },
  devServer: {
    static: './dist',
    open: true, // Automatically opens the browser
    hot: true, // Enables hot module replacement
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Template HTML file
      title: 'Portfolio Game',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile .js files using Babel
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: [/\.vert$/, /\.frag$/], // Load shader files if needed
        use: 'raw-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // Load image files
        type: 'asset/resource',
      },
    ],
  },
};
