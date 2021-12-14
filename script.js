let list = document.getElementById("sideList");
function showMenu() {
    list.classList.toggle("hide-list");
}

let artShown = 1;
let hideBtn = document.getElementById('hideBtn')
function hideArt() {
  let unnecessary = document.getElementsByClassName("unc");
  let i;
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

function darkMode() {
  let moded = window.localStorage.getItem('light');
  switch (moded) {
    case "1":
      window.localStorage.setItem('light','0');
      document.getElementById('body').classList.remove('light');
      break;
    default:
      window.localStorage.setItem('light','1');
      document.getElementById('body').classList.toggle('light');
      break;
  }
}

function loadStorage() {
  let mode =  window.localStorage.getItem('light');
  if (mode==1) {
    document.getElementById('body').classList.add('light');
  } else {
    document.getElementById('body').classList.remove('light');
  }
}

loadStorage();

function foldSection(clicked_id) {
  let element = document.getElementById(clicked_id);
  element.classList.toggle("hidden");
}

function setFooterYear() {
  let today = new Date();
  let yr = today.getFullYear();
  document.querySelector('#year').innerHTML = yr;
}

setFooterYear();

// function lazyImagesFold() {
//   let images = document.querySelectorAll('.lazyload');
//   for (let i = 0;i < images.length;i++) {
//     let html = images[i].innerText;
//     let new_html = "<details>" + html + "</details>";
//     const text = "<summary>Display gif</summary>";
//     $(images[i]).wrap('<details></details>');
//   }
//   const details = document.querySelectorAll('details');
//   for (let i = 0;i < details.length;i++) {
//     let html = details[i].innerHTML;
//     let new_html = "<details>" + html + "</details>";
//     const text = "<summary>Display gif</summary>";
//     $(images[i]).wrap('<details></details>');
//   }
// }

// lazyImagesFold();