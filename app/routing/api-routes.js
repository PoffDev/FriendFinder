//var load data
var friends = require('../data/friends.js');
var path = require('path');


// ROUTING

module.exports = function(app){

// API GET Requests 
    
    app.get('/api/friends', function(req, res){

        res.json(friends);

    });

// API Requests
    
    app.post('/api/friends', function(req, res){

        var counterArray = [];
        var counter = 0
        var user = req.body;
        var bestFriend = {};

        for (var i = 0; i < friends.length; i++) {

            for (var j = 0; j < user.scores.length; j++) {

                counter += Math.abs(user.scores[i]) - friends[i].scores[j];

            };

            counterArray.push(counter);
            console.log(counter);
            counter = 0;

        };

        console.log(counterArray);

        var closestMatch = Math.min.apply(Math, counterArray);

        console.log(closestMatch);

        for (var i = 0; i < friends.length; i++) {

            for (var j = 0; j < user.scores.length; j++) {
                
                counter += Math.abs(user.scores[j] - friends[i].scores[j])

            };

            if (counter === closestMatch) {

                bestFriend = friends[i];

            }

            counter = 0;

        };

        friends.push(req.body);
        res.json(bestFriend);

    });
}
