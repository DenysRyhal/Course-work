let header_container_burger =document.querySelector('.header_container_burger');
let header_burger =document.querySelector('.header_burger');
let header_menu =document.querySelector('.header_menu');
let body=document.querySelector('body');
        
header_container_burger.addEventListener('click',()=>{
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    body.classList.toggle('lock')
});