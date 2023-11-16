<template>
    <div class="col-2 flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="img" :alt="title" class="w-100 h-100">
            </div>
            <div class="flip-card-back">
                <ul class="list-unstyled text-start p-3">
                    <li><span class="fw-bold">Titolo:{{ title }}</span></li>
                    <li><span class="fw-bold">Titolo originale: {{ originalTitle }}</span></li>
                    <li v-if="(lingua in store.languages)"><span class="fw-bold">Lingua: </span><img :src="checkFlag()"
                            :alt="lingua" id="flag"></li>
                    <li v-else><span class="fw-bold">Lingua: {{ lingua.toLocaleUpperCase() }}</span></li>
                    <li><span class="fw-bold">{{ trama }}</span></li>
                    <li v-if="voto > 0">
                        <img :src="store.myStar" :alt="voto" id="star" v-for="n in voto">
                    </li>
                    <li v-else><span>Voto : {{ voto }}</span></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';

export default {
    name: 'CardComponent',
    props: {
        title: String,
        originalTitle: String,
        lingua: String,
        voto: Number,
        img: String,
        trama: String
    },
    data() {
        return {
            store,
            image: ''
        }
    },
    methods: {
        checkFlag() {
            if (this.lingua === 'en') {
                return store.languages.en
            } else if (this.lingua === 'it') {
                return store.languages.it;
            } else if (this.lingua === 'de') {
                return store.languages.de;
            } else if (this.lingua === 'fr') {
                return store.languages.fr;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}

#flag {
    width: 1em;
}

#star {
    width: 1em;
}

span {
    font-size: 10px;
}

.flip-card {
    background-color: transparent;
    perspective: 1000px;
    height: 300px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
}

/* Style the back side */
.flip-card-back {
    display: flex;
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    overflow-y: auto;
}
</style>