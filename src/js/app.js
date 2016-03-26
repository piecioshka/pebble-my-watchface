'use strict';

var makeRequest = require('xhr').makeRequest;

// Listen for when the watchface is opened
Pebble.addEventListener('ready', function (e) {
    console.log('PebbleKit JS ready!');

    makeRequest('http://getmedia.redefine.pl/ipservice?ua=tv_lg', 'GET', function (response) {
        var object = JSON.parse(response);

        Pebble.sendAppMessage({
            IP: object.resp.ip
        }, function (evt) {
            console.log('OK', evt);
        }, function (evt) {
            console.log('ERROR', evt);
        });
    });
});

// Listen for when an AppMessage is received
Pebble.addEventListener('appmessage', function (evt) {
    console.log('AppMessage received!', evt);
});
