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
        <li> {{ play.city }} </li>
        <li> {{ play.arena }} </li>
        <li> {{ play.date }} </li>
      </ul>

    </div>
  </template>

  <style>

  </style>
