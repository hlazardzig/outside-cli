const minimist = require('minimist')

module.exports = () => {
  const args = minimist(process.argv.slice(2))  // delete first 2 arguments (interpreter + filename)
  console.log(args)
}

