<template>
    <nav class="navbar navbar-custom">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 px-5">Registrar usuario</span>
        </div>
    </nav>

    <div class="container justify-content-center">
        <div class="row justify-content-center">
            <div class="col-md-6 col-lg-5">
                <div class="login-wrap p-4 p-md-5">
                    <form @submit.prevent="registrarUsuario">
                        <input type="hidden" />
                        <div class="form-group">
                            <label class="col-form-label">Email</label>
                            <input type="email" class="form-control" v-model="usuario.email" placeholder="Ingrese su Email"
                                required />
                        </div>
                        <div>
                            <label class="col-form-label">Contraseña</label>
                            <input type="password" class="form-control" v-model="usuario.contrasena" required minlength="2"
                                maxlength="10" placeholder="Ingrese su Contraseña" />
                        </div>
                        <div>
                            <label class="col-form-label">Nombre</label>
                            <input type="text" class="form-control" v-model="usuario.nombre" required minlength="2"
                                maxlength="20" placeholder="Ingrese su Nombre" />
                        </div>
                        <div>
                            <label class="col-form-label">Rut</label>
                            <input type="text" class="form-control" v-model="usuario.rut" required minlength="2"
                                maxlength="20" placeholder="Ingrese su Rut" />
                        </div>
                        <div>
                            <label class="col-4 col-form-label">Roles:</label>
                            <div class="col-8">
                                <select v-model="usuario.rol" class="form-control">
                                    <option value="TRABAJADOR">Trabajador</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <a href="/admin" type="button" class="btn btn-danger my-3">Cancelar</a>
                            <button type="submit" class="btn btn-primary"
                                style="background-color: #00ADB5; border: #00ADB5">Aceptar</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            usuario: {
                email: '',
                contrasena: '',
                nombre: '',
                rut: '',
                rol: ''
            },

        };
    },
    methods: {
        registrarUsuario() {
            axios.post('http://localhost:3000/registrar', this.usuario)
                .then(response => {
                    console.log(response)
                    console.log('Usuario registrado con éxito');
                    this.$router.push('/admin');
                })
                .catch(error => {
                    alert(error.response.data.message)
                    console.error('Error al registrar el usuario:', error);
                });
        }
    }
};
</script>
  
  