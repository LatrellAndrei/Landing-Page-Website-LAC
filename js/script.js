// for the navbar menu icon when click
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

// for auto typing
var typed = new Typed(".heading__2", {
  strings: ["Customers", "Business", "Teachers", "Students"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
