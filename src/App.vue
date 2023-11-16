<template>
  <HeaderComponent />
  <div class="bg-secondary">
    <div class="container py-3">
      <div class="row g-2">
        <h2>Films</h2>
        <CardComponent v-for="movie in store.movieList" :title="movie.title" :originalTitle="movie.original_title"
          :lingua="movie.original_language" :voto="Math.round(movie.vote_average / 2)"
          :img="store.imgPath + movie.poster_path" :trama="movie.overview" />
      </div>
      <div class="row g-3 mt-3">
        <h2>TV Series</h2>
        <CardComponent v-for="serie in store.seriesList" :title="serie.name" :originalTitle="serie.original_name"
          :lingua="serie.original_language" :voto="Math.round(serie.vote_average / 2)"
          :img="store.imgPath + serie.poster_path" :trama="serie.overview" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovieList() {
      const url = store.apiUrl + store.endpoint.movie;
      axios.get(url, { params: store.params }).then((response) => {
        store.movieList = response.data.results;
        console.log(store.movieList);
      })
    },
    getSeriesList() {
      const url = store.apiUrl + store.endpoint.series;
      axios.get(url, { params: store.params }).then((response) => {
        store.seriesList = response.data.results;
        console.log(store.seriesList);
      })
    },
  },
  created() {
    this.getMovieList()
    this.getSeriesList()
  }
}
</script>

<style lang="scss" scoped></style>