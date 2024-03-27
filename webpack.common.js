const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    // спросить что это такое!!!1!
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, 'src/share/'),
    //       to: path.resolve(__dirname, 'dev_build/share/')
    //     },
    //     {
    //       from: path.resolve(__dirname, 'src/share/'),
    //       to: path.resolve(__dirname, 'docs/share/')
    //     }
    //   ]
    // }),

    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index']
    }),

    //  Guideline
    // new HtmlWebpackPlugin({
    //   template: './src/guideline.html',
    //   filename: './guideline.html',
    //   chunks: ['index']
    // }),
    //Theory chunk

    // Section о нас
    // new HtmlWebpackPlugin({
    //   template: './src/about.html',
    //   filename: './about.html',
    //   chunks: ['index']
    // }),

    // раздел атлас ароматов
    new HtmlWebpackPlugin({
      template: './src/aroma_atlas.html',
      filename: './aroma_atlas.html',
      chunks: ['index']
    }),

    // раздел статей
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index']
    }),
    // раздел поп-культура
    new HtmlWebpackPlugin({
      template: './src/pop_culture.html',
      filename: './pop_culture.html',
      chunks: ['index']
    }),
    // раздел тесты
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index']
    }),

    // Article

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ]),
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/header.html'),
        location: 'header',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],

  //   new HtmlWebpackPartialsPlugin([
  //     {
  //       path: path.join(__dirname, './src/partials/footer.html'),
  //       location: 'footer',
  //       template_filename: '*',
  //       priority: 'replace'
  //     }
  //   ])
  // ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
