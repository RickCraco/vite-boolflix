<template>
  <LoadingScreen v-if="!store.loadingFlag"/>
  <div v-else>
    <HeaderComponent />
    <div class="bg-secondary vh-100">
      <div class="container py-3">
        <h2 v-if="!store.film_serie_flag" class="text-white">Film in tendenza</h2>
        <h2 v-else class="text-white">Films</h2>
        <div class="row g-2 flex-nowrap overflow-hidden" ref="movies">
          <CardComponent v-for="movie in store.movieList" :title="movie.title" :originalTitle="movie.original_title"
            :lingua="movie.original_language" :voto="Math.round(movie.vote_average / 2)"
            :img="store.imgPath + movie.poster_path" :trama="movie.overview" />
        </div>
        <h2 v-if="!store.film_serie_flag" class="text-white">Serie in tendenza</h2>
        <h2 v-else class="text-white">TV Series</h2>
        <div class="row g-3 mt-3 flex-nowrap overflow-hidden" ref="series">
          <CardComponent v-for="serie in store.seriesList" :title="serie.name" :originalTitle="serie.original_name"
            :lingua="serie.original_language" :voto="Math.round(serie.vote_average / 2)"
            :img="store.imgPath + serie.poster_path" :trama="serie.overview" />
        </div>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import CardComponent from './components/CardComponent.vue';
import LoadingScreen from './components/LoadingScreen.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CardComponent,
    LoadingScreen
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getMovieList() {
      const url = store.trendingUrl;
      axios.get(url + store.params.api_key).then((response) => {
        store.movieList = response.data.results;
        console.log(store.movieList);
      })
    },
    getSeriesList() {
      const url = store.trendingTvUrl;
      axios.get(url + store.params.api_key).then((response) => {
        store.seriesList = response.data.results;
        console.log(store.seriesList);
      })
    },
    scrollMovieright(){
      this.$movies.scrollBy(400, 0);
    },
    scrollMovieleft(){
      this.$movies.scrollBy(-400,0);
    },
    scrollSeriesright(){
      this.$series.scrollBy(400,0);
    },
    scrollSeriesleft(){
      this.$series.scrollBy(-400,0);
    }
  },
  created() {
    this.getMovieList()
    this.getSeriesList()
  }
}
</script>

<style lang="scss" scoped></style>