var express = require('express');
var path = require('path')


var app = new express();
var port = 3000;


app.get('/home', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/home.html'));
});

app.get('/about', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/about.html'));
});

app.get('/contact', (req, res) => {


    res.sendFile(path.join(__dirname + '/component/contact.html'));
});

app.listen(port, function() {
console.log('hello from port:', port)
});

// app.use((req, res, next) => {
//         const err = new Error("Unauthorized")
//         err.status = 401
//         next(err)
// });

// app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         error: {
//             status: err.status || 500,
//             message: err.message
//         }
//     })
// });

