<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-10">
                <h3>Configurações</h3>
            </div>
            <div class="col-md-2">
                <RouterLink to="/" class="btn btn-outline-secondary">Voltar</RouterLink>
            </div>
        </div>
       
        <hr>
        <div class="d-flex">
            <div class="form-group mr-3">
                <label for="inputPgSize">Page Size</label>
                <input type="number" class="form-control" id="inputPgSize" v-model="cfg.pgSize">
            </div>
            <div class="form-group">
                <label for="paginationMode">Modo de Paginação</label>
                <select id="paginationMode" class="form-control" v-model="cfg.paginationMode">
                    <option value="Auto">Automática</option>
                    <option value="Manual">Manual</option>
                </select>
            </div>
        </div>
       
        <div class="d-flex">
            <div class="toggle-switch">
                <p class="mb-1">Filtrar Cidade</p>
                <input type="checkbox" id="filtraCidade" class="d-none" @click="cfg.filtrarCidade = !cfg.filtrarCidade"
                v-model="cfg.filtrarCidade">
                <label for="filtraCidade" class="button"></label>
            </div>
            <div class="form-group mr-3" v-if="cfg.filtrarCidade">
                <label for="inputCidade">Cidade</label>
                <input type="number" class="form-control" id="inputCidade" v-model="cfg.cidade">
            </div>
            <div class="form-group" v-if="cfg.filtrarCidade">
                <label for="selectCidade">Nome</label>
                <select class="form-control" id="selectCidade" v-model="cfg.cidade">
                    <option :value="1">Londrina</option>
                    <option :value="15">Maringá</option>
                    <option :value="324">São Paulo</option>
                    <option :value="323">Campinas</option>
                    <option :value="6">Apucarana</option>
                    <option :value="99">Curitiba</option>
                </select>
            </div>
        </div>
        <div class="d-flex">
            <div class="toggle-switch">
                <p class="mb-1">Programados</p>
                <input type="checkbox" id="programados" class="d-none" @click="cfg.programados = !cfg.programados"
                v-model="cfg.programados">
                <label for="programados" class="button"></label>
            </div>
            <div class="toggle-switch">
                <p class="mb-1">Não Programados</p>
                <input type="checkbox" id="naoProgramados" class="d-none"  @click="cfg.naoProgramados = !cfg.naoProgramados"
                v-model="cfg.naoProgramados">
                <label for="naoProgramados" class="button"></label>
            </div>
        </div>

        <div class="mb-3 mt-4">
            <h5>Empresas</h5>
            <hr>
        </div>

        <div class="row">
            <div class="col-4 col-sm-2">
                <p class="mb-1">VGL</p>
                <input type="checkbox" id="toggleEmpresaVgl" class="d-none" @click="cfg.empresaVgl = !cfg.empresaVgl"
                v-model="cfg.empresaVgl">
                <label for="toggleEmpresaVgl" class="button empresa-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">EPIL</p>
                <input type="checkbox" id="toggleEmpresaEpil" class="d-none" @click="cfg.empresaEpil = !cfg.empresaEpil"
                v-model="cfg.empresaEpil">
                <label for="toggleEmpresaEpil" class="button empresa-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">BSUL</p>
                <input type="checkbox" id="toggleEmpresaBsul" class="d-none" @click="cfg.empresaBsul = !cfg.empresaBsul"
                v-model="cfg.empresaBsul">
                <label for="toggleEmpresaBsul" class="button empresa-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">STANJO</p>
                <input type="checkbox" id="toggleEmpresaStanjo" class="d-none" @click="cfg.empresaStanjo = !cfg.empresaStanjo"
                v-model="cfg.empresaStanjo">
                <label for="toggleEmpresaStanjo" class="button empresa-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">LSUL</p>
                <input type="checkbox" id="toggleEmpresaLsul" class="d-none" @click="cfg.empresaLsul = !cfg.empresaLsul"
                v-model="cfg.empresaLsul">
                <label for="toggleEmpresaLsul" class="button empresa-field"></label>
            </div>
        </div>

        <div class="mb-3 mt-4">
            <h5>Visibilidade Campos</h5>
            <hr>
        </div>
     
        <div class="row">
            <div class="col-4 col-sm-2">
                <p class="mb-1">Empresa</p>
                <input type="checkbox" id="toggleEmpresa" class="d-none" @click="cfg.mostrarEmpresa = !cfg.mostrarEmpresa"
                v-model="cfg.mostrarEmpresa">
                <label for="toggleEmpresa" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Limpeza</p>
                <input type="checkbox" id="toggleLimpeza" class="d-none" @click="cfg.mostrarLimpeza = !cfg.mostrarLimpeza"
                v-model="cfg.mostrarLimpeza">
                <label for="toggleLimpeza" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Abastec.</p>
                <input type="checkbox" id="toggleAbastecimento" class="d-none" @click="cfg.mostrarAbastecimento = !cfg.mostrarAbastecimento"
                v-model="cfg.mostrarAbastecimento">
                <label for="toggleAbastecimento" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Mecanica</p>
                <input type="checkbox" id="toggleMecanica" class="d-none" @click="cfg.mostrarMecanica = !cfg.mostrarMecanica"
                v-model="cfg.mostrarMecanica">
                <label for="toggleMecanica" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Eletrica</p>
                <input type="checkbox" id="toggleEletrica" class="d-none" @click="cfg.mostrarEletrica = !cfg.mostrarEletrica"
                v-model="cfg.mostrarEletrica">
                <label for="toggleEletrica" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Carroceria</p>
                <input type="checkbox" id="toggleCarroceria" class="d-none" @click="cfg.mostrarCarroceria = !cfg.mostrarCarroceria"
                v-model="cfg.mostrarCarroceria">
                <label for="toggleCarroceria" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Borracharia</p>
                <input type="checkbox" id="toggleBorracharia" class="d-none" @click="cfg.mostrarBorracharia = !cfg.mostrarBorracharia"
                v-model="cfg.mostrarBorracharia">
                <label for="toggleBorracharia" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Geral</p>
                <input type="checkbox" id="toggleGeral" class="d-none" @click="cfg.mostrarGeral = !cfg.mostrarGeral"
                v-model="cfg.mostrarGeral">
                <label for="toggleGeral" class="button deactivatable-field"></label>
            </div>
            <div class="col-4 col-sm-2">
                <p class="mb-1">Reforma</p>
                <input type="checkbox" id="toggleReforma" class="d-none" @click="cfg.mostrarReforma = !cfg.mostrarReforma"
                v-model="cfg.mostrarReforma">
                <label for="toggleReforma" class="button deactivatable-field"></label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { painelConfiguration } from '@/stores/configuration';
import { onMounted, reactive, watch } from 'vue';

    onMounted(()=>{

        cfg.pgSize = painelConfiguration().pgSize;
        cfg.paginationMode = painelConfiguration().paginationMode;
        cfg.cidade = painelConfiguration().cidade;
        cfg.programados = painelConfiguration().programados;
        cfg.naoProgramados = painelConfiguration().naoProgramados;
        cfg.filtrarCidade = painelConfiguration().filtrarCidade;
        cfg.mostrarEmpresa = painelConfiguration().mostrarEmpresa;
        cfg.mostrarGeral = painelConfiguration().mostrarEmpresa;
        cfg.mostrarLimpeza = painelConfiguration().mostrarLimpeza;
        cfg.mostrarAbastecimento = painelConfiguration().mostrarAbastecimento;
        cfg.mostrarMecanica = painelConfiguration().mostrarMecanica;
        cfg.mostrarEletrica = painelConfiguration().mostrarEletrica;
        cfg.mostrarCarroceria = painelConfiguration().mostrarCarroceria;
        cfg.mostrarBorracharia = painelConfiguration().mostrarBorracharia;
        cfg.mostrarGeral = painelConfiguration().mostrarGeral;
        cfg.mostrarReforma = painelConfiguration().mostrarReforma;
        cfg.empresaVgl = painelConfiguration().empresaVgl;
        cfg.empresaEpil = painelConfiguration().empresaEpil;
        cfg.empresaBsul = painelConfiguration().empresaBsul;
        cfg.empresaStanjo = painelConfiguration().empresaStanjo;
        cfg.empresaLsul = painelConfiguration().empresaLsul;
    })

    const cfg = reactive({
        pgSize: null,
        paginationMode: null,
        cidade: null,
        programados: null,
        naoProgramados: null,
        filtrarCidade: null,
        mostrarEmpresa: null,
        mostrarLimpeza: null,
        mostrarAbastecimento: null,
        mostrarMecanica: null,
        mostrarEletrica: null,
        mostrarCarroceria: null,
        mostrarBorracharia: null,
        mostrarGeral: null,
        mostrarReforma: null,
        empresaVgl: null,
        empresaEpil: null,
        empresaBsul: null,
        empresaStanjo: null,
        empresaLsul: null
    })

    watch(cfg, 
    () => {
            painelConfiguration().updateCfg(cfg.cidade, cfg.pgSize, cfg.paginationMode, cfg.programados, cfg.naoProgramados, cfg.filtrarCidade, cfg.mostrarEmpresa,
                cfg.mostrarLimpeza, cfg.mostrarAbastecimento, cfg.mostrarMecanica, cfg.mostrarEletrica, cfg.mostrarCarroceria, cfg.mostrarBorracharia, cfg.mostrarGeral, cfg.mostrarReforma,
                cfg.empresaVgl, cfg.empresaEpil, cfg.empresaBsul, cfg.empresaStanjo, cfg.empresaLsul
            );

        },
        {
            deep: true
        }
    )
    
    watch([() => cfg.filtrarCidade], () => {

        if(!cfg.filtrarCidade) cfg.cidade = null;
        if(cfg.filtrarCidade) cfg.cidade = 1;

    })

</script>

<style lang="scss">
    #inputPgSize{
        max-width: 80px
    }
    #inputCidade{
        max-width: 80px
    }

    .toggle-switch{
    display: flex-start;
    align-items: center;
    margin-right: 2rem
}

.toggle-switch:first-child{
    padding-left: 0rem;
}

.button{
    width: 60px;
    height: 30px;
    background-color: #d2d2d2;
    border-radius: 80px;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
}

.button::before{
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 200px;
    margin: 5px;
    transition: 0.2s;
}

input:checked + .button{
    background-color: rgb(121, 190, 144);
}

input:checked + .deactivatable-field{
    background-color: rgb(162, 121, 190) !important;
}

input:checked + .empresa-field{
    background-color: rgb(209, 139, 127) !important;
}

input:checked + .button::before{
    transform: translateX(30px);
    animation-name: toggle;
    animation-duration: 0.2s;
}
</style>
