<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="product-card">
        <img id="product" src="../assets/Hoodie.png" alt="Hoodie">
        <h5>Sweatshirt</h5>
        <p class="description">Beskrivning</p>
        <p>599:-</p>
        <button id="buy-button">Buy</button>
    </div>
</template>

<style scoped>
.product-card {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#product {
    width: 30vw;
}

.description {
    font-size: .8rem;
}

#buy-button {
    border: none;
    padding: .5rem 1rem .5rem 1rem;

}


</style>
