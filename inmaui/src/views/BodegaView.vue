<template>
    <NavBar tituloPag="Inventario" :inventario="true"></NavBar>


    <div class="modal fade" id="popupbodega">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Nuevo Producto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>

                        <div class="mb-3">
                            <label class="col-form-label">Nombre</label>
                            <input name="nombre" type="text" class="form-control" placeholder="Ingrese Nombre Producto"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Categoria</label>
                            <input name="categoria" type="text" class="form-control" placeholder="Ingrese Categoria"
                                required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Precio</label>
                            <input name="precio" type="text" class="form-control" placeholder="Ingrese Precio" required>
                        </div>
                        <div class="mb-3">
                            <label class="col-form-label">Cantidad</label>
                            <input name="cantidad" type="text" class="form-control" placeholder="Ingrese Cantidad" required>
                        </div>


                        <div class="modal-footer">
                            <input type="submit" class="btn btn-primary" style="background-color:#00ADB5; border:#F6648C;">

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="main">
        <div class="container-fluid">
            <TablaInventario></TablaInventario>
        </div>

    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
import TablaInventario from '../components/TablaInventario.vue';

export default {
    components: {
        NavBar,
        TablaInventario,
    }

};
</script>

