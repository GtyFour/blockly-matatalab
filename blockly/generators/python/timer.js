'use strict';

goog.provide('Blockly.Python.timer');

goog.require('Blockly.Python');


// If any new block imports any library, add that library name here.
Blockly.Python.addReservedWords('timer');

Blockly.Python['timer_wait'] = function(block) {
    var number_second = block.getFieldValue('SECOND');
    // TODO: Assemble Python into code variable.‘
    var sec = "";
    switch (number_second) {
        case "1":
            sec = 0.8;
            break;
        case "2":
            sec = 1.6;
            break;
        case "3":
            sec = 2.4;
            break;
        case "4":
            sec = 3.2;
            break;
        case "5":
            sec = 4;
            break;
        case "6":
            sec = 4.8;
            break;
        default:
            sec = 0;
    }
    var code = 'controller.timer.sleep(' + sec + ')\n';
    return code;
};

Blockly.Python['timer_wait_ms'] = function(block) {
    var number_mstimes = block.getFieldValue('MSTIMES');
    // TODO: Assemble Python into code variable.
    var sec = number_mstimes;

    var code = 'controller.timer.sleep(' + sec + ')\n';
    return code;
};

Blockly.Python['timer_wait_ms_input'] = function(block) {
    var value_mstimes = Blockly.Python.valueToCode(block, 'MSTIMES', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var sec = '( ' + value_mstimes + ' / 1000.000 )';
    var code = 'controller.timer.sleep(' + sec + ')\n';
    return code;
};

Blockly.Python['main_block'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = '';
    return code;
};