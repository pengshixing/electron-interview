const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CSS_MODULE_LOCAL_IDENT_NAME } = require('./constant.js');

module.exports = {
  entry: {
    index: path.resolve(__dirname, '../app/renderer/app.tsx'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@assets': path.join(__dirname, '../', 'assets/'),
      '@src': path.join(__dirname, '../', 'app/renderer'),
      '@common': path.join(__dirname, '../', 'app/renderer/common'),
    },
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              '@babel/plugin-syntax-jsx',
              '@babel/plugin-transform-runtime', // 👉 官方提供的插件，作用是减少冗余的代码
              [
                '@babel/plugin-transform-modules-commonjs', // 👉 将 ECMAScript modules 转成 CommonJS.
                {
                  allowTopLevelThis: true,
                  loose: true,
                  lazy: true,
                },
              ],
              [
                '@dr.pogodin/react-css-modules',
                {
                  generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
                  autoResolveMultipleImports: true,
                  webpackHotModuleReloading: true,
                  handleMissingStyleName: 'throw',
                  filetypes: {
                    '.less': {
                      syntax: 'postcss-less',
                    },
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2048,
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /app/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../app/renderer/index.html'),
      filename: path.resolve(__dirname, '../dist/index.html'),
      chunks: ['index'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../assets'),
          to: path.resolve(__dirname, '../dist/assets'),
        },
      ],
    }),
  ],
};
