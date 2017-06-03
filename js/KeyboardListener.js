/**
 * Listener of the keyboard on which can hang events.
 */
var KeyboardListener = function() {

    var KEY = {
        LEFT: 37,
        TOP: 38,
        RIGHT:39,
        BOTTOM: 40
    };

    var run = false;

    var top = null;
    var bottom = null;
    var right = null;
    var left = null;

    this.initMoveEventKey = function(events) {
        top = events.top;
        bottom = events.bottom;
        right = events.right;
        left = events.left;
    };

    this.start = function() {
        if(run) {
            return console.log("KeyboardListener is already running");
        }
        addEventListener("keydown", function(event) {
            switch(event.keyCode){
                case KEY.TOP:    top();    break;
                case KEY.LEFT:   left();   break;
                case KEY.BOTTOM: bottom(); break;
                case KEY.RIGHT:  right();  break;
            }
        });
    };
};