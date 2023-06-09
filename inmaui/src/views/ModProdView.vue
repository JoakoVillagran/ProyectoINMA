<template>
<nav class="navbar navbar-custom">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 px-5">Modificar Producto</span>

    </div>

</nav>

<div class="container justify-content-center ">
    <div class="row justify-content-center">
        <div class="col-md-6 col-lg-5">
            <div class="login-wrap p-4 p-md-5">
                <form >
                    <input type="hidden" />
                    <div class="mb-3">
                        <label class="col-form-label">Nombre</label>
                        <input name="nombre" type="text"  class="form-control"
                               placeholder="Ingrese Nombre Producto" required/>
                    </div>

                    <div class="mb-3">
                        <label class="col-form-label">Categoria</label>
                        <input name="categoria" type="text"  class="form-control"
                               placeholder="Ingrese Categoria" required>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Precio</label>
                        <input name="precio" type="text" class="form-control"
                               placeholder="Ingrese Cantidad" required>
                    </div>
                    <div class="mb-3">
                        <label class="col-form-label">Cantidad</label>
                        <input name="cantidad" type="text"  class="form-control"
                               placeholder="Ingrese Cantidad" required>
                    </div>


                    <div class="modal-footer ">
                        <a href="/bodega" type="button" class="btn btn-danger">Cancelar</a>
                        <button type="submit" class="btn btn-primary"
                                style="background-color:#00ADB5; border:#F6648C;">Aceptar
                        </button>

                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
</script>

<style>
</style>