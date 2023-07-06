<template>
    <NavBar tituloPag="Vista de Administrador"></NavBar>

    <div class="main">
        <h1 class="py-3">Usuarios</h1>

        <div class="row">
            <div class="col-md-12">
                <div class="table">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>RUT</th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Email</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="usuario in usuarios" :key="usuario.id">
                                <td>{{ usuario.rut }}</td>
                                <td>{{ usuario.nombre }}</td>
                                <td>{{ usuario.rol }}</td>
                                <td>{{ usuario.email }}</td>
                                <td>
                                    <button class="btn btn-secondary mr-2" @click="modificarUsuario(usuario._id)">Modificar
                                        Usuario</button>
                                    <button class="btn btn-danger" @click="eliminarUsuario(usuario._id)">Quitar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div style="text-align: right; ">
            <a href="/registrar" type="button" class="btn btn-primary" style="background-color:#00ADB5; border: #00ADB5;">
                <span class="bi bi-plus-lg"></span> Nuevo Usuario
            </a>
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
            usuarios: []
        };
    },
    mounted() {
        this.obtenerUsuarios();
    },
    methods: {
        obtenerUsuarios() {
            axios.get('http://localhost:3000/usuarios')
                .then(response => {
                    this.usuarios = response.data;

                })
                .catch(error => {
                    console.error(error);
                });
        },
        modificarUsuario(usuarioId) {
            // Redirigir a la vista ModUsrView.vue con el ID del usuario como parámetro
            console.log(usuarioId);
            this.$router.push(`modusr/${usuarioId}`);
        },
        eliminarUsuario(usuarioId) {
            // Lógica para eliminar usuario
            console.log('Eliminar usuario', usuarioId);
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

.main {
    margin-left: 110px;
    font-size: 20px;
    padding: 0px 20px;
}

@media screen and (max-height: 450px) {
    .sidenav {
        padding-top: 15px;
    }

    .sidenav a {
        font-size: 18px;
    }
}

.navbar-custom {
    background-color: #393E46;
}

.navbar-custom .navbar-brand,
.navbar-custom .navbar-text {
    color: #FFFF;
}

body {
    background-color: #f5f5f5;
}
</style>