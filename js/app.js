"use strict";

var app = null;
$(document).ready(function() {
    app = new App(); // init  
});

var App = function() {

	var field = new Field();
    field.create();

    var snake = new Snake(field, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    snake.create();

    var kl = new KeyboardListener();
    kl.initMoveEventKey({
        'top'	: snake.goTop,
        'bottom': snake.goBottom,
        'left'	: snake.goLeft,
        'right'	: snake.goRight
    });
    kl.start();
};