function test(){
  alert("Holi");
}

function viewSetup(){
  document.getElementById("conainer1").style.display = "";  
}

function disscardEvent(){
  var parent = document.getElementById("section-conainer");
  var child = document.getElementById("request-conainer");
 
  parent.removeChild(child);
}