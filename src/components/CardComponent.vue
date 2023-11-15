<template>
    <div class="row">
        <div class="col">
            <img :src="img" :alt="title">
            <div>
                <h3>{{ title }}</h3>
                <p>{{ originalTitle }}</p>
                <p>{{ lingua }}</p>
                <p>{{ voto }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props:{
            title: String,
            originalTitle: String,
            lingua: String,
            voto: String,
            img: String,
        },
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>