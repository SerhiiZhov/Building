const headerNav = document.querySelectorAll('.nav__menu-ittem');

headerNav.forEach(function(elem){
    

    elem.addEventListener('click',function(){
        
        headerNav.forEach(function(item){
            item.classList.remove('nav__menu-ittem--active');
        })

        elem.classList.add('nav__menu-ittem--active');
    })
})