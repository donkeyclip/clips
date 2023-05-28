import autoprefixer from "autoprefixer";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import cssnanoPlugin from "cssnano";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import webpack from "webpack";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = (entryPoint: string): webpack.Configuration => {
  const entryFolder = dirname(entryPoint);
  return {
    context: entryFolder,
    entry: entryPoint,
    mode: "development",

    output: {
      path: path.resolve(__dirname, "./"),
      // the output bundle
      filename: "./bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".mjs"],
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          type: "asset/source",
          use: [
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer,
                    cssnanoPlugin({
                      preset: "default",
                    }),
                  ],
                },
              },
            },
          ],
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
          options: {
            minimize: true,
          },
        },
        {
          test: /\.[jt]sx?$/,
          use: {
            loader: "esbuild-loader",
            options: {
              target: "es2017",
            },
          },
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      // do not emit compiled assets that include errors
      new webpack.NoEmitOnErrorsPlugin(),
    ],

    optimization: {
      chunkIds: "size",
      // method of generating ids for chunks
      moduleIds: "size",
      // method of generating ids for modules
      mangleExports: "size",
      // rename export names to shorter names
      minimize: true,
      mergeDuplicateChunks: true,
      // minimize the output files
      minimizer: [`...`, new CssMinimizerPlugin()],
    },
    devServer: {
      host: "127.0.0.1",
      port: 8090,
      historyApiFallback: false,
      hot: true,
      static: [path.join(__dirname, "../cli/public"), entryFolder],
      open: "https://code.donkeyclip.com",
    },
  };
};
export default config;
