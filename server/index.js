const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 4242;

app.use(cors())
app.use(bodyParser.json())

app.post('/api/login', (req, res) => {
  const data = req.body;

  if(data && data.userName && data.password && data.userName.includes('dev')) {
    res.json({status: 'OK'})
  } else {
    res.status(401).json({status: 'Fail'})
  }

})

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})
