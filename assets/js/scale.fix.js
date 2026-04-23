// Responsive layout scale fix for jekyll-theme-minimal
var scaleEl = document.querySelector('.wrapper');
if (scaleEl) {
  var width = window.innerWidth || document.documentElement.clientWidth;
  if (width <= 768) {
    scaleEl.style.width = '90%';
  }
}
