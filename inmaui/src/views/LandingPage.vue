<template>
  <div class="landing-page">
    <div class="background-image"></div>
    <div class="content">
      <h1>Bienvenido a INMA</h1>
      <a href="/login" type="button" class="btn btn-primary" style="background-color:#00ADB5; border: #00ADB5;">Iniciar
        sesion</a>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    redirectToSomething() {
      // Aquí puedes agregar la lógica para redirigir a otra página o realizar una acción
    }
  }
}
</script>
  
<style scoped>
.landing-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://lh3.googleusercontent.com/p/AF1QipNAswjw7UKTacHVgjVy9qbmJUPwaHQf3fD3Gtr3=s680-w680-h510');
  background-size: cover;
  background-position: center;
  opacity: 0.5;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

h1 {
  font-size: 36px;
  color: #fff;
}

button {
  padding: 12px 24px;
  font-size: 18px;
  background-color: #ff5500;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
  