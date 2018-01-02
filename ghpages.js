/* eslint-disable no-console */
const ghpages = require('gh-pages')

console.info('Start deploy to gh-pages')

ghpages.publish('public', {
  user: {
    name: 'Annie Volkova',
    email: 'volkova.annie@gmail.com'
  },
  repo: 'https://' + process.env.GH_TOKEN + '@github.com/volkova-annie/cuba-site.git',
  message: 'Updates [ci skip]',
}, () => {
  console.info('Deploy finished')
})
