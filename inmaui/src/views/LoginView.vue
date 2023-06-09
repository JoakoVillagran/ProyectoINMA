<template>

<NavBar tituloPag="Inicio de sesion" :mostrarSidenav="false"></NavBar>

<div class="container justify-content-center ">
    <div class="row justify-content-center">
        <div class="col-md-6 5">
            <div class="login-wrap p-4 p-md-5">
                <form >
                    <label class="label">Correo</label>
                    <div class="form-group">
                        <input type="email" class="form-control rounded-left" name="email"
                               placeholder="Ingrese su Email" required/>
                    </div>
                    <p></p>

                    <div class="form-group mb-3">
                        <label class="label">Contrase&ntilde;a</label>
                        <input type="password" class="form-control" name="password"
                               placeholder="Ingrese su Contrase&ntilde;a" required/>
                    </div>

                   
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-danger">
                            Iniciar Sesion
                        </button>
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import NavBar from '../components/NavBar.vue';

export default {
    components: {
        NavBar,
    }

};
</script>

<style>
</style>