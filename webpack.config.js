//ref:https://imranhsayed.medium.com/set-up-react-app-with-webpack-webpack-dev-server-and-babel-from-scratch-df398174446d 
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = (env, argv) =>{
    const mode = argv.mode || 'development'
    const config={
        context: __dirname,
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js',
            publicPath: '/',
            clean: true,
        },
        
        devtool: mode === 'development' ? 'eval-source-map' : false,
        
        devServer: {
            historyApiFallback: true,
            port: 9000,
            compress: true,
            static:'./dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpg|svg|gif)?$/,
                    use: 'file-loader'
                }
            ]
        },
        
        resolve: {
            extensions: ['.js', '.jsx', '.css'],   
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, 'src/index.html'),
                filename: 'index.html',
                //inject: mode === 'development' ?true:false
            })
        ]
    }

    return config;
}