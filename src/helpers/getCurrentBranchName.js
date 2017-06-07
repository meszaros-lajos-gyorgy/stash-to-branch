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

module.exports = getCurrentBranchName
