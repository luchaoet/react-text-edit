const path = require('path')
// 导入每次删除文件夹的插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// const webpack = require('webpack')
// // 导入抽取CSS的插件
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
// // 导入压缩CSS的插件
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: 'production',
  entry:  './src/index.jsx',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-text-edit',
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }, 
  module: {
    rules: [
      {test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
      {
        test: /.js|jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      root: 'ReactDOM',
    },
  }
}