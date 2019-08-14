// Selectors
let bodyAll = document.querySelector(".body-all");
let mainNav = document.querySelector(".nav-container");
let logo = document.querySelector(".logo-heading");
let navItems = document.querySelectorAll(".nav-link");
let image = document.querySelectorAll("img");
let button = document.querySelectorAll(".btn");
let header = document.querySelectorAll(".intro-one");
let contentOne = document.querySelectorAll(".content-one");
let sectionOne = document.querySelector(".first-content");
let destinationSection = document.querySelectorAll(".destination");
let destinationBtn = document.querySelectorAll(".btn");

// Init Animations
TweenMax.from(logo, 0.5, {opacity: 0, y: 200});
TweenMax.staggerFrom(navItems, 0.5, {opacity:0, y:200, delay:0.5}, 0.2);
TweenMax.staggerFrom(header, 0.5, {opacity:0, y:200, delay: 0.5}, 0.2);
TweenMax.staggerFrom(contentOne, 0.5, {opacity:0, y:200, delay: 0.8}, 0.2);
TweenMax.from(".image-two", 0.8, {opacity:0, y:200, delay: 1});
// Event Setters
function zoomImg(event) {
  event.currentTarget.style.maxWidth = '110%';
}
function buttonBg(event) {
  event.stopPropagation();
  event.currentTarget.style.backgroundColor = 'black';
}
function destinationBg(event) {
  event.currentTarget.style.backgroundColor = 'blue';
}
//Events
image[1].addEventListener('mouseover', zoomImg);
image[2].addEventListener('mouseover', zoomImg);
sectionOne.addEventListener('dblclick', (event) => {
  event.currentTarget.style.backgroundColor = 'green'
});
destinationBtn[0].addEventListener('click', buttonBg);
destinationBtn[1].addEventListener('click', buttonBg);
destinationBtn[2].addEventListener('click', buttonBg);
destinationSection[0].addEventListener('click', destinationBg);
destinationSection[1].addEventListener('click', destinationBg);
destinationSection[2].addEventListener('click', destinationBg);
