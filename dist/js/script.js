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
    /*
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
        });*/
    const tabsBtn = document.querySelectorAll(".about__tab");
    const tabsItems = document.querySelectorAll(".about__items");
    const serviceBtn = document.querySelectorAll(".service__tab");
    const serviceItems = document.querySelectorAll(".service__item");
    const newsBtn = document.querySelectorAll(".news__tab");
    const newsItems = document.querySelectorAll(".news__item");

    tabsBtn.forEach(onTabClick);
    serviceBtn.forEach(onServiceTabClick);
    function onTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(tabId);

            if (!currentTab.classList.contains('about__tab-active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('about__tab-active');
                })

                tabsItems.forEach(function (item) {
                    item.classList.remove('about__items-active');
                })

                currentBtn.classList.add('about__tab-active');
                currentTab.classList.add('about__items-active');
            }
        });
    }

    function onServiceTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(tabId);

            if (!currentTab.classList.contains('service__tab-active')) {
                serviceBtn.forEach(function (item) {
                    item.classList.remove('service__tab-active');
                })

                serviceItems.forEach(function (item) {
                    item.classList.remove('service__item-active');
                })

                currentBtn.classList.add('service__tab-active');
                currentTab.classList.add('service__item-active');
            }
        });
    }
    newsBtn.forEach(onNewsTabClick);
    function onNewsTabClick(item) {
        item.addEventListener("click", function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute("data-tab");
            let currentTab = document.querySelector(tabId);
            console.log(tabId);

            if (!currentTab.classList.contains('news__tab-active')) {
                newsBtn.forEach(function (item) {
                    item.classList.remove('news__tab-active');
                })

                newsItems.forEach(function (item) {
                    item.classList.remove('news__item-active');
                })

                currentBtn.classList.add('news__tab-active');
                currentTab.classList.add('news__item-active');
            }
        });
    }

    $('.carousel__team').slick({
        speed: 500,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.carousel__testimonials').slick({
        speed: 500,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

})
