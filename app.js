const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userCheck = require('./user_check')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const checkedName = userCheck(req.body)
  if (checkedName) {
    res.render('welcome', { checkedName })
  } else {
    res.render('index',)
  }

})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})