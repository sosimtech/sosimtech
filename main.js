document.getElementById("mobileMenuButton").addEventListener("click", show);

function show() {
  var mobMenu = document.getElementById("mobile-menu");
  var menuButton = document.getElementById("mobileMenuButton");
  if (mobMenu.style.display === "block") {
    mobMenu.style.display = "none";
    menuButton.style.backgroundColor = "transparent";
  } else {
    mobMenu.style.display = "block";
    menuButton.style.backgroundColor = "rgb(29 78 216)";
  }
}
window.addEventListener("click", function (e) {
  var mobMenu = document.getElementById("mobile-menu");
  var menuButton = document.getElementById("mobileMenuButton");
  if (!mobMenu.contains(e.target) && !menuButton.contains(e.target)) {
    mobMenu.style.display = "none";
    menuButton.style.backgroundColor = "transparent";
  }
});
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  var mobMenu = document.getElementById("mobile-menu");
  var menuButton = document.getElementById("mobileMenuButton");
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    mobMenu.style.display = "none";
    menuButton.style.backgroundColor = "transparent";
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
