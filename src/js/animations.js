import { gsap } from "gsap";

//Set TimelineMax variable
let tl = gsap.timeline();

//Set element variables
const sideNavIcons = document.querySelectorAll("#sideNav i");

console.log(sideNavIcons);

sideNavIcons.forEach((icon) => {
  tl.fromTo(
    icon,
    0.5,
    { x: -60, opacity: 0 },
    { x: 0, opacity: 1, ease: "back.out(1.7)" },
    "-=0.2"
  );
});

tl.delay(1);

export default tl;
