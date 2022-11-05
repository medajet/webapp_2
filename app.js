let express = require('express');
let app = express();
let bodyParser = require('body-parser');
require('./public/config');
let query = require('./public/query');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.get('/api/getUsers', query.getUsers);
app.post('/api/addUser', query.addUser);
app.delete('/api/deleteUser/:id', query.deleteUser);
app.put('/api/updateUser/:id', query.updateUser);
app.use('/', function(req, res) {
  res.json('');
});

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

app.listen(8080, function() {
    console.log('Listening on port ' + 8080);
});