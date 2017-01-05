var m;
var index = 0;
var pad;
function step(ui) {
    //console.log(index)
    if (ui) m[index].style.borderColor="";
    switch (+m[index].value) {
      case 1:  //ADD
        pad.value = 1*pad.value + (+m[+m[index + 1].value].value);
        index += 2;
        break;
      case 2:  //SUBTRACT
        pad.value = +pad.value - (+m[+m[index + 1].value].value);
        index += 2;
        break;
      case 3:  //READ
        pad.value = +m[+m[index + 1].value].value;
        index += 2;
        break;
      case 4:  //WRITE
        m[+m[index + 1].value].value = pad.value;
        index += 2;
        break;
      case 5:  //JUMP
        if (pad.value == 0) {
            index = +m[+index + 1].value;
        } else {
            index += 2;
        }
        break;
    }
    if (ui) m[index].style.borderColor="#5555ff";
    return m[index].value;
}

function compile(ui, source) {

    if (ui) m[index].style.borderColor="";
    index = 0;
    if (ui) m[index].style.borderColor="#5555ff";
//    var lines = document.getElementById("source").value.split('\n');
    var lines = source.split('\n');
    i = 0;
    for(var j = 0;j < lines.length; j++){
        var words = lines[j].split(' ');
        m[i*2].value = "";
        m[i*2 + 1].value = "";
        if (words[0].toUpperCase() == "SET") {
            m[words[1]].value = words[2];
        }
        if (words[0].toUpperCase() == "ADD") {
            m[i*2].value = 1;
            m[i*2 + 1].value = words[1];
            i++;
        }
        if (words[0].toUpperCase() == "SUB" || words[0].toUpperCase() == "SUBTRACT") {
            m[i*2].value = 2;
            m[i*2 + 1].value = words[1];
            i++;
        }
        if (words[0].toUpperCase() == "READ") {
            m[i*2].value = 3;
            m[i*2 + 1].value = words[1];
            i++;
        }
        if (words[0].toUpperCase() == "WRITE") {
            m[i*2].value = 4;
            m[i*2 + 1].value = words[1];
            i++;
        }
        if (words[0].toUpperCase() == "JUMP") {
            m[i*2].value = 5;
            m[i*2 + 1].value = words[1];
            i++;
        }
    }
    m[lines.length*2].value = "";
    m[lines.length*2 + 1].value = "";
}

function c5i(source) {
  m = new Array();
  for (i = 0; i < 100; i++) {
    m[i] = {};
    m[i].value = "";
  }
  index = 0;
  pad = {};
  pad.value = 0;
  compile(false, source);
  while(step(false)) {}
  return pad.value;
}