var list = document.getElementById("sideList");

function showMenu() {
    list.classList.toggle("hide-list");
}

var artShown = 1;
var hideBtn = document.getElementById('hideBtn')
function hideArt() {
  var unnecessary = document.getElementsByClassName("unc");
  var i;
  if (artShown=='1') {
    for (i = 0; i < unnecessary.length; i++) {
        unnecessary[i].style.display = "none";
        artShown = 0;
        hideBtn.innerHTML = "Show non essential articles"
    }
  } else {
    for (i = 0; i < unnecessary.length; i++) {
        unnecessary[i].style.removeProperty('display');
        artShown = 1;
        hideBtn.innerHTML = "Hide non essential articles"
    }
    }
}