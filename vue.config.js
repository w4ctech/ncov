module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://interface.sina.cn/news/wap/fymap2020_data.d.json',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}
