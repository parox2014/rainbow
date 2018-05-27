const path=require('path');
const webpack=require('webpack');

module.exports={
  mode:'production',
  entry:'./lib/index.js',
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'rainbow.min.js',
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {test:/\.js$/,use:'babel-loader'}
    ]
  },
  optimization:{
    minimize:true
  }
}
