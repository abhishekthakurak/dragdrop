import webpack from 'webpack'
import webpackConfig from '../config/webpack/index.js'
import paths from '../config/paths'
import rimraf from 'rimraf'
import WebpackDevServer from 'webpack-dev-server'
const build = async () => {
  rimraf.sync(paths.dist)
  const options = {
    contentBase: paths.dist,
    hot: true,
    host: 'localhost',
    historyApiFallback: true
  }
  WebpackDevServer.addDevServerEntrypoints(webpackConfig, options)
  const webpackCompiler = webpack(webpackConfig)
  const server = new WebpackDevServer(webpackCompiler, options)
  server.listen(process.env.PORT || 4000, 'localhost', () => {
    console.log(`dev server listening on port ${process.env.PORT || 4000}`)
  })
}

build()
