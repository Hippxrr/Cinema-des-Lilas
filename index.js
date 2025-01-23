import { fetchMoviesByYear } from "./utils.js";

const movieList = document.querySelector("#trending-movies .movie-list");
const loadMoreButton = document.getElementById('loadMoreButton');
let page = 1;

async function displayTrendings() {
  const movies = await fetchMoviesByYear(page);
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <a href="movie.html?id=${movie.imdbID}">Details</a>
        `;
    movieList.appendChild(movieCard);
  });
}

loadMoreButton.addEventListener("click", () => {
  page++;
  displayTrendings();
});

displayTrendings(); 
