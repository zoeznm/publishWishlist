export default {
  // 개발 서버 설정
  devServer: {
    port: 8080,
    historyApiFallback: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },

  // 빌드 경로 설정
  outputDir: "dist",
  publicPath: "/",

  // CSS 관련 설정
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`,
      },
    },
  },
};
