<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <routerLink class="nav-link active" aria-current="page" to="/">START</routerLink>
          </li>
          <li class="nav-item">
            <routerLink class="nav-link" to="/tour">TOUR</routerLink>
          </li>
          <li class="nav-item">
            <routerLink class="nav-link" to="/store">STORE</routerLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<RouterView />
</template>
<style scoped>
.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    border: none;
    box-shadow: none;
}
.navbar-toggler-icon{
    font-size: 2rem;
}
.nav-link{
  font-size: 1.5rem;
  margin-left: 1vw;
}
</style>
