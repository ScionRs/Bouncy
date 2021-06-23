$(document).ready(function() {
    const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__item'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger-active');
        menu.classList.toggle('header__menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger-active');
            menu.classList.toggle('header__menu-active');
        })
    })

    const tabs = document.querySelectorAll('.about__tab'),
          tabsContent = document.querySelectorAll('.about__items'),
          tabsParent = document.querySelector('.about__tabs');

    function hideTabContent() {
        tabsContent.forEach(item => {
           item.style.display = 'none';
        });
        tabs.forEach(item => {
           item.classList.remove('about__tab-active');
        });
    }
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'flex';
        tabs[i].classList.add('about__tab-active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click',(event) => {
          const target = event.target;

          if(target && target.classList.contains('about__tab')){
             tabs.forEach((item,i) =>{
                 if (target == item){
                     hideTabContent();
                     showTabContent(i);
                 }
             });
    }
    });
})
