var express = require('express');
var app = express();

// development time route
app.get('/api/hello', function(request,response) {
    return response.status(200).send({"hello":"world"})
});

// static file handling
app.use(express.static(__dirname + '/client/app'));

// hook to initialize the dynamic route at runtime
app.post('/api/dynamic', function(req,res) {
    var dynamicController = require('./controllers/RuntimeController');
    dynamicController.init(app);
    res.status(200).send();
});

app.listen(3000);
