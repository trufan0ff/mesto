const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = {
    entry: { main: './src/pages/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
                publicPath: ''
    },

    mode: 'development', // добавили режим разработчика
    devServer: {
        contentBase: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ // rules — это массив правил

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                  loader:  'css-loader',
                  options: { importLoaders: 1 }
                },
                'postcss-loader'
              ],
            },

          {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: '/node_modules/'
          },

          { 
            test: /\.html$/i, 
            loader: 'html-loader'
          },

          {
            test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
            type: 'asset/resource'
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
          }),
          new CleanWebpackPlugin(), // использовали плагин
          new MiniCssExtractPlugin() // подключение плагина для объединения файлов
      ]
};