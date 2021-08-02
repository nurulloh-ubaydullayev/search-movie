const elSearchInput = elForm.querySelector(".search");
const elFilmFilter = elForm.querySelector("#movies-rating");
const elTemplate = document.querySelector("#movie-template").content;
const elFilmsList = document.querySelector(".movies-list");
// const elSelectSort = document.querySelector(".movies-rating");

const normalizeDate = (time) => {
  const year = new Date(time).getFullYear();
  const month = String(new Date(time).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(time).getDate()).padStart(2, "0");

  return day + "." + month + "." + year;
};

function renderFilms(filmsArr, list) {
  list.innerHTML = null;

  filmsArr.forEach((film) => {
    const movieTemplate = elTemplate.cloneNode(true);
    movieTemplate
      .querySelector(".films-item__img")
      .setAttribute("src", film.poster);

    movieTemplate.querySelector(".films-item__title").textContent = film.title;
    movieTemplate.querySelector(".films-item__id").textContent = film.id;

    const newDate = normalizeDate(film.release_date);

    movieTemplate.querySelector(".films-item__release-date").textContent =
      newDate;

    movieTemplate
      .querySelector(".films-item__release-date")
      .setAttribute("datetime", newDate);

    film.genres.forEach((element) => {
      const genreLi = document.createElement("li");
      genreLi.setAttribute("class", "genre");
      genreLi.textContent = element;
      movieTemplate.querySelector(".films-item__genres").appendChild(genreLi);
      //   console.log(genreLi);
    });

    movieTemplate.querySelector(".films-item__overview").textContent =
      film.overview;
    elFilmsList.appendChild(movieTemplate);
  });
}

renderFilms(films, elFilmsList);

function sortFilms(filmsArr, format) {
  if (format === "a_z") {
    return filmsArr.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (format === "z_a") {
    return filmsArr.sort((a, b) => {
      if (a.title > b.title) {
        return -1;
      } else if (a.title < b.title) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (format === "new_old") {
    return filmsArr.sort((a, b) => {
      if (a.release_date > b.release_date) {
        return -1;
      } else if (a.release_date < b.release_date) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (format === "old_new") {
    return filmsArr.sort((b, a) => {
      if (a.release_date > b.release_date) {
        return -1;
      } else if (a.release_date < b.release_date) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}

function sortByGenres(searchedMovies, genreValue) {
  const newArr = [];
  console.log(genreValue);
  if (genreValue === "all") {
    return searchedMovies;
  }
  searchedMovies.forEach((film) => {
    if (film.genres.includes(genreValue)) {
      newArr.push(film);
    }
  });
  return newArr;
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputValueSearch = elSearchInput.value.trim();
  const sortValue = elFilmFilter.value.trim();
  const sortGenre = elFilmsGenres.value.trim();
  console.log(sortGenre);
  const regex = new RegExp(inputValueSearch, "gi");
  const searchedFilms = films.filter((film) => film.title.match(regex));
  const sortedFilmsByGenre = sortByGenres(searchedFilms, sortGenre);
  const sortedFilms = sortFilms(sortedFilmsByGenre, sortValue);
  elFilmsList.innerHTML = null;
  renderFilms(sortedFilms, sortValue);
});
