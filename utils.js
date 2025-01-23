const API_KEY = 'd567517b';

export async function fetchMoviesByYear() {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=war&apikey=${API_KEY}&page=1`
    );
    const data = await response.json();
    if (data.Search) {
      return data.Search;
    } else {
      return [];
    }
  } catch (error) {
    return [];
  }
}

export async function searchMovies(query, page = 1) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}&page=${page}`
    );
    const data = await response.json();
    if (data.Search) {
      return data.Search;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
}
