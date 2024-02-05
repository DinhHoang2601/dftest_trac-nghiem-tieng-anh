// ======= Menu Toggle =======
let toggle = document.querySelector(".toggle");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main");
let topbar = document.querySelector(".topbar");

toggle.onclick = function () {
  sidebar.classList.toggle("active");
  main.classList.toggle("active");
  topbar.classList.toggle("active");
};
// ===========================
