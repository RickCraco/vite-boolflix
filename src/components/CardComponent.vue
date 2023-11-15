<template>
    <div class="col-2">
        <img :src="img" :alt="title">
        <div>
            <p>{{ title }}</p>
            <p>{{ originalTitle }}</p>
            <p>{{ lingua }}</p>
            <p>{{ voto }}</p>
        </div>
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

<style lang="scss" scoped></style>