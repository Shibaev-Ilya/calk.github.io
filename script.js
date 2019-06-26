'use strict';

(function () {

var buttonCalc = document.querySelectorAll('.btnCalc');
var ent = document.querySelector('.ent');
var result = document.querySelector('.result');
var drop = document.querySelector('.forDrop');
var wrapCalc = document.querySelector('.wrapCalc');

buttonCalc.forEach(function(item, i, buttonCalc) {
    item.addEventListener('click', function(){
        if(item.value == 'c') {
            ent.value = "";
        } else if(item.value == '000') {
            result.value = eval(ent.value);
            ent.value = "";

        } else if(item.value == 'del') {
            ent.value = ent.value.substring(0, ent.value.length - 1);
        } else {
            ent.value += item.value;
        };
    })
});

drop.addEventListener('mousedown', function(evt) {
    evt.preventDefault();

    var startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    var onMouseMove = function(moveEvt) {
        moveEvt.preventDefault();

        var shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        wrapCalc.style.top = (wrapCalc.offsetTop - shift.y) + 'px';
        wrapCalc.style.left = (wrapCalc.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function(moveEvt) {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    
});
})();