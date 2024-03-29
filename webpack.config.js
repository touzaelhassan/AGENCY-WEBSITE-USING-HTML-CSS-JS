const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'js/main.js',
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: '../' },
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|svg|webp|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 9000,
    open: true,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    devMiddleware: {
      writeToDisk: true,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/project-details.html',
      filename: 'project-details.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/blog.html',
      filename: 'blog.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/blog-post.html',
      filename: 'blog-post.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
    }),

    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
    }),

    new MiniCssExtractPlugin({ filename: 'css/style.css' }),
    new CssMinimizerPlugin(),
  ],
};
