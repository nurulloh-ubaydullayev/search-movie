var elMoviesList = document.querySelector(".movies-list");

function renderDatas(filmsArr) {
  for (var i = 0; i < filmsArr.length; i++) {
    var newLi = document.createElement("li");
    newLi.setAttribute("class", "films-list__item");

    var filmId = document.createElement("span");
    filmId.setAttribute("class", "films-item__id");
    filmId.textContent = filmsArr[i].id;

    var filmTitle = document.createElement("span");
    filmTitle.setAttribute("class", "films-item__title");
    filmTitle.textContent = filmsArr[i].title;

    var filmImg = document.createElement("img");
    filmImg.setAttribute("class", "films-item__img");
    filmImg.setAttribute("src", filmsArr[i].poster);
    filmImg.setAttribute("width", "250");
    filmImg.setAttribute("height", "250");

    var filmOverview = document.createElement("p");
    filmOverview.setAttribute("class", "films-item__overview");
    filmOverview.textContent = filmsArr[i].overview;

    var filmReleaseDate = document.createElement("span");
    filmReleaseDate.setAttribute("class", "films-item__release-date");
    filmReleaseDate.textContent = filmsArr[i].release_date;

    var filmGenres = document.createElement("p");
    filmGenres.setAttribute("class", "films-item__genres");
    var filmGenresText = filmsArr[i].genres.join(" / ");
    filmGenres.textContent = filmGenresText;

    var filmContentWrapper = document.createElement("div");
    filmContentWrapper.setAttribute("class", "film-content-wrapper");

    newLi.appendChild(filmImg);
    filmContentWrapper.appendChild(filmTitle);
    filmContentWrapper.appendChild(filmId);
    filmContentWrapper.appendChild(filmReleaseDate);
    filmContentWrapper.appendChild(filmGenres);
    filmContentWrapper.appendChild(filmOverview);
    newLi.appendChild(filmContentWrapper);
    elMoviesList.appendChild(newLi);
  }
  console.log(filmsArr);
}

renderDatas(films);
