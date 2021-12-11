/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');

adv.forEach(item => {
    item.remove();
});

const genre = document.querySelector('.promo__genre');

genre.textContent = 'Драма';

const promoBackground = document.querySelector('.promo__bg');

promoBackground.style.backgroundImage = "url('./img/bg.jpg')";

const interactiveList = document.querySelector('.promo__interactive-list');
const interactiveListItems = interactiveList.querySelectorAll('li');

interactiveListItems.forEach(item => {
    item.remove();
});

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    let newElem = `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div></li>`;
    interactiveList.insertAdjacentHTML('beforeend', newElem);
})

