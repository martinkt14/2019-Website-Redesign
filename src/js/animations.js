//Set TimelineMax variable
const tl = new TimelineMax();

//Set element variables
const sideNavIcons = document.querySelectorAll("#sideNav i");
const hero = document.querySelector("#hero");
const mainContent = document.querySelector("#main-content");
const footer = document.querySelector("footer");
const heroText = document.querySelector("#hero-flex-container");
const logo = document.querySelector("#hero-logo img");
const arrows = document.querySelector("#scroll-arrow i");

//Animations
tl.from(hero, 1.5, { y: "-99vh" });
tl.from(heroText, 1.5, { opacity: 0, ease: Power2.easeIn }, "-=0.8");

sideNavIcons.forEach(icon => {
    tl.fromTo(icon, 0.5, { x: -60 }, { x: 0, ease: Back.easeIn }, "-=0.2");
});

// tl.from(mainContent, 1, { display: "none", x: "100%", ease: Power2.easeIn });
tl.fromTo(arrows, 2, { opacity: 0 }, { opacity: 1 });
