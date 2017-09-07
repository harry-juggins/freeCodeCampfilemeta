// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
app.use(express.static('public'));
app.use(bodyParser.json());


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/", upload.single('upl'), function(req, res) {
  var file = req.file
  res.json({"size": file['size']})
})


app.post

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
