"use strict"

const pageSize = 3; // Количество карточек на странице
let currentPage = 1; // Текущая страница

const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const pageButtonsContainer = document.getElementById('pageButtons');

// Обработчики для кнопок "Пред." и "След."
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePageButtons();
    }
});

nextPageButton.addEventListener('click', () => {
    currentPage++;
    updatePageButtons();
});

// Функция для обновления кнопок страниц
function updatePageButtons() {
    // Очищаем контейнер с кнопками страниц
    pageButtonsContainer.innerHTML = '';

    const totalPages = Math.ceil(totalEntries / pageSize);

    // Определяем начальную и конечную страницы для отображения
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(currentPage + 2, totalPages);

    // Ограничиваем количество кнопок до пяти
    if (endPage - startPage < 4) {
        if (startPage === 1) {
            endPage = Math.min(5, totalPages);
        } else {
            startPage = Math.max(endPage - 4, 1);
        }
    }

    // Создаем кнопки для каждой страницы
    for (let i = startPage; i <= endPage; i++) {
        const pageButton = document.createElement('button');
        pageButton.textContent = i;
        pageButton.addEventListener('click', () => {
            currentPage = i;
            updatePageButtons();
        });
        pageButtonsContainer.appendChild(pageButton);
    }

    // Делаем кнопку "Пред." неактивной на первой странице
    prevPageButton.disabled = currentPage === 1;

    // Делаем кнопку "След." неактивной на последней странице
    nextPageButton.disabled = currentPage === totalPages;

    // Здесь должен быть запрос на сервер для получения данных текущей страницы
}
