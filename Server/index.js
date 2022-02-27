const connectToMongo = require('./DB');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/Authroute'))

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})