// Change navbar styles on scroll
let nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('window-scroll', window.scrollY > 0);
});


// show/hide faq answer
let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
  faq.classList.toggle('open');


//   change icon
let icon = faq.querySelector('.faq_icon i')
if (icon.className === 'uil uil-plus') {
    icon.className = 'uil uil-minus';
}
else{
    icon.className = 'uil uil-plus';
};
    });
});



// swiper js(take from swiper website)
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // When window width is >= 600px
    breakpoints: {
        600:{
            
            slidesPerView: 2,
        }
    }
  });




//   open and close menu btn
let menu = document.querySelector(".nav__menu");
  let openbtn = document.querySelector("#open-menu-btn");
  let closebtn = document.querySelector("#close-menu-btn");

  openbtn.addEventListener('click',() => {
 menu.style.display = "flex";
 closebtn.style.display = "inline-block";
 openbtn.style.display = "none";
  });


  
  //   we can manage closebtn with help of fuction -> addEventListener and other is direct use addEventListener
  
    // let closenav = () => {
    // menu.style.display = "none";
    // closebtn.style.display = "none";
    // openbtn.style.display = "inline-block";
    //   }
    //   closebtn.addEventListener('click', closenav);
    

                        //   or


    closebtn.addEventListener('click', () => {
        
                  menu.style.display = "none";
                  closebtn.style.display = "none";
                  openbtn.style.display = "inline-block";
  })




