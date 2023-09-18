// подчеркивание активной страницы
document.addEventListener("DOMContentLoaded", function () {
    // Получение текущего URL страницы
    var currentUrl = window.location.href;

    // Получение всех ссылок в меню
    var menuLinks = document.querySelectorAll(".menu__link");

    // Проход по ссылкам и проверка совпадает ли URL
    menuLinks.forEach(function (link) {
        if (link.href === currentUrl) {
            link.classList.add("active"); // Добавления класса "active"
        }
    });
});


// блокировка ввода символов
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value;
    const pattern = /^[a-zA-Zа-яА-Я0-9\s]*$/;

    if (!pattern.test(inputValue)) {
        searchInput.value = inputValue.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '');
    }
});


// отключение кнопки поиска если длина менее 4 символов
const searchButton = document.getElementById("search-button");
searchInput.addEventListener("input", function () {
    const inputValue = searchInput.value;

    if (inputValue.length < 4) {
        searchButton.disabled = true;
    } else {
        searchButton.disabled = false;
    }
});
// Изначально отключаем кнопку, так как длина поля меньше 4 символов
searchButton.disabled = true;



// AJAX запрос
function updateMainText() {
    var mainTextElement = document.querySelector('.main__text');
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://baconipsum.com/api/?type=lucky', true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            // Задаем затухание текста
            mainTextElement.style.opacity = 0;

            // Устанавливаем новый текст после затухания
            setTimeout(function () {
                mainTextElement.textContent = JSON.parse(xhr.responseText)[0];
                mainTextElement.style.opacity = 1; // Плавное появление
            }, 500); // Ждем 500 миллисекунд (половину секунды) перед обновлением текста
        } else {
            console.error('Ошибка при загрузке данных');
        }
    };

    xhr.send();
}

setInterval(updateMainText, 7000);

updateMainText(); // Первоначальное обновление текста
