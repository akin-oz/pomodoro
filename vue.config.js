module.exports = {
  pwa: {
    name: "Pomodoro"
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    },
    quasar: {
      importStrategy: "manual",
      rtlSupport: false
    }
  },

  transpileDependencies: ["quasar"]
};
