
$(document).ready(function() {
    $('.room_page_slider').slick({
        arrows:false,
        dots:true
    });

})


let room= document.querySelectorAll('.room');

$(document).ready(function(){
    $('.block_name').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
        $('.blocks_found').toggleClass('active');
    })
    
    $('.block_found').click(function(event) {
        if ($('.rooms_page_found').hasClass('one')) {
            $('.block_found').not($(this)).removeClass('active');
        }
        $(this).toggleClass('active');
        if($(this).text()=='Класичний'){
            for (let i = 0; i < room.length; i++){
                room[i].style.display = 'flex';
            }
            room[2].style.display = 'none';
            room[3].style.display = 'none';
        }

        if($(this).text()=='Люкс'){
            for (let i = 0; i < room.length; i++){
                room[i].style.display = 'flex';
            }
            room[0].style.display = 'none';
            room[1].style.display = 'none';
            room[2].style.display = 'none';
            room[3].style.display = 'none';
        }

        if($(this).text()=='Прем\'єр'){
            for (let i = 0; i < room.length; i++){
                room[i].style.display = 'flex';
            }
            room[0].style.display = 'none';
            room[1].style.display = 'none';
            room[4].style.display = 'none';
            room[5].style.display = 'none';
        }

        if($(this).text()=='Люкс'){
            for (let i = 0; i < room.length; i++){
                room[i].style.display = 'flex';
            }
            room[0].style.display = 'none';
            room[1].style.display = 'none';
            room[2].style.display = 'none';
            room[3].style.display = 'none';
        }

        if($(this).text()=='Всі'){
            for (let i = 0; i < room.length; i++){
                room[i].style.display = 'flex';
            }
        }
    })
})






let more = document.querySelectorAll('.more');
let more_information = document.querySelectorAll('.more_information');

function add (number){
    more_information[number].classList.toggle('inf');
   
    if(more[number].textContent =='Детальніше про кімнату'){
		more[number].textContent='Менше про кімнату';
		return;
	}

    if(more[number].textContent =='Менше про кімнату'){
		more[number].textContent='Детальніше про кімнату';
		return;
	}
}


more[0].addEventListener('click',()=>{
    add(0);
})
more[1].addEventListener('click',()=>{
    add(1);
})
more[2].addEventListener('click',()=>{ 
    add(2);
})
more[3].addEventListener('click',()=>{
    add(3);
})
more[4].addEventListener('click',()=>{
    add(4);
})
more[5].addEventListener('click',()=>{
    add(5);
})

