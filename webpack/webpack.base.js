const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CSS_MODULE_LOCAL_IDENT_NAME } = require('./constant');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },
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
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
