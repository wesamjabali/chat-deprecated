const path = require('path');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
    mode: 'development',
    entry: [
        '@babel/polyfill',
        path.join(__dirname, './ui/App.js')
    ],
    output: {
        path: path.join(__dirname, './public/bundles'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                useBuiltIns: 'entry',
                                corejs: {
                                    version: 3,
                                    proposals: true
                                }
                            }
                        ]

                    ],
                    plugins: [
                        '@babel/plugin-transform-async-to-generator'
                    ]

                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        // Requires sass-loader@^7.0.0
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        },
                        // Requires sass-loader@^8.0.0
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers'),
                                indentedSyntax: true // optional
                            },
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        //require('tailwindcss'),
        //require('autoprefixer'),
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};
