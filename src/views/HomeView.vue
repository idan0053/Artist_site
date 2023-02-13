<script setup>
import NewsletterForm from '../components/NewsletterForm.vue'
</script>

<script>
export default {
    data() {
      return {
        showForm: false
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
        </ul>
        <div id="news-form"  v-if="showForm">
            <NewsletterForm />
        </div>
        <div id="shadow" v-if="showForm"></div>
    </body>
</template>

<style scoped>

body {
    position: relative;
}

h1 {
    font-size: 8vw;
    margin-top: 12vh;
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
    margin-top: 15vw;
    margin-right: 3vw;
}

#line {
    height: 1.2vh;
    background-color: #231d22;
    margin-top: 9vh;
}

ul {
    list-style-type: none;
    display: flex;
}

li {
    margin-left: 3vw;
}

a {
    cursor: pointer;
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
