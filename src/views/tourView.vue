<script>
  export default {
    created() {
      fetch("/tour.json")
        .then(response => response.json())
        .then(result => {
          this.plays = result
        })
    },
    data() {
      return {
        plays: null
      }
    }
  }
</script>
<template>
    <div class="tour">
      <h1>TOUR</h1>
      <ul v-for="play in plays">
        <li id="li-city"> {{ play.city }} </li>
        <li id="li-arena"> {{ play.arena }} </li>
        <li id="li-date"> {{ play.date }} </li>
        <div id="line"></div>
      </ul>
    </div>
</template>

<style scoped>

h1 {
  margin: 1rem 0 0 2rem;
  font-size: 6vw;
}

ul {
  text-align: center;
  padding: 0;
}

li {
  list-style: none;
  font-size: 2vw;
}

#li-arena {
  font-size: 3vw;
  font-style: bold;
}

#line {
    height: 1.2vh;
    background-color: #231d22;
    margin-top: 4vh;
}
</style>
