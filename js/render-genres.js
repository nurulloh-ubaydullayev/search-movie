const elForm = document.querySelector(".films-form");
const elFilmsGenres = elForm.querySelector(".films-genres");

function renderGenresFilms(filmsArr, genres) {
  const genresArr = [];
  filmsArr.forEach((film) => {
    film.genres.forEach((genre) => {
      if (!genresArr.includes(genre)) {
        genresArr.push(genre);
      }
    });
  });

  genresArr.forEach((genre) => {
    const newOption = document.createElement("option");
    newOption.textContent = genre;
    newOption.value = genre;
    genres.appendChild(newOption);
  });
}

renderGenresFilms(films, elFilmsGenres);
