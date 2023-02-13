<script>
  export default {
    created() {
      fetch("/store.json")
        .then(response => response.json())
        .then(result => {
          this.items = result
        })
    },
    data() {
      return {
        items: null
      }
    }
  }
</script>

<template>
    <div id="container">
        <div class="product-card" v-for="item in items">
            <img id="product" v-if="item.product === 'SONDER: WHITE LP EDITION'" src="../assets/LP.png" alt="Picture of LP">
            <img id="product" v-else-if="item.product === 'GREY WICKLOW ZIP HOODIE'" src="../assets/Hoodie.png" alt="Picture of Hoodie">
            <img id="product" v-else-if="item.product === 'SONDER: ZINE CD EDITION'" src="../assets/CD.png" alt="Picture of CD bundle">

            <h5> {{ item.product }} </h5>
            <p class="description"> {{ item.description }}</p>
            <p> {{ item.price }}:- </p>
            <button id="buy-button">Buy</button>
        </div>
    </div>
</template>

<style scoped>

#container {
 display: flex;
 justify-content: center;
}
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
    font-size: .7rem;
    padding: 0 3rem;
}

#buy-button {
    border: none;
    padding: .5rem 1rem .5rem 1rem;

}


</style>
