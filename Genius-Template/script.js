// onclick menuBar Button
let menuBtn = document.querySelector(".menu-bar");
let linksDiv = document.querySelector(".navbar .links");
menuBtn.addEventListener("click" , () =>{
      linksDiv.classList.toggle("mob-tab-shape");
});
// collapse buttons
let skillsBtn = document.querySelector(".options .collaspses .skills button");
let techBtn = document.querySelector(".options .tech button");
let ethicsBtn = document.querySelector(".options .ethics button");
let knowldgeBtn = document.querySelector(".options .knwoldge button");

skillsBtn.addEventListener("click" , () =>{
    skillsBtn.classList.toggle("collaspe-skills");
    skillsBtn.parentElement.classList.toggle("active");
});
techBtn.addEventListener("click" , () =>{
    techBtn.classList.toggle("collaspe-tech");
    techBtn.parentElement.classList.toggle("active");
});
ethicsBtn.addEventListener("click" , () =>{
    ethicsBtn.classList.toggle("collaspe-ethic");
    ethicsBtn.parentElement.classList.toggle("active");
});
knowldgeBtn.addEventListener("click" , () =>{
    knowldgeBtn.classList.toggle("collaspe-knwoldge");
    knowldgeBtn.parentElement.classList.toggle("active");
});
