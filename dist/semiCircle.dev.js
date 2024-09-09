"use strict";

var container = document.querySelector('.heading-imgg');
var totalSemicircles = 650;
var semicircleWidth = 20;
var semicircleHeight = 40;
var columns = Math.ceil(Math.sqrt(totalSemicircles));
var rotationAngles = new Array(totalSemicircles).fill(0);

var _loop = function _loop(i) {
  var semiCircle = document.createElement('div');
  semiCircle.classList.add('semi-circle');
  var xPos = i % columns * (semicircleWidth + 30);
  var yPos = Math.floor(i / columns) * (semicircleHeight + 50);
  semiCircle.style.left = "".concat(xPos, "px");
  semiCircle.style.top = "".concat(yPos, "px");

  if (i % 2 === 0) {
    semiCircle.style.transform = 'rotate(0deg)';
  } else {
    semiCircle.style.transform = 'rotate(180deg)';
  }

  semiCircle.addEventListener('mouseenter', function () {
    rotationAngles[i] += 180;
    semiCircle.style.transition = 'transform 0.3s ease-in-out';
    semiCircle.style.transform = "rotate(".concat(rotationAngles[i], "deg)");
  });
  container.appendChild(semiCircle);
};

for (var i = 0; i < totalSemicircles; i++) {
  _loop(i);
} // const heading = document.querySelector('.heading-img');
// const totalSemi = 650;
// const semiWidth = 20;
// const semiHeight = 40;
// const column = Math.ceil(Math.sqrt(totalSemicircles)); 
// const rotationAngle = new Array(totalSemicircles).fill(0);
// for (let i = 0; i < totalSemicircles; i++) {
//   const semiCircle = document.createElement('div');
//   semiCircle.classList.add('semi-circle');
//   const xPos = (i % columns) * (semicircleWidth + 30);
//   const yPos = Math.floor(i / columns) * (semicircleHeight + 50);
//   semiCircle.style.left = `${xPos}px`;
//   semiCircle.style.top = `${yPos}px`;
//   if (i % 2 === 0) {
//     semiCircle.style.transform = 'rotate(0deg)';
//   } else {
//     semiCircle.style.transform = 'rotate(180deg)'; 
//   }
//   semiCircle.addEventListener('mouseenter', function() {
//     rotationAngles[i] += 180;
//     semiCircle.style.transition = 'transform 0.3s ease-in-out';
//     semiCircle.style.transform = `rotate(${rotationAngles[i]}deg)`; 
//   });
//   container.appendChild(semiCircle);
// }