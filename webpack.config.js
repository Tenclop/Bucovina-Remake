const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",
        assetModuleFilename: "images/[name].[hash][ext]",
    },
    devServer: {
        static: "./dist",
      },

      module: {
        rules: [
          {
            test: /\.(sass|scss)$/,
            use: [
              "style-loader", //3. Inject styles into DOM
              "css-loader", //2. Turns css into commonJS
              "sass-loader", //1. Turns sass into css
            ],
          },

          {
            test:/\.html$/,
            use: [
              'html-loader'
            ]
          },


          {
            test: /\.(svg|png|jpg|gif)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  esModule: false,
                  name: "[name].[hash].[ext]",
                  outputPath: 'assets/images/'
                }
              }
            ],
            type: 'javascript/auto' 
          },
          
        ],
      },
    
    
      plugins: [
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "./src/index.html",
        }),
      ],
    
};