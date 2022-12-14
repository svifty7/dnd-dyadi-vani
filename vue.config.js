const path = require('path');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? '/dnd-dyadi-vani/'
        : '/',
    filenameHashing: false,
    runtimeCompiler: true,
    productionSourceMap: true,
    transpileDependencies: false,
    configureWebpack: {
        output: {
            filename: 'js/[name].js',
            chunkFilename: 'js/[name].[fullhash].js'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('svg')
            .exclude
            .add(path.resolve(__dirname, './src/assets/icons/svg'))
            .end();

        config.module
            .rule('svg-icon')
            .test(/\.svg$/)
            .include
            .add(path.resolve(__dirname, './src/assets/icons/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({ symbolId: 'dnd5club-icon-[name]' })
            .end()
            .use('svgo-loader')
            .loader('svgo-loader')
            .options({
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: { removeViewBox: false }
                        }
                    },
                    {
                        name: 'removeAttrs',
                        params: {
                            attrs: '(width|height|style|color|fill|stroke)'
                        }
                    }
                ]
            })
            .end();
    },
    css: {
        extract: process.env.NODE_ENV === 'production'
            ? {
                filename: 'css/[name].css',
                chunkFilename: 'css/[name].[fullhash].css'
            }
            : undefined,
        loaderOptions: {
            css: {
                url: false
            },
            sass: {
                additionalData: '@import "@/assets/styles/_variables.scss";',
                sassOptions: {
                    includePaths: ['./node_modules']
                }
            }
        },
        sourceMap: true
    }
});
