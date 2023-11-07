// "use strict"

/* ------ Кнопка наверх ------- */
const btnUp = {
    el: document.querySelector('.btn-up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.remove('btn-up_hide');
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
            this.el.classList.add('btn-up_hiding');
            window.setTimeout(() => {
                this.el.classList.add('btn-up_hide');
                this.el.classList.remove('btn-up_hiding');
            }, 300);
        }
    },
    addEventListener() {
        // при прокрутке окна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // если пользователь прокрутил страницу более чем на 200px
            if (scrollY > 400) {
                // сделаем кнопку .btn-up видимой
                this.show();
            } else {
                // иначе скроем кнопку .btn-up
                this.hide();
            }
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.btn-up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // переместиться в верхнюю часть страницы
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();


/* ------ Смена цвета активной кнопки ------- */
function changeButton(buttonType) {
    const newButton = document.querySelector('.notebook__button-new');
    const oldButton = document.querySelector('.notebook__button-old');
    const newArrow = document.getElementById('newArrow');
    const oldArrow = document.getElementById('oldArrow');

    if (buttonType === 'new') {
        newButton.style.background = 'var(--light-blue, #88A1DE)';
        oldButton.style.background = 'var(--grey, #F6F6F6)';
        newArrow.setAttribute('stroke', 'white');
        oldArrow.setAttribute('stroke', '#88A1DE');
    } else {
        newButton.style.background = 'var(--grey, #F6F6F6)';
        oldButton.style.background = 'var(--light-blue, #88A1DE)';
        newArrow.setAttribute('stroke', '#88A1DE');
        oldArrow.setAttribute('stroke', 'white');
    }
}


/* ------ Смена класса активной страницы только по цифрам ------- */
// function toggleActive(button) {
//     const buttons = document.querySelectorAll('.pageButton');
//     buttons.forEach((btn) => {
//         btn.classList.remove('active');
//     });

//     button.classList.add('active');
// }


/* ------ Смена класса активной страницы по цифрам и по стрелочкам------- */
function toggleActive(button) {
    const buttons = document.querySelectorAll('.pageButton');
    buttons.forEach((btn) => {
        btn.classList.remove('active');
    });

    button.classList.add('active');
}

function prevPage() {
    const activeButton = document.querySelector('.pageButton.active');
    if (activeButton.parentElement.previousElementSibling) {
        toggleActive(activeButton.parentElement.previousElementSibling.querySelector('.pageButton'));
    }
}

function nextPage() {
    const activeButton = document.querySelector('.pageButton.active');
    if (activeButton.parentElement.nextElementSibling) {
        toggleActive(activeButton.parentElement.nextElementSibling.querySelector('.pageButton'));
    }
}

