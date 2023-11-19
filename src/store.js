import { reactive } from "vue";

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    trendingUrl: 'https://api.themoviedb.org/3/trending/movie/week?api_key=',
    trendingTvUrl: 'https://api.themoviedb.org/3/trending/tv/week?api_key=',
    endpoint: {
        movie: 'search/movie',
        series: 'search/tv',
        credits: '/credits'
    },
    params:{
        api_key: 'b97dde22e3b7e18da690eff507a5511b',
        query: 'a'
    },
    movieList: [],
    seriesList: [],
    imgPath: 'https://image.tmdb.org/t/p/w342/',
    languages: {
        en: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ec-1f1e7.svg',
        it: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1ee-1f1f9.svg',
        fr: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1eb-1f1f7.svg',
        de: 'https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1e9-1f1ea.svg'
    },
    myStar: 'https://affaso.com/wp-content/uploads/2020/06/5-point-stars-png-star-icon-flat-11562958768wpf63hu4tq.png',
    emptyStar: 'https://w7.pngwing.com/pngs/710/952/png-transparent-computer-icons-star-star-thumbnail.png',
    film_serie_flag: false,
    loadingFlag: false,
    videoFlag: false,
    castUrl: 'https://api.themoviedb.org/3/movie/',
    castUrlS: 'https://api.themoviedb.org/3/tv/',
    castList: [],
    listaGeneri: [],
    filterF: [],
    filterS: []
})