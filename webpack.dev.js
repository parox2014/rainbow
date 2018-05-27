const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
  mode:'production',
  entry:'./demo.js',
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'app.js'
  },
  module:{
    rules:[
      {test:/\.js$/,use:'babel-loader'}
    ]
  },
  optimization:{
    minimize:true
  },
  devtool:'#eval-source-map',
  devServer:{
    host:'0.0.0.0',
    port:3000,
    hot:true
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:path.resolve(__dirname,'demo.html'),
      inject:true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
