import path from 'path'

const resolveApp = relativePath => path.resolve(relativePath)
export default {
  entry: resolveApp('./src'),
  dist: resolveApp('dist'),
  indexHtml: resolveApp('src/index.html'),
  reportHtml: resolveApp('report.html'),
  store: resolveApp('src/store'),
}
