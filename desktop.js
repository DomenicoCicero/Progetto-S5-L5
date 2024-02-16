window.onscroll = () => {
  scrollFunction();
};

const navbar = document.querySelector("nav");
const sectionHeader = document.querySelector(".section-header");
const sectionHeaderOffset = sectionHeader.offsetTop;
const btnNav = document.querySelector("nav button");

console.log(sectionHeaderOffset);

const scrollFunction = () => {
  if (window.scrollY >= sectionHeaderOffset) {
    navbar.classList.add("fixed");
    navbar.style = "background-color: white; width: 100%";
    btnNav.style = "background-color: green";
    btnNav.style.border = "none";
  } else {
    navbar.classList.remove("fixed");
    navbar.style = "background-color: #ffc017;";
    btnNav.style = "background-color: black";
  }
};
