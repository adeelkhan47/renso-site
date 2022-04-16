module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: "de",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false
    }
  }
};
