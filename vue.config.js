module.exports = {
  devServer: {
    host: 'footer.58coin.com',
    port: 8082,
    https: false,
    hotOnly: false,
    disableHostCheck: true,
    proxy: null, // 设置代理
    overlay: {
      warnings: false,
      errors: true
    }
  },
  lintOnSave: undefined
}
