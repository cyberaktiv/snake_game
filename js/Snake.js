/**
 * Snake on game field
 * @param field - field on which it is located
 * @param arrayBlockNumbers - array of blocks in which there is a snake
 */
var Snake = function(field, arrayBlockNumbers) {

    var self = this;

    var positions = arrayBlockNumbers;
    var COLOR = {
        'head': "#008000",
        'body': "#A6E22E",
        'empty': '#fff'
    };

    /**
     * move snake to bottom side
     */
    this.goBottom = function() {
        goToBlock(positions[positions.length - 1] + field.width());
    };

    /**
     * move snake to top side
     */
    this.goTop = function() {
        goToBlock(positions[positions.length - 1] - field.width());
    };

    /**
     * move snake to left side
     */
    this.goLeft = function() {
        goToBlock(positions[positions.length - 1] - 1);
    };

    /**
     * move snake to right side
     */
    this.goRight = function() {
        goToBlock(positions[positions.length - 1] + 1);
    };

    /**
     * show snake in game field
     */
    this.create = function() {
        for(var i = 0; i < positions.length; i++){
            if(i === positions.length - 1)
                field.fillBlock(positions[i], COLOR.head);
            else
                field.fillBlock(positions[i], COLOR.body);
        }
    };

    /**
     * out of bounds handler
     * @param blockNum - block number where to go
     * @returns {number} correct block number
     */
    var rangeHandler = function(blockNum) {

        // right
        if(blockNum % field.width() === 1 && positionHead() % field.width() === 0) {
            return blockNum -= field.width();
        }

        // left
        if(blockNum % field.width() === 0 && positionHead() % field.width() === 1) {
            return blockNum += field.width();
        }

        // top
        if(blockNum < 0) {
            return blockNum += field.width() * field.height();
        }

        // bottom
        if(blockNum > field.width() * field.height()) {
            return blockNum = blockNum - field.width() * field.height();
        }
        return blockNum;
    };

    /**
     * current position snake head (number of element)
     * @returns {*}
     */
    var positionHead = function() {
        return positions[positions.length - 1];
    };

    /**
     * move snake to block number
     * @param blockNum - block number where to go
     */
    var goToBlock = function(blockNum) {

        var error = errorMove(blockNum);

        if(error.length > 0) {
            console.log(error);
        } else {
            blockNum = rangeHandler(blockNum);
            // remove first element of array (tail)
            field.fillBlock(positions.splice(0, 1), COLOR.empty);
            positions.push(blockNum);
            self.create(); // recreate in new place
        }
    };

    /**
     * error moving block
     * @param blockNum - block number where to go
     * @returns {string} error message or "" (if there is no error)
     */
    var errorMove = function(blockNum) {

        if(positions[positions.length - 2] - field.width() === blockNum)
            return "Going back right after the border (RIGHT)";

        if(positions[positions.length - 2] + field.width() === blockNum)
            return "Going back right after the border (LEFT)";

        if(positions[positions.length - 2] - field.width() * field.height() === blockNum)
            return "Going back right after the border (BOTTOM)";

        if(positions[positions.length - 2] + field.width() * field.height() === blockNum)
            return "Going back right after the border (TOP)";

        if(positions[positions.length - 2] === blockNum)
            return "returned on self";

        if(positions.indexOf(blockNum) >= 0)
            return "Bitten himself";

        return ""; // no error
    };
};