<template>
    <header>
        <nav class="navbar navbar-light container">
            <div class="row col-12">
                <div class="col-10">
                    <div class="row d-flex">
                        <a class="navbar-brand pt-sm-2 d-flex" href="#">
                            <img src="../assets/viacaogarcia-logo.jpg" alt="VGLLogo">
                            <img src="../assets/brsul-logo.jpg" alt="BSLogo">
                        </a>
                        <h4 class="pt-sm-3 mt-2">Dashboard | Veículos - Ordens Serviço</h4>
                    </div>
                </div>
                <div class="col-2 mt-3 button-container">
                        <RouterLink class="btn btn-outline-dark" to="/configuration"><Icon icon="bi:gear" width="24" height="24"/></RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';

</script>

<!-- O elemento scoped faz com que o style seja aplicado apenas a esse componente. -->
<style lang="scss" scoped>

header {

    background-color: rgb(26, 25, 25);
    color: rgb(248, 248, 248);

    nav {
        .navbar-brand {
            display: flex;
            align-items: center;
            gap: 8px;

            img {
                max-width: 50px;
            }

            .img-small {
                max-width: 25px;
            }

            h1 {
                font-size: 24px;
            }
        }

        #navbarNav {
            gap: 12px;

            a {
                color: inherit;
            }
        }
    }

    .container {
        max-width: 1700px;
        margin: 0 auto;
    }

    .button-container{
        max-height: 40px;
        max-width: 40px;
    }

}
</style>