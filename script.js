const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 600,
  interval: 3000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);
