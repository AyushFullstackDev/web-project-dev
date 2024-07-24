// open and close navbar 
document.getElementById("menu-icon").onclick = function () {
  document.querySelector(".navbar").classList.toggle("active");
};

// JavaScript to close the navbar when clicking outside
document.addEventListener("click", function (event) {
  var isClickInsideNavbar = document
    .querySelector(".navbar")
    .contains(event.target);
  var isClickInsideMenuIcon = document
    .querySelector("#menu-icon")
    .contains(event.target);
  document.addEventListener("click", function (event) {
    const isClickInsideNavbar = event.target.closest(".navbar") !== null;
    const isClickInsideMenuIcon =
      event.target.closest("#menu-icon") !== null;

    if (!isClickInsideNavbar && !isClickInsideMenuIcon) {
      document.querySelector(".navbar").classList.remove("active");
    }
  });
});

