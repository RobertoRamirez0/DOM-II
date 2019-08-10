// Selectors
let bodyAll = document.querySelector("body");
let mainNav = document.querySelector(".nav-container");
let logo = document.querySelector(".logo-heading");
let navItems = document.querySelectorAll(".nav-link");
let image = document.querySelectorAll("img");
let button = document.querySelectorAll(".btn");
let header = document.querySelectorAll(".intro-one");
let contentOne = document.querySelectorAll(".content-one");

// Init Animations
TweenMax.from(logo, 0.5, {opacity: 1, y: 200});
TweenMax.staggerFrom(navItems, 0.5, {opacity:0, y:200, delay:0.5}, 0.2);
TweenMax.staggerFrom(header, 0.5, {opacity:0, y:200, delay: 0.5}, 0.2);
TweenMax.staggerFrom(contentOne, 0.5, {opacity:0, y:200, delay: 0.8}, 0.2);
TweenMax.from(".image-two", 0.8, {opacity:0, y:200, delay: 1});

//Events
bodyAll.addEventListener('mouseover', () =>{
  mainNav.style.backgroundColor = 'white';
})
