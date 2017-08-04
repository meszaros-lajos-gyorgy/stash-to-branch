const git = require('simple-git')()

const restore = name => new Promise((resolve, reject) => {
  git
    .silent(true)
    .raw(['merge', '--no-commit', '--squash', name])
    .raw(['reset'], (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(`applied changes from stashed branch '${name}'`)
      }
    })
})

module.exports = restore
