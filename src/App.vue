<template>
  <LoadingScreen v-if="!store.loadingFlag" />
  <div v-else class="bg-secondary">
    <HeaderComponent/>
    <div>
      <video autoplay muted loop class="w-100">
        <source src="/bomba.mp4" type="video/mp4">
      </video>
    </div>
    <div class="bg-secondary vh-100">
      <div class="p-3">
        <h2 v-if="!store.film_serie_flag" class="text-white">Film in tendenza</h2>
        <h2 v-else class="text-white">Films</h2>
        <div class="row g-2 flex-nowrap overflow-hidden scroll-smooth" ref="movies">
          <CardComponent v-for="movie in store.filterF" :title="movie.title" :originalTitle="movie.original_title"
            :lingua="movie.original_language" :voto="Math.round(movie.vote_average / 2)"
            :img="store.imgPath + movie.poster_path" :trama="movie.overview" :id="movie.id" @film-cast="addCast($event, movie)" :cast="movie.cast"/>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div>
            <i class="fa-solid fa-chevron-left fs-3" @click="scrollMovieleft()"></i>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right fs-3" @click="scrollMovieright()"></i>
          </div>
        </div>
        <h2 v-if="!store.film_serie_flag" class="text-white">Serie in tendenza</h2>
        <h2 v-else class="text-white">TV Series</h2>
        <div class="row g-3 mt-3 flex-nowrap overflow-hidden scroll-smooth" ref="series">
          <CardComponent v-for="serie in store.filterS" :title="serie.name" :originalTitle="serie.original_name"
            :lingua="serie.original_language" :voto="Math.round(serie.vote_average / 2)"
            :img="store.imgPath + serie.poster_path" :trama="serie.overview" @serie-cast="addCastS($event, serie)" :cast="serie.cast" :id="serie.id"/>
        </div>
        <div class="d-flex justify-content-between align-items-center mt-2">
          <div>
            <i class="fa-solid fa-chevron-left fs-3" @click="scrollSeriesleft()"></i>
          </div>
          <div>
            <i class="fa-solid fa-chevron-right fs-3" @click="scrollSeriesright()"></i>
          </div>
        </div>
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
        store.filterF = store.movieList;
      })
    },
    getSeriesList() {
      const url = store.trendingTvUrl;
      axios.get(url + store.params.api_key).then((response) => {
        store.seriesList = response.data.results;
        console.log(store.seriesList);
        store.filterS = store.seriesList;
      })
    },
    scrollMovieright() {
      this.$refs.movies.scrollBy(400, 0);
    },
    scrollMovieleft() {
      this.$refs.movies.scrollBy(-400, 0);
    },
    scrollSeriesright() {
      this.$refs.series.scrollBy(400, 0);
    },
    scrollSeriesleft() {
      this.$refs.series.scrollBy(-400, 0);
    },
    addCast(cast,movie){
      console.log(cast);
      console.log(movie);
      movie.cast = cast;
    },
    addCastS(cast,serie){
      serie.cast = cast;
      console.log(serie.cast)
    },
    getGeneri(){
      const url = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + store.params.api_key;
      axios.get(url).then((response) => {
        store.listaGeneri = response.data.genres;
        console.log(store.listaGeneri)
      })
    }
  },
  created() {
    this.getMovieList()
    this.getSeriesList()
    this.getGeneri()
  }
}
</script>

<style lang="scss" scoped>
.scroll-smooth {
  scroll-behavior: smooth;
}

i {
  cursor: pointer;
}
</style>