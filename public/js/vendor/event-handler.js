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

function showMenu(){
  var shadow = document.getElementById("dark");
  var menu = document.getElementById("menu");
  
  $(shadow).fadeIn("fast");
  
  $(menu).animate({left: "+=340px"}, 300);
}

function hideMenu(){
  var shadow = document.getElementById("dark");
  var menu = document.getElementById("menu");
  
  $(menu).animate({left: "-=340px"}, 300);
  $(shadow).fadeOut("fast");
}