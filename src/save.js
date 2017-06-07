const git = require('simple-git')()

const save = name => new Promise((resolve, reject) => {
  git
    .silent(true)
    .raw(['reset'])
    .raw(['checkout', '-b', name])
    .raw(['add', '-A'])
    .commit('Saving workspace', {'--no-verify': undefined}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve('saved workspace to ' + name)
      }
    })
})

module.exports = save
