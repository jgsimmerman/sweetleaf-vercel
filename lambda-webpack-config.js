var webpack = require('webpack');

module.exports = {
  plugins: [new webpack.DefinePlugin({ 'global.GENTLY': false })],
  resolve: {
    alias: {
      sha3: path.join(__dirname, 'node_modules/sha3/build/Release/sha3.node'),
    },
  },
  module: {
    rules: [
      {
        type: `javascript/auto`,
        test: /\.mjs$/,
        use: [],
			},
			{test: /\.node$/, use: 'node-loader'},
    ],
  },
};
