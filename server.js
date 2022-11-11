require('dotenv').config()
require('./db/connect')
const app = require('./app')
const PORT = process.env.PORT




app.listen(PORT, () => {
    console.log(`The server is running at http://localhost:${PORT}`);
})