const menu = document.querySelector(".nav-menu-mobile");
const menuItems = document.querySelectorAll(".nav-item");
const hamburger= document.querySelector(".icon");
const closeIcon= document.querySelector(".close");
const menuIcon = document.querySelector(".burger");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);


menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
);

$(document).ready(function () {
  navBarMobile();//run when page first loads
});

$(window).resize(function () {
  navBarMobile();//run on every window resize
});

function navBarMobile (){
  var screenWidthBig = window.matchMedia("(min-width: 771px)");
  var screenWidthSmall = window.matchMedia("(max-width: 770px)");
  if (screenWidthBig.matches) {
    $("ul").removeClass("nav-menu-mobile");
  }
  else if (screenWidthSmall.matches) {
    $(".nav-menu").addClass("nav-menu-mobile")
  }
}