function test(){
  alert("Holi");
}

function viewSetup(){
  document.getElementById("conainer1").style.display = "";  
}

function hideSetup(){
  document.getElementById("conainer1").style.display = "none"; 
}

function disscardEvent(){
  var parent = document.getElementById("section-conainer");
  var child = document.getElementById("request-conainer");
 
  parent.removeChild(child);
}

function rating(rating){
  alert("Calificaste al usuario con " + rating + " estrellas.");
}