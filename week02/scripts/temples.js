const yearSpan = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

yearSpan.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});
