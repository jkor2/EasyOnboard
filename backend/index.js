const express = require("express")
const connectDB = require('./config/db')
const app = express()
const bodyParser = require('body-parser');

// Connect to DB 
connectDB()

app.use(bodyParser.json());
app.use(express.json({ extended: false }))


// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/user', require('./routes/employee'))

const PORT = 5000

app.listen(PORT, () => {
    console.log("Server running on ", PORT)
})