import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        series: 'search/tv'
    },
    params:{
        apiKey: '6a377087dc6beacf9e6be1f24ffc0933',
        query: 'a'
    },
    movieList: [],
    seriesList: []
})