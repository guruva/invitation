const express = require('express')
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index');
})

app.listen(process.env.PORT || 3001, function () {
  console.log('Example app listening on port 3001!')
})