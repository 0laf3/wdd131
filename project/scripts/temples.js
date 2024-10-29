
function myFunction() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
function myFunction(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === "flex") {
        menu.style.display = "none"; // Hide the menu
    } else {
        menu.style.display = "flex"; // Show the menu
    }
}

document.getElementById('currentyear').textContent = new Date().getFullYear();

document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;
