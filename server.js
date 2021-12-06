const express = require('express')
const path = require('path')
const app = express()
//const port = 3000
const port = 8080

app.get('/', (_, res) => res.sendFile(path.join(__dirname, 'index.html')))
//app.use(express.static(__dirname + '/public'));


app.listen(port, () => console.log(`Listening on port ${port}...`))
//app.listen(process.env.PORT || 8080);
