const numberOfFilms = prompt('Скільки фільмів ви вже бачили?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [

    ],
    privat: true
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (4 === 4) {
    console.log('ok');
} else {
    console.log('error');
}

const num = 40;

if (num < 39) {
    console.log("error");
} else if (num > 100) {
console.log("many");
} else {
    console.log("OK!")
}

(num === 40) ?  console.log("OK!") : console.log("Error");

const num = 40;

switch(num) {
    case 39:
        console.log('False');
        break;
    case 100:
        console.log('False');
        break;
    case 40:
        console.log('True');
        break;
    default:
        console.log('Sorry');
        break;
}

console.log( NaN || 2 || undefined );
console.log( NaN && 2 && undefined );
console.log( 1 && 2 && 3 );
console.log( 25 || null && !3 );

console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);

console.log( 5 === 5 && 3 > 1 || 5);


const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;
 
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!')
}


let numb = 50;

//while (numb < 55) {
//    console.log(numb);
//   numb++;
//}

for (let i = 1; i < 8; i++) {
    if (i === 6 ) {
        continue;
    }

    console.log(i);

}


for (let i = 0; i < 3; i++)  {
    console.log(i);
    for (let j = 0; j < 3; j++)  {
        console.log(j);
    }
}

let result = "";
const length = 7;


for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }

    result += '\n';
}
console.log(result);

function firstTask() {
    let number = 5;
    while (number <= 10) {
        console.log(number);
        number++;
    }
}
console.log(firstTask);

const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];