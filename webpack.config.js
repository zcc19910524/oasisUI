/**
 * Created by Administrator on 2017/1/12 0012.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    devtool: 'eval-source-map',

    //entry: __dirname + "/component/index.js",
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, './component/index.js')],

    output:{
       // path:__dirname+'/bundle',
        path: path.resolve(__dirname, 'bundle'),
        filename:'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()     //替换 webpack-dev-server
    ],
    devServer:{
        colors:true,
        historyApiFallback:true,
        inline:true,
        hot:true,
        port:9002
    },

    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
            },
            {
                test:/\.less$/,
                loader:'style!css!less'
            }
        ]
    },
}
