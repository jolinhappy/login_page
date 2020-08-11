const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const userCheck = require('./user_check')
const session = require("express-session")

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({
  secret: 'keyboard cat',
  // resave和saveUnitrialized目前不需要(設定store時需要)
  // resave: false,
  // saveUninitialized: true,
  //以下為到期時間三分鐘
  cookie: {
    maxAge: 3 * 60 * 1000
  }
}))

app.get('/', (req, res) => {
  const checkedName = (req.session.userName)
  console.log(req.session)
  if (checkedName) {
    res.render('welcome', { checkedName })
  } else { res.render('index') }
})

app.post('/', (req, res) => {
  const checkedName = userCheck(req.body)
  if (checkedName) {
    //增加名為userName的sessionID
    req.session.userName = checkedName
    res.render('welcome', { checkedName })
  } else {
    const error = 'your email or password is wrong!'
    res.render('index', { error })
  }
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})