const Dark = document.querySelector(".dark");
const Night = document.querySelector(".night");
const Light = document.querySelector(".light");
const Sidebar = document.querySelector(".sidebar");
Dark.addEventListener("click", () => {
  Sidebar.className = "sidebar";
});
Night.addEventListener("click", () => {
  Sidebar.className = "sidebar night";
});
Light.addEventListener("click", () => {
  Sidebar.className = "sidebar light";
});
console.log(Dark);
console.log(Night);
console.log(Light);
console.log(Sidebar);
