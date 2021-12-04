function changeTexts() {
var label1 = document.getElementById('mainHeading');
label1.innerHTML = "Hi";
}

function changeBack(){
  var label1 = document.getElementById('mainHeading');
  label1.innerHTML = "Hello";
}

function addLabel() {
  var newDef1 = document.createElement('td');
  var newLabel1 = document.createElement('label');
  newLabel1.innerHTML = "Hello There";
  //var newText1 = document.createTextNode("Water");
  var exRow1 = document.getElementById('secondRow');

  newDef1.appendChild(newLabel1);
  exRow1.appendChild(newDef1);
}
