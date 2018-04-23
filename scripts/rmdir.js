const fs = require('fs')
const util = require('util')
const chalk = require('chalk')

module.exports = async (path) => {
  const files = await util.promisify(fs.readdir)(path)
  files.map(async file => {
    const pathfile = `${path}/${file}`
    fs.statSync(pathfile, (error, stat) => {
      if (error) throw error

      if(stat.isFile()) {
        fs.unlinkSync(pathfile)
      }

    })
  })
  console.log(chalk.green(`clear ${path} successfully 😊 !`))
}
