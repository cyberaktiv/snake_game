/**
 * Game field
 */
var Field = function(){

    var self = this;

    var field = "#field";
    var fieldBlock = "field_block";
    var fieldClear = "field_clear";
    var field_fill = "field_fill";

    var widthInBlocks = 30;
    var heightInBlocks = 30;
    var blockWidth = 15;
    var blockHeight = 15;

    /**
     * getter - width of field (count blocks)
     * @returns {number}
     */
    this.width = function() {
        return widthInBlocks;
    };

    /**
     * getter - width of field (count blocks)
     * @returns {number}
     */
    this.height = function() {
        return heightInBlocks;
    };

    /**
     * filling the block with color
     * @param number - number block on field
     * @param color - string HTML Hex color
     */
    this.fillBlock = function(number, color) {
        $("#block_"+number).css("background-color", color);
    };

    /**
     * show field
     */
    this.create = function() {
        initBlocks();
    };

    /**
     * init all blocks of field
     */
    var initBlocks = function() {

        var countBlocks = widthInBlocks * heightInBlocks;
        for(var i = 1; i <= countBlocks; i++) {

            $('<div>', {
                class: fieldBlock,
                width: blockWidth,
                height: blockHeight,
                id: ['block_'+ i]
            }).appendTo(field);

            if(i % widthInBlocks === 0) {
                $('<div>', {
                    class: fieldClear
                }).appendTo(field);
            }
        }
    };
};