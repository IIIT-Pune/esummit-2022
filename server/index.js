const connectToMongo = require('./mongodb');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`Server started - http://localhost:${port}`)
})