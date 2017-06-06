const git = require('simple-git')()

const getCurrentBranchName = () => new Promise((resolve, reject) => {
  git
    .silent(true)
    .status((err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res.current)
      }
    })
})

const save = name => new Promise((resolve, reject) => {
  git
    .silent(true)
    .reset()
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

const restore = name => new Promise((resolve, reject) => {
  getCurrentBranchName().then(currentBranch => {
    git
      .silent(true)
      .mergeFromTo(name, currentBranch, {
        '--no-commit': undefined,
        '--squash': undefined
      })
      .reset((err, res) => {
        if (err) {
          reject(err)
        } else {
          resolve('saved workspace to ' + name)
        }
      })
  })

  resolve('restored workspace from ' + name)
})

module.exports = {
  save,
  restore
}
