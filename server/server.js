(function() {
    'use strict';

    var express = require('express');
        
    var app = express();
    app.configure(function() {
        app.use(express.bodyParser());
        app.use(express.methodOverride());
    });
    
    var firstNameList = ['Foo', 'Toto', 'Louis', 'Cartman', 'Luke', 'Zed', 'Superman', 'Batman', 'Someone First Name'],
        lastNameList = ['Bar', 'Titi', 'Someone Last Name', 'Kyle', 'Yoda', 'Lara', 'Moliku', 'Whateveryournameis']
    
    var randomNumber = function(maxNumber) {
        return Math.floor(Math.random() * maxNumber);
    };
    var randomInArray = function(array) {
        return array[randomNumber(array.length)];
    };
    
    var userList = [];
    for (var index = 0; index < 300; index++) {
        userList.push({
            id: randomNumber(1000),
            firstName: randomInArray(firstNameList),
            lastName: randomInArray(lastNameList)
        })
    }
    
    app.get('/data', function(req, res) {
        res.json(userList);
    });
    
    module.exports = app;
})();