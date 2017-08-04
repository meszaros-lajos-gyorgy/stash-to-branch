# stash-to-branch

A cli tool for git, which allows stashing and restoring changes to a branch

[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VPW29QJ4HBZ74)
[![Build Status](https://travis-ci.org/meszaros-lajos-gyorgy/stash-to-branch.svg?branch=master)](https://travis-ci.org/meszaros-lajos-gyorgy/stash-to-branch)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

### Installing

Install the tool globally

`npm i stash-to-branch -g`

### Saving

Make some changes to your project, then stash them

`stash-to-branch --save foo`

After this, the original branch is clean and `stashed-foo` holds the changes,
that you've made

Push the branch to origin

`git push origin stashed-foo`

### Restoration

Make sure, that the stashed branch is available locally by pulling it from origin

`git fetch`

`git checkout stashed-foo`

`git pull origin stashed-foo`

Go to any branch, where you want to re-apply the changes from a stash and do a restore

`stash-to-branch --restore foo`

After this, the changes from `stashed-foo` are applied to your branch and you are
ready to continue working with your code

Feel free to delete `stashed-foo` from local and remote, when you no longer need it

## Arguments
  
**--save <name>** or **-s <name>** or **--stash <name>**

> Saves the local changes of the current branch to "stashed-<name>". The "stashed-"
prefix can be overriden by the --prefix argument.

**--restore <name>** or **-r <name>** or **--apply <name>**

> Applies the changes of "stashed-<name>" to the current branch and prepares
them for staging. No commit is being done on the current branch. The "stashed-"
prefix can be overriden by the --prefix argument.

**--list** or **-l**

> List all the available branches, which start with the default prefix
(default = "stashed-"). Use the --prefix or -p argument to redefine the prefix 

**--prefix <prefix>** or **-p <prefix>**

> Change the default "stashed-" prefix for branch names to something else

## Licence

MIT
