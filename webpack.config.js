const path = require('path');
const WebpackConcatPlugin = require('webpack-concat-files-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new WebpackConcatPlugin({
      bundles: [
        {
          dest: './dist/lib.min.js',
          src: './src/**/*.js',
          transforms: {
            after: (code) => {
              return terser.minify(code).code;
            },
          },
        },
      ],
    }),
  ],
};