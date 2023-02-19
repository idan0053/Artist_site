<script setup>
import NewsletterForm from '../components/NewsletterForm.vue'
import MadeBy from '../components/MadeBy.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
    data() {
      return {
        showForm: false,
      }
    }
  }
</script>

<template>
    <body>
        <h1>DERMOT KENNEDY</h1>
        <img src="/src/assets/Dermot.jpeg" alt="Picture of Dermot Kennedy">
        <h2>SINGER <br> SONGWRITER</h2>
        <div id="line"></div>
        <ul>
            <li>
                <a @click="showForm = true">SIGN UP FOR NEWSLETTER</a>
            </li>
            <li id="tour-link">
                <RouterLink to="/tour">TOUR</RouterLink>
            </li>
            <li id="store-link">
                <RouterLink to="/store">STORE</RouterLink>
            </li>
            <li id="made-by">
                <MadeBy name="Ida Andersson"/>
            </li>
        </ul>
        <div id="news-form"  v-if="showForm">
            <NewsletterForm />
        </div>
        <div id="shadow" v-if="showForm"></div>
    </body>
    <RouterView />
</template>

<style scoped>
body {
    position: relative;
}

h1 {
    font-size: 8vw;
    margin-top: 8vh;
    margin-left: 3vw;
}

img {
    width: 35vw;
    margin-top: 4vh;
    margin-left: 3vw;
}

h2 {
    font-size: 4vw;
    float: right;
    text-align: right;
    margin-top: 16vw;
    margin-right: 3vw;
}

#line {
    height: 1.2vh;
    background-color: #231d22;
    margin-top: 8vh;
}

ul {
    list-style-type: none;
    display: flex;
}

a:hover {
    color: blueviolet;
}

a {
    cursor: pointer;
    margin-left: .3rem;
    text-decoration: none;
    color: #231d22;
}

li:hover {
    color: blueviolet;
}

#made-by {
    margin-left: 40%;
}

#made-by:hover {
    color: #231d22;
}

#tour-link {
    margin-left: 4vw;
}

#store-link {
    margin-left: 4vw;
}

#news-form {
    position: absolute;
    top: 10%;
    left: 30%;
    z-index: 2;
}

#shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: #231d2280;
    z-index: 1;
}
</style>
