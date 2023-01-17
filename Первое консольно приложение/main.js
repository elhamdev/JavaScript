let numberOfFilms = +prompt("Сколько фильмов вы посмотрели,", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres : [],
    privat : false,
};

let a = prompt("Один из последних просмотренных фильмов,", "");
let b = prompt("На сколько оцените фильм?");

personalMovieDB.movies[a] = b;
console.log(personalMovieDB);
