import * as path from 'path';
import * as webpack from 'webpack';
import 'webpack-dev-server';

const config: webpack.Configuration = {
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
    },
    devtool: 'source-map',
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './src/index.tsx',
    ],
    mode: 'development',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                    },
                },
            },
            {
                include: path.join(__dirname, 'src'),
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                include: path.join(__dirname, 'test'),
                test: /\.tsx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: ['url-loader?limit=100000'],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

export default config;
