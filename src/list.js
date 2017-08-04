const git = require('simple-git')()

const list = prefix => new Promise((resolve, reject) => {
  git
    .silent(true)
    .branch((err, res) => {
      if(err){
        reject(err)
      }else{
        const branches = res.all.filter(branch => branch.startsWith(prefix)).map(branch => ` - ${branch.replace(prefix, '')}`)
        resolve(`Number of stashed branches: ${branches.length}\n` + branches.join('\n'))
      }
    })
})

module.exports = list
