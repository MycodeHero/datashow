var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$ : 'jquery', jQuery : 'jquery', "window.jQuery" : 'jquery'});
module.exports = {
    entry : {
        index : './src/js/entry.js',
    },
    output : {
        path : './out/',
        publicPath : 'http://localhost:8080/out/',
        filename : '[name].js'
    },
    module : {
        loaders : [
            {test : /.js$/, loader : 'babel-loader'},
            {test : /.css$/, loader : "style-loader!css-loader"},
            {test : /.(img|png|svg|jpg)$/, loader : 'url-loader?limit=8192&name=./[name].[ext]'},
            {test : /.less$/, loader : 'style-loader!css-loader!less-loader'}
        ]
    },
    plugins : [providePlugin]
}
