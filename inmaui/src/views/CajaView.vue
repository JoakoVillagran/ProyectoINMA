<template>
    <nav class="navbar navbar-custom py-3">
        <div class="container ">
            <span class="navbar-brand mb-0 px-3" style="font-family:arial;">Vender Producto</span>
        </div>
    </nav>


    <div class="sidenav d-flex flex-column justify-content-between h-100">
        <div >
            <a href="/bodega">

                <i class="bi bi-box2 fs-3"></i>
                Bodega
            </a>
        </div>
            <a href="/caja">

                <i class="bi bi-cart2 fs-1"></i>
                Caja
            </a>
        <div >
            <a href="/admin">
                <i class="bi bi-person-square fs-2"></i>
                Admin
            </a>
            
        </div>
    

        <div class="container justify-content-between">
            <form >
                <a href="/" style="background-color: #00ADB5; border-color: #00ADB5">
                <i class="bi bi-box-arrow-right fs-2"></i>
                <h6>Salir</h6>
            </a>
            </form>
        </div>
        

    </div>

    <div class="main">
        <div class="container-fluid">
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Categoria</th>
                    <th>Cantidad</th>
                    <th>&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td >1</td>
                    <td >Pepsi</td>
                    <td >01/01/2023</td>
                    <td >Bebidas</td>
                    <td >100</td>


                    <td>
                        <a class="btn btn-secondary"> Vender </a>

                    </td>
                </tr>
                <tr >
                    <td >2</td>
                    <td >Helado</td>
                    <td >01/01/2023</td>
                    <td >Helados</td>
                    <td >30</td>


                    <td>
                        <a class="btn btn-secondary"> Vender </a>

                    </td>
                </tr>
                </tbody>
            </table>
        </div>



        <div class="container-fluid">
            <h3>Boleta</h3>

            <table class="table">
                <thead>
                    <tr>

                        <th>Nombre Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Quitar Producto</th>
                    </tr>
                </thead>
                <tbody>
                <tr>

                    <td>Helado</td>
                    <td >1000</td>
                    <td >2</td>
                    <td >2000</td>



                    <td> <a  class="btn btn-danger"> Eliminar </a></td>
                </tr>
                </tbody>

            </table>


            <div style="text-align: right; ">
                <a  class="btn btn-danger"> limpiar </a>
                <button type="button" class="btn btn-success"
                    style="background-color:#05EA53; border: #05EA53">Finalizar</button>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style>
</style>