<template>
    <header class="bg-black py-3">
        <div class="container d-flex align-items-center justify-content-between">
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div class="d-flex">
                <select name="" id="" class="form-control w-25" @change="filterGeneri(), filterGeneriSeries()" v-model="movieId">
                    <option value="">ALL</option>
                    <option :value="genere.id" v-for="genere in store.listaGeneri">{{ genere.name }}</option>
                </select>
                <input type="text" @keyup.enter="searchFilms(), searchTV()" v-model="searchString" class="form-control mx-3"
                    placeholder="Cerca i tuoi film o serie preferiti">
                <button @click="searchFilms(), searchTV()" class="btn btn-danger">Cerca</button>
            </div>
        </div>
    </header>
</template>

<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'HeaderComponent',
    data() {
        return {
            store,
            searchString: '',
            movieId: '',
        }
    },
    methods: {
        searchFilms() {
            if (this.searchString === '') {
                store.film_serie_flag = false;
                const url = store.trendingUrl;
                axios.get(url + store.params.api_key).then((response) => {
                    store.filterF = response.data.results;
                })
            } else {
                store.film_serie_flag = true;
                store.params.query = this.searchString;
                const url = store.apiUrl + store.endpoint.movie;
                axios.get(url, { params: store.params }).then((response) => {
                    store.filterF = response.data.results;
                })
            }
        },
        searchTV() {
            if (this.searchString === '') {
                const url = store.trendingTvUrl;
                axios.get(url + store.params.api_key).then((response) => {
                    store.filterS = response.data.results;
                })
            } else {
                store.film_serie_flag = true;
                store.params.query = this.searchString;
                const url = store.apiUrl + store.endpoint.series;
                axios.get(url, { params: store.params }).then((response) => {
                    store.filterS = response.data.results;
                })
            }
        },
        filterGeneri() {
            if (this.movieId === '') {
                return store.filterF = store.movieList;
            } else {
                const filteredMovies = store.movieList.filter((el) => el.genre_ids.includes(this.movieId));
                return store.filterF = filteredMovies;
            }
        },
        filterGeneriSeries(){
            if(this.movieId === ''){
                return store.filterS = store.seriesList;
            }else{
                const filteredSeries = store.seriesList.filter((el) => el.genre_ids.includes(this.movieId));
                return store.filterS = filteredSeries;
            }
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
}

input {
    width: 400px !important;
}
</style>