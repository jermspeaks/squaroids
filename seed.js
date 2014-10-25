var mongoose = require('mongoose');
var AsteroidModel = require('mongoose').model('Asteroid');
mongoose.connect('mongodb://localhost/asteroids')
var dir = './seeds';
var db = mongoose.connection;

// Show connection error if there is one
db.on('error', console.error.bind(console, 'Database Connection Error:'));

// If we successfully connected to mongo
db.once('open', function callback() {

  var fs = require('fs');

  fs.readdir(dir, function(err, list){
    if(err) {
      console.log('Error: ' + err);
    }

    list.forEach(function(file){
      var collection_name = file.split(".")[0];
      console.log(collection_name);
      var parsedJSON = require(dir + '/' + file);

      for(var i = 0; i < parsedJSON.length; i++) {
        db.collection(collection_name).insert(parsedJSON[i], function(err, records){
          AsteroidModel.create(records);
        })
      }

    });
  });

});

