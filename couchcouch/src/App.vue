<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Heading from "./components/Heading.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
    <Heading />
    <RouterView />
    <Footer />
</template>

<style scoped>
</style>
