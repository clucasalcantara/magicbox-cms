const chalk = require('chalk')
const app = require('express')()
const PORT = process.env.SERVER_PORT || 3000

app.use(require('body-parser').urlencoded({extended: true}))
app.use(require('body-parser').json())
app.disable('x-powered-by')

export default function express () {
  return new Promise(resolve => {
    app.listen(PORT, err => {
      if (err) {
        console.log(chalk.red(err.message)) // TODO log system
        process.exit(0)
      }
      resolve(app)
    })
  })
}
