var emaFront = angular.module("emaFront",[]);

emaFront.controller("EmaCtrl",['$http', function($http){
    var app = this;
    console.log('init');


    app.register = function(){
        document.getElementById('content').src = 'http://' + window.location.hostname + ':9222/';
        console.log(document.getElementById('content'));
    };

    app.transferAuthorship = function(){
        document.getElementById('content').src = 'http://' + window.location.hostname + ':9333/transferFileForm.html';
        console.log(document.getElementById('content'));
    };

    app.addAudio = function(){
        document.getElementById('content').src = 'http://' + window.location.hostname + ':9333/uploadFileForm.html';
        console.log(document.getElementById('content'));
    };

    app.title = function(){
        document.getElementById('content').src = 'main.html';
        console.log(document.getElementById('content'));
    }

}]);