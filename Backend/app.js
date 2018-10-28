var express      = require('express');
var app          = express();
var path		 = require('path');
var clientDir	 = path.join(__dirname, './../Frontend');

var bodyParser   = require('body-parser');


app.use(bodyParser.urlencoded({
	extended:true
}));


app.get('/', function(req, res){
    return res.status(201).send({
        message:'works'
    });
});

app.use(bodyParser.json());
app.use(express.static(clientDir));
app.listen(3000);