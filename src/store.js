import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        series: 'search/tv'
    },
    params:{
        api_key: 'b97dde22e3b7e18da690eff507a5511b',
        query: 'a'
    },
    movieList: [],
    seriesList: []
})