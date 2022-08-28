const menu = document.querySelector(".nav-menu");
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
)