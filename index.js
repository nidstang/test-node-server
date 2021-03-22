const express = require('express')
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());
app.use(fileUpload());

app.post('/file', (req, res) => {
    console.log(req.files.image.name);
    res.send({ name: req.files.image.name });
});

app.get('/user', (req, res) => {
    res.send({ name: 'OpenWebinars' });
});

app.post('/save', bodyParser.urlencoded({ extended: false }), (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.post('/save-json', bodyParser.json(), (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

// app.post('/save-encoded', bodyParser.urlencoded(), (req, res) => {
//     console.log(req.body);
//     res.send(req.body);
// });

app.get('/hello', (req, res) => {
    res.send('<h1>Hello world</h1>');
});

app.listen(port, () => {
    console.log('Listening at ' + port);
});
