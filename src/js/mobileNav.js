const mobileNavIcon = document.querySelector("#menu-btn");
const closeBtn = document.querySelector(".fa-times");

const mobileMenu = document.querySelector("#mobile-menu");
const menuItems = document.querySelectorAll(".mobile-nav-item");

mobileNavIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Menu Item Clicked");
    mobileMenu.classList.remove("active");
  });
});

export { mobileNavIcon, closeBtn, menuItems };
