const git = require('simple-git')()

const save = name => new Promise((resolve, reject) => {
  git
    .silent(true)
    .raw(['reset'])
    .raw(['checkout', '-b', name])
    .raw(['add', '-A'])
    .commit('Stashing changes', {'--no-verify': undefined}, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(`stashed changes to branch '${name}'`)
      }
    })
})

module.exports = save
