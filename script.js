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


function watchForHover() {
  // lastTouchTime is used for ignoring emulated mousemove events
  // that are fired after touchstart events. Since they're
  // indistinguishable from real events, we use the fact that they're
  // fired a few milliseconds after touchstart to filter them.
  let lastTouchTime = 0

  function enableHover() {
    if (new Date() - lastTouchTime < 500) return
    document.body.classList.add('hasHover')
  }

  function disableHover() {
    document.body.classList.remove('hasHover')
  }

  function updateLastTouchTime() {
    lastTouchTime = new Date()
  }

  document.addEventListener('touchstart', updateLastTouchTime, true)
  document.addEventListener('touchstart', disableHover, true)
  document.addEventListener('mousemove', enableHover, true)

  enableHover()
}

watchForHover()