<template>
    <div class="col-2">
        <img :src="img" :alt="title" class="w-100">
        <ul>
            <li>{{ title }}</li>
            <li>{{ originalTitle }}</li>
            <li>{{ lingua }}</li>
            <li>{{ voto }}</li> 
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        title: String,
        originalTitle: String,
        lingua: String,
        voto: String,
        img: String,
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    ul{
        list-style: none;
    }
</style>