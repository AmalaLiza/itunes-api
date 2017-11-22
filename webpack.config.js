const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const getConfig = (moduleName, port) => ({
  devtool: 'source-map',
  entry: {
    main: [
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      `webpack-dev-server/client?http://localhost:${port}`,

      // the entry point of our app
      './src/index.js',
    ],
  },
  output: {
    path: `${__dirname}/__build_${moduleName}__`,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg(2)?)(\?[a-z0-9]+)?$/,
        use: [
          { loader: 'file-loader' },
        ],
      },
      {
        test: /\.html$/,
        loader: 'url-loader',
        exclude: [/index.html/],
      },
      {
        test: /\.css$/,
        exclude: [/global.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        test: [/global.css/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules', path.join(__dirname, 'src')],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),
    new CopyWebpackPlugin([
      { from: 'src/images/favicon.png', to: 'favicon.png' },
    ], { copyUnmodified: true }),
  ]
});

module.exports = getConfig;
