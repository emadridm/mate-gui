import * as path from 'path';
import * as Webpack from 'webpack';
import * as HtmlWebPlugin from 'html-webpack-plugin';

const baseConfig: Webpack.Configuration = {
    mode: 'development',
    resolve: {
        extensions: ['ts', 'tsx', 'js', 'jsx'],
    },
    module: {
        rules: [{ test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" }],
    },
}

const mainConfig: Webpack.Configuration = {
    ...baseConfig,
    name: 'main',
    target: "electron-main",
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.bundle.js",
    },
    plugins: [new HtmlWebPlugin({
        title: 'Mate',
        template: './src/index.html'
    })]
};

const preloadConfig: Webpack.Configuration = {
    ...baseConfig,
    name: 'preload',
    target: "electron-preload",
    entry: "./src/preload.ts",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "preload.bundle.js",
    },
};

module.exports = [mainConfig, preloadConfig];
