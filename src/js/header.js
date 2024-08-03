
const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__menu');

function header(burger, menu){
    const headerNav = document.querySelectorAll('.nav__menu-ittem');

    headerNav.forEach(function(elem){


        elem.addEventListener('click',function(){

            

            headerNav.forEach(function(item){
                item.classList.remove('nav__menu-ittem--active');
            })

            elem.classList.add('nav__menu-ittem--active');

            if(burger.classList.contains('open')){
                burger.classList.remove('open');
                menu.classList.remove('active__nav');
            }

            
        })
    })
}




burger.addEventListener('click', function(){
    burger.classList.toggle('open');

    if(burger.classList.contains('open')){
        menu.classList.add('active__nav');
    } else {
        menu.classList.remove('active__nav'); 
    };
})

header(burger, menu);