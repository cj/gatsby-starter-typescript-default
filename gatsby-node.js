/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

// You can delete this file if you're not using it
exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        'react-dom': '@hot-loader/react-dom',
        '~': path.join(__dirname, 'src'),
      },
    },
  })
}
