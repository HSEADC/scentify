const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

// при создании нового чанка сюда дописать
module.exports = {
  entry: {
    index: './src/index.js',
    searchVanilla: './src/search_vanilla.js',
    reactBasics: './src/react_basics.jsx',
    filterpopcult: './src/javascript/pop_cilture_filtration.js',
    partsheader:'./src/header_data.js',
    partsheade2:'./src/header.js',
    header:'./src/header.jsx',
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
      chunks: ['index', 'header']
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
    // new HtmlWebpackPlugin({
    //   template: './src/javascript/pop_cilture_filtration.js',
    //   filename: './javascript/pop_cilture_filtration.js',
    //   chunks: ['index']
    // }),
    
    
    // раздел атлас ароматов
    new HtmlWebpackPlugin({
      template: './src/aroma_atlas.html',
      filename: './aroma_atlas.html',
      chunks: ['index', 'header']
    }),

    // внутряки для атласа
    new HtmlWebpackPlugin({
      template: './src/NOTES/note_Cinnamon.html',
      filename: './NOTES/note_Cinnamon.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/NOTES/note_Jasmine.html',
      filename: './NOTES/note_Jasmine.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/NOTES/note_PaloSanto.html',
      filename: './NOTES/note_PaloSanto.html',
      chunks: ['index', 'header']
    }),


    // раздел статей
    new HtmlWebpackPlugin({
      template: './src/articles.html',
      filename: './articles.html',
      chunks: ['index', 'header']
    }),

    // внутряки для статей
    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesHYGGE.html',
      filename: './ARTICLES/articlesHYGGE.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesSPRING.html',
      filename: './ARTICLES/articlesSPRING.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesLESSSTRESS.html',
      filename: './ARTICLES/articlesLESSSTRESS.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesNOTESandACCORDS.html',
      filename: './ARTICLES/articlesNOTESandACCORDS.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesSUMMER.html',
      filename: './ARTICLES/articlesSUMMER.html',
      chunks: ['index', 'header']
    }),

    new HtmlWebpackPlugin({
      template: './src/ARTICLES/articlesSELFMADE.html',
      filename: './ARTICLES/articlesSELFMADE.html',
      chunks: ['index', 'header']
    }),

    // раздел поп-культура
    new HtmlWebpackPlugin({
      template: './src/pop_culture.html',
      filename: './pop_culture.html',
      chunks: ['index', 'header']
    }),
    // раздел тесты
    new HtmlWebpackPlugin({
      template: './src/tests.html',
      filename: './tests.html',
      chunks: ['index', 'header']
    }),
    // и здесь подключать новый чанк
    // chunk searchVanilla
    new HtmlWebpackPlugin({
      template: './src/search_vanilla.html',
      filename: './search_vanilla.html',
      chunks: ['searchVanilla']
    }),
    // chunk reactBasics
    new HtmlWebpackPlugin({
      template: './src/react_basics.html',
      filename: './react_basics.html',
      chunks: ['reactBasics']
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
        path: path.join(__dirname, './src/partials/footer_for_index.html'),
        location: 'footer_for_index',
        template_filename: '*',
        priority: 'replace'
      }
    ]),

    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/footer_for_all.html'),
        location: 'footer_for_all',
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
