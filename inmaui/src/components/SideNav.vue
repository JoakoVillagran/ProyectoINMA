<template>
  <div class="sidenav d-flex flex-column justify-content-between h-100">
    <div>
      <div>
        <a href="/bodega">
          <i class="bi bi-box2 fs-3"></i>
          Bodega
        </a>
      </div>
      <a href="/caja">
        <i class="bi bi-cart2 fs-1"></i>
        Caja
      </a>
      <div>
        <a href="/admin">
          <i class="bi bi-person-square fs-2"></i>
          Admin
        </a>
      </div>
    </div>
    <div class="container justify-content-between">
      <form>
        <a href="/" style="background-color: #00ADB5; border-color: #00ADB5" @click="salir">
          <i class="bi bi-box-arrow-right fs-2"></i>
          <h6>Salir</h6>
        </a>
      </form>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'SideNav',
  methods: {
    salir() {
      localStorage.removeItem('token');
    }
  } 
};
</script>
  
<style>
.sidenav {
  height: 100%;
  width: 100px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #00ADB5;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 10px 10px 6px;
  text-decoration: none;
  font-size: 20px;
  color: #1C1B1F;
  display: block;
  text-align: center;
}

.sidenav a:hover {
  color: #f1f1f1;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}
</style>
  