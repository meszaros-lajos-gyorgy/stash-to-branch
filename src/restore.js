const git = require('simple-git')()
const getCurrentBranchName = require('./helpers/getCurrentBranchName')

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

module.exports = restore
