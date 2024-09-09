const container = document.querySelector('.heading-imgg');
const totalSemicircles = 650;
const semicircleWidth = 20;
const semicircleHeight = 40;

const columns = Math.ceil(Math.sqrt(totalSemicircles)); 

const rotationAngles = new Array(totalSemicircles).fill(0);

for (let i = 0; i < totalSemicircles; i++) {
  const semiCircle = document.createElement('div');
  semiCircle.classList.add('semi-circle');

  const xPos = (i % columns) * (semicircleWidth + 30);
  const yPos = Math.floor(i / columns) * (semicircleHeight + 50);

  semiCircle.style.left = `${xPos}px`;
  semiCircle.style.top = `${yPos}px`;

  if (i % 2 === 0) {
    semiCircle.style.transform = 'rotate(0deg)';
  } else {
    semiCircle.style.transform = 'rotate(180deg)'; 
  }

  semiCircle.addEventListener('mouseenter', function() {
    rotationAngles[i] += 180;
    semiCircle.style.transition = 'transform 0.3s ease-in-out';
    semiCircle.style.transform = `rotate(${rotationAngles[i]}deg)`; 
  });

  container.appendChild(semiCircle);
}











// const heading = document.querySelector('.heading-img');
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




















