<template>
  <nav class="navbar navbar-custom py-3">
    <div class="container">
      <span class="navbar-brand" style="font-family: arial;">{{ tituloPag }}</span>

      <button v-if="inventario" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#popupbodega"
        style="background-color:#00ADB5; border: #00ADB5; color: #f1f1f1"><span class="bi bi-plus-lg"></span>
        Nuevo Producto
      </button>

    </div>
  </nav>

  <div v-if="mostrarSidenav">
    <SideNav></SideNav>
  </div>
</template>
  
<script>

import SideNav from "../components/SideNav.vue"

export default {
  name: 'NavBar',
  components: {
    SideNav
  },
  props: {
    tituloPag: {
      type: String,
      required: true
    },
    inventario: {
      type: Boolean,

    },
    mostrarSidenav: {
      type: Boolean,
      default:true
    },
  }
};
</script>
  
<style>
.navbar-custom {
  background-color: #393E46;
}

.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
  color: #FFFF;
}
</style>
  