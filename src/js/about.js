let leftDiv = document.querySelector('.about__image_w');
let righttDiv = document.querySelector('.about__descr_w');
      
function animated(param){

    let numberTop = param.getBoundingClientRect().top;

    window.addEventListener('scroll', function onScroll() {
        if(window.pageYOffset > numberTop - window.innerHeight/ 1.1) {
            this.removeEventListener('scroll', onScroll);
            
            param.style.left = '0rem';
        }
    });
}

animated(leftDiv);
animated(righttDiv);