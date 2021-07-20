module.exports = {
    devServer: {
        proxy: {
            '/aaa': {
                /* 目标代理服务器地址 */
                target: 'https://api.binstd.com/recipe',
                /* 允许跨域 */
                changeOrigin: true,
                pathRewrite: { "^/aaa": "" }
            },
        },
    },
}