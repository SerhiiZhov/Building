function numer(param){


    let numbers = document.querySelectorAll(param);
    
    numbers.forEach(function(number) {
        let numberTop = number.getBoundingClientRect().top,
            start = +number.innerHTML,
            end = +number.dataset.max;
    
        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop - window.innerHeight/ 1.1) {
                this.removeEventListener('scroll', onScroll);
                let interval = setInterval(function() {
                    number.innerHTML = ++start;
                    if(start == end) {
                        clearInterval(interval);
                    }
                }, 15);
            }
        });
    });
    }
    
    numer('.expirience2-cont2__num');
    numer('.expirience-cont__num');