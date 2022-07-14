
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Скільки фільмів ви вже бачили?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви вже бачили?', '');
    }  
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: false
};

//const a = prompt('Один из последних просмотренных фильмов?', ''),
//      b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//      d = prompt('На сколько оцените его?', '');
//
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
       
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

//rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ви класичний глядач')
    } else if (personalMovieDB.count >= 30) {
        console.log('Ви кіноман')
    } else {
        console.log('Помилка')
    }
}

//detectPersonalLevel();

function showMyDb () {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    } 
}

showMyDb();

function writeYourGenres() {
    for (let i = 1; i <=3; i++ ) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();