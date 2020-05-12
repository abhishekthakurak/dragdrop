import paths from '../paths.js'
import loaders from './loaders.js'
import plugins from './plugins.js'
import alias from './alias.js'
import optimization from './optimization.js'

const DEV = process.env.NODE_ENV !== 'production'

export default {
  name: 'housing-slave-repo',
  entry: paths.entry,
  mode: DEV ? 'development' : 'production',
  output: {
    filename: DEV ? 'js/[name].js' : 'js/[name].[chunkhash:8].js',
    chunkFilename: DEV ? 'js/[name].js' : 'js/[name].[chunkhash:8].js',
    path: paths.dist
  },
  resolve: {
    alias,
    symlinks: false
  },
  module: {
    ...loaders
  },
  plugins,
  optimization,
  devtool: DEV ? 'sourcemap' : 'none'
}
