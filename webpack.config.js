const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@mediapipe': path.resolve(__dirname, 'node_modules/@mediapipe'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
        exclude: /node_modules/, // Exclude all node_modules
      },
    ],
  },
  devtool: false, // Disable source maps entirely if they're not needed
};
