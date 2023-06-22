import { Store } from "../core/yuhyeon";

const store = new Store({
  searchText: "",
  page: 1,
  pageMax: 1,
  movies: [],
});

export default store;
export const searchMovies = async (page) => {
  store.state.page = page;
  if (page === 1) {
    store.state.movies = [];
  }
  const res = await fetch(`https://omdbapi.com/?apikey=d4861326&s=${store.state.searchText}&page=${page}`);
  const { Search, totalResults } = await res.json();
  store.state.movies = [...store.state.movies, ...Search];
  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
};
