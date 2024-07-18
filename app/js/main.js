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


document.body.addEventListener('mouseleave', function(){
    alert('Робота виконана? Нічого не забув?');
})

document.addEventListener('keydown', function(event) {
    // Проверяем, что нажаты Ctrl + W
    if (event.ctrlKey && event.key === 'w') {
        alert('Вы нажали комбинацию клавиш Ctrl + W');
    }
});