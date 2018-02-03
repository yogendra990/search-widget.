var path = require('path');
var webpack = require('webpack');
module.exports  = {
    entry: path.resolve(__dirname,'content/scripts')+"/index.js",
    output:{
        path:path.resolve(__dirname,'content/scripts'),
        filename:"bundle.js"
    },
    module:{
        loaders:[{
            test:/\.js$/,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['es2015']
            }
        }]
    }
};