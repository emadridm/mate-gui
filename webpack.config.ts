import * as path from 'path';

const baseConfig = {
    mode: 'development',
    resolve: {
        extensions: ['ts', 'tsx', 'js', 'jsx'],
    },
    module: {
        rules: [{ test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" }],
    },
}

const mainConfig = {
    ...baseConfig,
    name: 'main',
    target: "electron-main",
    entry: "./src/main.ts",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.bundle.js",
    },
};

const preloadConfig = {
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
