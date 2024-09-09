


gsap.registerPlugin(ScrollTrigger);


const images = document.querySelectorAll('.image-content1 img');



      images.forEach((image) => {
        gsap.to(image, {
          scale: 1.1,
          delay: 3,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: image,
            start: "top 75%",
            end: "top 50%",
            scrub: 2,
            toggleActions: "play none none none",
          },
        });
      });





      const textContentElements = document.querySelectorAll('.textt-content1');

     
      textContentElements.forEach((element) => {
        gsap.from(element, {
          y: 50,

          opacity: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element, 
            start: 'top 100%', 
            end: 'bottom 20%', 
            scrub: 1, 
            markers:false , 
          },
        });
      })
 



gsap.to('.waves', {



xPercent: 100,         
repeat: -1,             
duration: 20,           
ease: 'linear',         
modifiers: {
    xPercent: gsap.utils.wrap(-100, 0) 
}
})








const links = document.querySelectorAll('.footer-nav a');


links.forEach(link => {

  const halfCircle = document.createElement('div');
  halfCircle.classList.add('half-circle');
  
 
  link.parentElement.style.position = 'relative';
  link.parentElement.appendChild(halfCircle);


  link.addEventListener('mouseenter', () => {
    gsap.to(halfCircle, {
      width: '20px', 
      duration: 0.3, 
      ease: 'power2.out',
    });
  });

 
  link.addEventListener('mouseleave', () => {
    gsap.to(halfCircle, {
      width: '0px', 
      duration: 0.3, 
      ease: 'power2.in',
    });
  });
});



var tl = gsap.timeline()

tl.from(".textt-content1",{
    y:40 , 
    delay:1 , 
    duration:1.5,
    opacity: 0,
    stagger:0.8
})


const title = new SplitType('.heading-text');



gsap.to('.heading-text .char', {
  
  y: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.heading-text',
    start: 'top 90%',
    // end: 'bottom 25%', 
    scrub:true , 
    toggleActions: 'play play play play',
    markers: false, 
  },
});




const title3 = new SplitType('.heading-textt ', { types: 'chars' });


gsap.to('.heading-textt .char', {
  
  y: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.heading-textt',
    start: 'top 90%',
  
    scrub:true , 
    toggleActions: 'play play play play',
    markers: false, 
  },
});





const title2 = new SplitType('.chaising-caroll-heading');

gsap.to('.chaising-caroll-heading .char',{
  
  y: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.chaising-caroll-heading .char',
    start: 'top 100%',
    end: 'bottom 55%', 
    scrub:true , 
    toggleActions: 'play play play play',
    markers: false, 

  }, 
});




const title4 = new SplitType('.heading-bottom-left');

gsap.to('.heading-bottom-left .char',{
  
  y: 0,
  stagger: 0.1,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.heading-bottom-left .char',
    start: 'top 90%',
    end: 'bottom 25%', 
    scrub:true , 
    toggleActions: 'play play play play',
   

  }, 
});






gsap.registerPlugin(ScrollTrigger) ; 

var tl = gsap.timeline({scrollTrigger:{
  trigger:'img-container', 
  start:'top 50%',
  end:'bottom top',
  markers:true , 
  toggleActions: "restart none reverse reset"
}})
.from(".imgS", {
  opacity: 0, 
  x: 1800, 
  duration: 1
},0)









gsap.to('.home-page', {
  backgroundColor: 'black',
  color: 'white',
  scrollTrigger: {
    trigger: '.home-page',
    start: 'top top',
    end: '+=80%', 
    scrub: true,
    // pin: true, 
    // pinSpacing: false,   
  }
});



gsap.to('.header', {
  backgroundColor: 'white',
  color: 'black',
  scrollTrigger: {
    trigger: '.header',
    start: 'top top',
    end: '+=80%', 
    scrub: true,
    // pin: true, 
    // pinSpacing: false,   
  }
});

