const cards = document.querySelectorAll('.card-1, .card-2, .heading, .heading-3, .form-1, .footer-1 .card');
const observer = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
       if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
cards.forEach(function(card){
    observer.observe(card);
});

const section = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',function(){
    let current = '';
    section.forEach(function(section){
        const sectionTop = section.offsetTop
        if(window.scrollY >= sectionTop - 100){
            current = section.getAttribute('id');
        }
    });
   navLinks.forEach(function(link){
    link.classList.remove('active');
    if(link.getAttribute('href')=== `#${current}`){
        link.classList.add('active');
    }
   });
});


const menuBtn = document.getElementById('menuBtn');
const menuList = document.getElementById('navLinks');
menuBtn.addEventListener('click',function(){
    menuList.classList.toggle('open');
})
