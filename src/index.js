const git = require('simple-git')()

console.log('testing again')

const save = name => new Promise((resolve, reject) => {
  git
    .silent(true)
    .raw(['status'], function (err, res) {
      if (err) {
        reject(err)
      } else {
        resolve('saved workspace to ' + name)
      }
    })

  /*
    git reset HEAD
    git checkout -b {name}
    git add -A
    git commit --no-verify -m "Saving workspace"
  */
})

const restore = name => new Promise((resolve, reject) => {
  /*
    git merge --no-commit --squash {name}
    git reset HEAD
  */

  resolve('restored workspace from ' + name)
})

module.exports = {
  save,
  restore
}
