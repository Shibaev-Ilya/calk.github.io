var buttonCalc = document.querySelectorAll('.btnCalc');
var ent = document.querySelector('.ent');
var result = document.querySelector('.result');

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

