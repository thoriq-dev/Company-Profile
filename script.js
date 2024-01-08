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

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
  scrollOffset: 50,
});

const toast = document.querySelectorAll(".toasting");
M.Toasting.init(toast);
