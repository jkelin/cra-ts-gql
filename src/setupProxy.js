const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/api/graphql",
    proxy({
      target: process.env.HOST || "http://localhost:4000/graphql",
      changeOrigin: true,
      ignorePath: true
    })
  );
};
