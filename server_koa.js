const Koa = require("koa");
const path = require("path");
const app = Koa();

// 本地测试启动webpack打包
if (process.env.NODE_ENV === "development") {
  const webpack = require("webpack");
  const config = require("./config/webpackconfig");
  const webpackHotMiddleware = require("webpack-hot-middleware"); // HMR热更新中间件
  const compiler = webpack(config);
  app.use(
    require("webpack-hot-middleware")(compiler, {
      path: "/__webpack_hmr",
      heartbeat: 10 * 1000
    })
  );
  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    })
  );
  // 挂载HMR热更新中间件
  app.use(webpackHotMiddleware(compiler));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(9000, function() {
  console.log("9000");
});
