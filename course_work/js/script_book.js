

$(document).ready(function() {
    $('.book_page_slider').slick({
        arrows:false,
        dots:true
    });

})


document.addEventListener("DOMContentLoaded", test);
let price;
function test() {
  const booking_room = document.querySelector('.booking_room span');
  const booking_price = document.querySelector('.booking_price span');
  const orderImg = document.querySelector('.booking_room');
  const item1 = document.querySelector('.item1');
  const item2 = document.querySelector('.item2');

  const urlParams = new URLSearchParams(window.location.search);
  const param_name = urlParams.get('name');
  const param_price = urlParams.get('price_block');
  const param_img1 = urlParams.get('item1');
  const param_img2 = urlParams.get('item2');

  booking_room.textContent = param_name;
  
  booking_price.textContent = param_price;
  item1.src = param_img1;
  item2.src = param_img2;

  let string_price = booking_price.textContent.substr(0,5);
  console.log(string_price);

  price = parseInt(string_price);

  console.log(price);

}


const discout_button = document.querySelector('.discount_button');

discout_button.addEventListener('click',()=>{
    discout_button.classList.toggle('got');


    
    if (discout_button.textContent == 'Отримано') {
        discout_button.textContent = 'Отримати';
        return;
    }


    if (discout_button.textContent == 'Отримати') {
        discout_button.textContent = 'Отримано';
        return;
    }
})


const booking_button = document.querySelector('.booking_button');
const booking_panel = document.querySelector('.booking_panel');
const booking_panel_prise = document.querySelector('.booking_panel_prise span');


let new_price;
booking_button.addEventListener('click',()=>{
    if (discout_button.textContent == 'Отримано') {
        new_price = price*0.6;
    }else{
        new_price = price;
    }
    booking_panel.style.display='flex';
    booking_panel_prise.textContent= new_price;
})

const close_button = document.querySelector('.close_button');


close_button.addEventListener('click',()=>{
    booking_panel.style.display='none';
    new_price = price;
})