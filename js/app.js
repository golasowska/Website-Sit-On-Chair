document.addEventListener("DOMContentLoaded", function(e) {


    var ofirmie = document.querySelector(".nav-item a");
    var submenu = document.querySelector(".sub-menu");
    var navPointer = document.querySelector(".nav-pointer");


ofirmie.addEventListener("mouseover", showSubmenu)

function showSubmenu(e) {

  // console.log("dzialaaaa");
  // console.log(ofirmie);
  // console.log(submenu);
  // console.log(navPointer);

  submenu.style.display = "block";
  navPointer.style.display = "block";
}

ofirmie.addEventListener("mouseout", hideSubmenu)

function hideSubmenu(e) {

  submenu.style.display = "none";
  navPointer.style.display = "none";
}

var pictures = document.querySelectorAll(".offer .container .row .col");
// console.log(pictures);

pictures.forEach(function(elem) {
  elem.addEventListener("mouseover", hideName);
});

function hideName(e) {
  this.children[0].style.display = "none";
}

pictures.forEach(function(elem) {
  elem.addEventListener("mouseout", showName);
});

function showName(e) {
  this.children[0].style.display = "block";
}

var next = document.querySelector('.left-arrow');
var prev = document.querySelector('.right-arrow');
var gallery = document.querySelectorAll('.gallery img');

var i = 0;

console.log(next);
console.log(prev);
console.log(i);
console.log(gallery);

gallery[i].classList.add("visible");

next.addEventListener("click", showNext);

prev.addEventListener("click", showPrev);

function showNext(event) {

console.log("dziala");
console.log(gallery[i]);
  gallery[i].classList.remove("visible");
  i++;
  if (i > (gallery.length - 1)) {
  i = 0;}
  gallery[i].classList.add("visible");

}

function showPrev(event) {
  gallery[i].classList.remove("visible");
  i--;
  if (i < 0) {
    i = (gallery.length) - 1};
  gallery[i].classList.add("visible");
}






});
