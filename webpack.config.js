const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      } /* ,
      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/i,
        use: {
          loader: 'url-loader', // El orden de ejecución es desde el último al primero
          options: {
            limit: 9000000 // tamaño permitido del formato binario que queramos caragar
          }
        }
      } /* ,
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      } */
    ]
  }
};
