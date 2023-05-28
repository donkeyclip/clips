import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "../webpack.config";

export default function start(entryPoint: string) {
  // eslint-disable-next-line no-console
  console.log("Starting the dev web server...");
  const webpackConfig = config(entryPoint);
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(webpackConfig.devServer, compiler);

  return server.startCallback(() => {
    ["SIGINT", "SIGTERM"].forEach(function (sig) {
      process.on(sig, function () {
        server.close();
        process.exit();
      });
    });
  });
}
