const { merge } = require('webpack-merge');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const baseConfig = require('./webpack.base');

const prodConfig = {
  mode: 'production',
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        vendors: {
          test: /(react|react-dom)/,
          name: 'vendors',
          chunks: 'all',
          priority: -10,
        },
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: -20,
        },
      },
    },
  },
  plugins: [
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/,
      cssProcessor: require('cssnano'), // eslint-disable-line
    }),

    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://unpkg.com/react@17/umd/react.production.min.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://unpkg.com/react-dom@17/umd/react-dom.production.min.js',
    //       global: 'ReactDOM',
    //     },
    //   ],
    //   hash: true,
    //   files: ['index.html'],
    // }),
  ],
  // devtool: 'source-map',
};

module.exports = merge(baseConfig, prodConfig);
