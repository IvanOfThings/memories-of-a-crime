const HtmlWebpackPlugin = require('html-webpack-plugin');

export const output = {
  filename: 'app.bundle.js'
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html'
  })
];
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
};
