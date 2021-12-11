/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) 


3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

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
    
    function clearMovies() {
        interactiveList.innerHTML = '';
    }
    
    function addMoviesFromDB() {
        clearMovies();
        movieDB.movies.sort();
        movieDB.movies.forEach((item, i) => {
            let newElem = `<li class="promo__interactive-item">${i+1} ${item}<div class="delete"></div></li>`;
            interactiveList.insertAdjacentHTML('beforeend', newElem);
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addMoviesFromDB();
            });
        });
    }
    
    addMoviesFromDB();
       
    
    
    const addForm = document.querySelector('form.add');
    const inputFilm = document.querySelector('.adding__input');
    //const submitBtn = document.querySelector('button');
    const checkboxInput = document.querySelector('input[type="checkbox" i]');
    
    
    function addMoviesToDB(film) {
        if (film.length > 21) {
            movieDB.movies.push(`${film = film.toUpperCase().slice(0, 21)}...`);
        } else {
            movieDB.movies.push(film.toUpperCase());
        };
        addMoviesFromDB(); 
    }
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let film = inputFilm.value;
        if (checkboxInput.checked) {
            console.log("Добавляем любимый фильм");
        };
        if (film) {
            addMoviesToDB(film);
        };    
        //очистка формы
        addForm.reset();
    });
    
    
        
})