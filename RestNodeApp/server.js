/**
 * This is the main file of the application. Run it with the
 * `node index.js` command from your terminal
 *
 * Remember to run `npm install` in the project folder, so 
 * all the required libraries are downloaded and installed.
 */ 


var app = require('./app');

app.set('port', process.env.PORT || 5678);

var server = app.listen(app.get('port'), function() {
//  debug('Express server listening on port ' + server.address().port);
});
console.log('Your application is running on http://localhost:5678');