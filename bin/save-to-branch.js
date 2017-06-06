#!/usr/bin/env node

const path = require('path')
const minimist = require('minimist')

const {save, restore} = require(path.join(__dirname, '../src/index'))

const args = minimist(process.argv.slice(2), {
  alias: {
    s: 'save',
    r: 'restore',
    p: 'prefix'
  },
  string: [
    'save', 'restore', 'prefix'
  ],
  default: {
    prefix: 'workspace-'
  }
})

if(args.save && args.restore){
  console.error('Ambiguity: --save and --restore both specified')
  process.exit(1)
}

if(!args.save && !args.restore){
  console.error(`
Usage:

  workspace [arguments]

Arguments:

  -s <name>
  --save <name>

    save changes of current branch to "workspace-<name>"
  
  -r <name>
  --restore <name>

    apply changes to current branch from "workspace-<name>"
  
  -p <prefix>
  --prefix <prefix>

    optional, change prefixes of generated branch names (default = "workspace-")
  `)
  process.exit(1)
}

if(args.save){
  save(args.prefix + args.save)
    .then(msg => {
      console.log(msg)
    })
    .catch(e => {
      console.error(e.message)
      process.exit(1)
    })
}

if(args.restore){
  restore(args.prefix + args.restore)
    .then(msg => {
      console.log(msg)
    })
    .catch(e => {
      console.error(e.message)
      process.exit(1)
    })
}
