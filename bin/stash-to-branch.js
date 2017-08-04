#!/usr/bin/env node

const path = require('path')
const minimist = require('minimist')

const {save, restore, list} = require(path.join(__dirname, '../src/index'))

const args = minimist(process.argv.slice(2), {
  alias: {
    s: 'save',
    r: 'restore',
    p: 'prefix',
    l: 'list',
    stash: 'save',
    apply: 'restore'
  },
  string: [
    'save', 'restore', 'prefix'
  ],
  boolean: [
    'list'
  ],
  default: {
    prefix: 'stashed-'
  }
})

if(args.save && args.restore && !args.list){
  console.error('Ambiguity: --save and --restore are both specified')
  process.exit(1)
}

if(args.save && !args.restore && args.list){
  console.error('Ambiguity: --save and --list are both specified')
  process.exit(1)
}

if(!args.save && args.restore && args.list){
  console.error('Ambiguity: --restore and --list are both specified')
  process.exit(1)
}

if(args.save && args.restore && args.list){
  console.error('Ambiguity: --save, --restore and --list are all specified')
  process.exit(1)
}

// ---------

if(!args.save && !args.restore && !args.list){
  console.error(`
Usage:

  stash-to-branch [arguments]

Arguments:

  -s <name>
  --save <name>
  --stash <name>

    save changes of current branch to "stashed-<name>"
  
  -r <name>
  --restore <name>
  --apply <name>

    apply changes to current branch from "stashed-<name>"
  
  -l
  --list

    list all the available branches, which start with the default prefix (default = "stashed-")
    use the --prefix or -p argument to redefine the prefix
  
  -p <prefix>
  --prefix <prefix>

    optional, change prefixes of generated branch names (default = "stashed-")
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

if(args.list){
  list(args.prefix)
    .then(msg => {
      console.log(msg)
    })
    .catch(e => {
      console.error(e.message)
      process.exit(1)
    })
}
