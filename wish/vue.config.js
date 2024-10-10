// vue.config.js
module.exports = {
  // 개발 서버 설정
  devServer: {
    port: 8080, // 개발 서버 포트
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 백엔드 서버 주소
        changeOrigin: true,
      },
    },
  },

  // 빌드 경로 설정
  outputDir: "dist", // 빌드 결과물이 저장될 디렉토리
  publicPath: "/", // 루트 경로에서 제공

  // CSS 관련 설정
  css: {
    // CSS 전처리기 설정
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";`, // SASS 변수 파일 임포트
      },
    },
  },
};
