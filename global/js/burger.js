// "use strict"

/* ------ Определяем тип устройства ------- */
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

/* ------ Меню бургер ------- */
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const usersPictures = document.querySelector('.main__users-pictures');
const searchBtn = document.querySelector('.main__search-btn');

if (iconMenu) {

    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');

        if (menuBody.classList.contains('_active')) {
            usersPictures.style.display = 'none';
            searchBtn.style.display = 'none';

        } else {
            usersPictures.style.display = 'flex';
            searchBtn.style.display = 'flex';
        }
    })
}
