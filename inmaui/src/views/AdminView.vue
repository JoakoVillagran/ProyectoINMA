<template>
    <nav class="navbar navbar-custom py-3">
    <div class="container">
        <span class="navbar-brand" style="font-family:arial;">Vista de Administrador</span>
    </div>
</nav>


<div class="sidenav d-flex flex-column justify-content-between h-100">
    <div>
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
    </div>
    <div class="container justify-content-between">
        <form  >
            <a href="/landing" style="background-color: #00ADB5; border-color: #00ADB5">
                <i class="bi bi-box-arrow-right fs-2"></i>
                <h6>Salir</h6>
            </a>
        </form>
    </div>


</div>

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
                    <tr>
                        <td>11222333-4</td>
                        <td>Osvaldo</td>
                        <td>Cajero</td>
                        <td>email@email.com</td>
                        <td>
                            <a href="/modusr" class="btn btn-secondary"> Modificar
                                Usuario </a>
                            <a class="btn btn-danger"> Quitar </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <div style="text-align: right; ">
        <a href="/registrar" type="button" class="btn btn-primary"
           style="background-color:#00ADB5; border: #00ADB5;"><span
                class="bi bi-plus-lg"></span> Nuevo Usuario
        </a>
    </div>
</div>
</template>

<script>
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