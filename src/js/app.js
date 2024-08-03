const tabsNavAll = document.querySelectorAll("[data-tab]");
const tabContentAll = document.querySelectorAll("[data-tab-content]");

tabsNavAll.forEach(function(item){
    item.addEventListener('click', function(event){
        if(item.classList.contains("active")) return;
        
        tabsNavAll.forEach(function(i){
            i.classList.remove('active');
        });

        item.classList.add('active');

        tabContentAll.forEach(function(i){
            i.classList.remove('active');
        });

        document.querySelector('#' + event.target.dataset.tab).classList.add('active');
    })
})

const tab = document.getElementById('tab_1')


/*document.body.addEventListener('mouseleave', function(){
    alert('Робота виконана? Нічого не забув?');
})*/


document.addEventListener("DOMContentLoaded", function () {
    let gototop = document.querySelector(".ufive_uptop");
    let body = document.documentElement;
  
    window.addEventListener("scroll", check);
  
    function check() {
      pageYOffset >= 500 && gototop.classList.add("ufive_upview");
      pageYOffset < 500 && gototop.classList.remove("ufive_upview");
    }

    gototop.addEventListener('click', function(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    })

  });
  


  