const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: '/src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'production',
    optimization: {
        minimizer: [new OptimizeCssAssetsWebpackPlugin(), new TerserPlugin()],
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "/src/client/views/index.html",
            filename: "/index.html",
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" }),
        new WorkboxPlugin.GenerateSW({
            // Do not precache images
            exclude: [/\.(?:png|jpg|jpeg|svg)$/],
      
            // Define runtime caching rules.
            runtimeCaching: [{
              // Match any request that ends with .png, .jpg, .jpeg or .svg.
              urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
      
              // Apply a cache-first strategy.
              handler: 'CacheFirst',
      
              options: {
                // Use a custom cache name.
                cacheName: 'images',
      
                // Only cache 10 images.
                expiration: {
                  maxEntries: 10,
                },
              },
            }],
          })
        ]
    };
