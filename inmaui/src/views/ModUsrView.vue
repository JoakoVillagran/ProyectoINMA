<template>
  <NavBar tituloPag="Modificar Usuario" :mostrarSidenav="false"></NavBar>

  <div class="container justify-content-center ">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-5">
        <div class="login-wrap p-4 p-md-5">
          <form @submit.prevent="guardarCambios">
            <input type="hidden" v-model="usuario._id" />
            <div class="form-group">
              <label class="col-form-label">Email</label>
              <input type="email" class="form-control" v-model="usuario.email" placeholder="Ingrese su Email" required />
            </div>
            <div>
              <label class="col-form-label">Nombre</label>
              <input type="text" class="form-control" v-model="usuario.nombre" required minlength="2" maxlength="20"
                placeholder="Ingrese su Nombre" />
            </div>
            <div>
              <label class="col-form-label">RUT</label>
              <input type="text" class="form-control" v-model="usuario.rut" required minlength="2" maxlength="20"
                placeholder="Ingrese su RUT" />
            </div>
            <div v-if="usuario._id != '64a634bef6928f6274d30499'">
              <label class="col-4 col-form-label">Roles:</label>
              <div class="col-8">
                <select v-model="usuario.rol" class="form-control">
                  <option value="CAJERO">Cajero</option>
                  <option value="BODEGUERO">Bodeguero</option>
                  <option value="ADMIN">Admin</option>
                </select>
              </div>
            </div>

            <div>
              <button type="submit" class="btn btn-primary my-3"
                style="background-color: #00ADB5; border: #00ADB5">Aceptar</button>
              <a href="/admin" type="button" class="btn btn-danger">Cancelar</a>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import axios from 'axios';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      usuario: {
        _id: '',
        email: '',
        contrasena: '',
        nombre: '',
        rut: '',
        roles: []
      },
    };
  },
  mounted() {
    const usuarioId = this.$route.params.id;
    console.log(usuarioId)
    this.obtenerUsuario(usuarioId);
  },
  methods: {
    obtenerUsuario(usuarioId) {
      axios.get(`http://localhost:3000/usuarios/${usuarioId}`)
        .then(response => {
          this.usuario = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    guardarCambios() {
      axios.put(`http://localhost:3000/modusr/${this.usuario._id}`, this.usuario)
        .then(() => {
          this.$router.push('/admin');
        })
        .catch(error => {
          console.error(error);
          alert('Error al guardar los cambios');
        });
    }
  }
};
</script>