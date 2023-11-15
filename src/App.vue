<template>
  <HeaderComponent/>
  <CardComponent v-for="movie in store.movieList" 
  :title="movie.title" 
  :originalTitle="movie.original_title" 
  :lingua="movie.original_language" 
  :voto="movie.vote_average" 
  :img="movie.poster_path"/>
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
    data(){
      return{
        store
      }
    },
    methods: {
      getMovieList(){
        const url = store.apiUrl + store.endpoint.movie;
        axios.get(url, {params: store.params}).then((response) =>{
          store.movieList = response.data.results;
          console.log(store.movieList);
        })
      },
      getSeriesList(){
        const url = store.apiUrl + store.endpoint.series;
        axios.get(url, {params: store.params}).then((response) =>{
          store.seriesList = response.data.results;
          console.log(store.seriesList);
        })
      }
    },
    created(){
    }
  }
</script>

<style lang="scss" scoped>

</style>