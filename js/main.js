var elFilmsForm = document.querySelector(".films-form");
var elMoviesSelect = document.querySelector("#movies");
var elMoviesList = document.querySelector(".movies-list");
var elBookmarkedMoviesList = document.querySelector(".bookmarked-movies__list");

function generateFilms(filmsArr) {
  var newFilmsArr = [];
  for (var i = 0; i < filmsArr.length; i++) {
    for (var genre of filmsArr[i].genres) {
      if (newFilmsArr.includes(genre)) {
      } else {
        newFilmsArr.push(genre);
      }
    }
  }
  return newFilmsArr;
}

function renderArray(genresArr) {
  for (var filmGenre of genresArr) {
    var newMoviesOption = document.createElement("option");
    newMoviesOption.value = filmGenre;
    newMoviesOption.setAttribute("class", "genre-option");
    newMoviesOption.textContent = filmGenre;
    elMoviesSelect.appendChild(newMoviesOption);
  }
}

renderArray(generateFilms(films));
