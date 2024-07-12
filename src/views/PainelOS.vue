<template>
    <table id="tabelaA">
        <!-- Títulos tabela-->
        <tr id="linhaCabecalho">
            <td id="tdEmpresaA" v-if="painelConfiguration().mostrarEmpresa">
                <div class="d-flex justify-content-center">EMPRESA</div>
            </td>
            <td id="tdLocalA">
                <div class="d-flex justify-content-center">LOC.</div>
            </td>
            <td id="tdVeiculoA">
                <div class="d-flex justify-content-center">VEICULO</div>
            </td>
            <td id="tdLimpezaA" v-if="painelConfiguration().mostrarLimpeza">
                <div class="d-flex justify-content-center" title="Limpeza">
                    <Icon icon="mdi:cleaning" width="44px" height="39px" />
                </div>
            </td>
            <td id="tdAbastecimentoA" v-if="painelConfiguration().mostrarAbastecimento">
                <div class="d-flex justify-content-center" title="Abastecimento">
                    <Icon icon="fa6-solid:gas-pump" width="30px" height="34px" />
                </div>
            </td>
            <td id="tdMecanicaA" v-if="painelConfiguration().mostrarMecanica">
                <div class="d-flex justify-content-center" title="Mecânica">
                    <Icon icon="heroicons:wrench-screwdriver-solid" width="30px" height="34px" />
                </div>
            </td>
            <td id="tdEletricaA" v-if="painelConfiguration().mostrarEletrica">
                <div class="d-flex justify-content-center" title="Elétrica">
                    <Icon icon="simple-icons:lightning" width="34px" height="34px" />
                </div>
            </td>
            <td id="tdCarroceriaA" v-if="painelConfiguration().mostrarCarroceria">
                <div class="d-flex justify-content-center" title="Carroceria">
                    <Icon icon="mingcute:bus-2-fill" width="34px" height="34px" />
                </div>
            </td>
            <td id="tdBorrachariaA" v-if="painelConfiguration().mostrarBorracharia">
                <div class="d-flex justify-content-center" title="Borracharia">
                    <Icon icon="game-icons:flat-tire" width="34px" height="34px" />
                </div>
            </td>
            <td id="tdGeralA" v-if="painelConfiguration().mostrarGeral">
                <div class="d-flex justify-content-center" title="Geral">
                    <Icon icon="map:general-contractor" width="34px" height="34px" />
                </div>
            </td>
            <td id="tdReformaA" v-if="painelConfiguration().mostrarReforma">
                <div class="d-flex justify-content-center" title="Reforma">
                    <Icon icon="ic:baseline-bus-alert" width="34px" height="34px" />
                </div>
            </td>
            <td id="tdPrevTerminoA">
                <div class="d-flex justify-content-center">PREV.TERM.</div>
            </td>
            <td id="tdDiasA">
                <div class="d-flex justify-content-center"><Icon icon="tabler:calendar-plus" width="34px" height="34px" /></div>
            </td>
            <td id="tdDiasA">
                <div class="d-flex justify-content-center"><Icon icon="mdi:mechanic" width="34px" height="34px" /></div>
            </td>
            <td id="tdProxViagemA">
                <div class="d-flex justify-content-center">PRÓX.VIAG</div>
            </td>
            <td id="tdDestinoA">
                <div class="d-flex justify-content-center">DEST.</div>
            </td>
            <td id="tdRevisaoA">
                <div class="d-flex justify-content-center">REV.</div>
            </td>
        </tr>
        <!-- Linhas Tabela - Com OS -->
        <tr v-if="listagemCfg.itens" v-for="consulta in listagemCfg.itens">
            <td v-if="painelConfiguration().mostrarEmpresa" class="img-container">
                <img v-if="consulta.empresa == 6" src="../assets/bsul-logo-horiz.jpg" alt="LOGO-BSUL">
                <img v-else-if="consulta.empresa == 1" src="../assets/vgl-logo-horiz.jpg" alt="LOGO-VGL">
                <img v-else-if="consulta.empresa == 17" src="../assets/stanjo-logo-horiz.jpg" alt="LOGO-STANJO">
                <img v-else-if="consulta.empresa == 3" src="../assets/epil-logo-horiz.jpg" alt="LOGO-EPIL">
                <img v-else-if="consulta.empresa == 76" src="../assets/lsul-logo-horiz.jpg" alt="LOGO-LSUL">
            </td>
            <td class="texto-tabela">
                <div class="d-flex justify-content-center">{{ consulta.localidadeAtual }}</div>
            </td>
            <td class="texto-tabela">
                <div class="d-flex justify-content-center">{{ consulta.veiculo }}</div>
            </td>
            <td v-if="painelConfiguration().mostrarLimpeza" :class="{ 'celula-limpeza': consulta.limpeza != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Limpeza') }">
                <div v-if="consulta.limpeza != null && consulta.limpeza.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.limpeza != null && consulta.limpeza.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.limpeza != null && consulta.limpeza.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.limpeza != null && consulta.limpeza.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarAbastecimento"
                :class="{ 'celula-abastecimento': consulta.abastecimento != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Abastecimento') }">
                <div v-if="consulta.abastecimento != null && consulta.abastecimento.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.abastecimento != null && consulta.abastecimento.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.abastecimento != null && consulta.abastecimento.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.abastecimento != null && consulta.abastecimento.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarMecanica" :class="{ 'celula-mecanica': consulta.mecanica != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Mecanica') }">
                <div v-if="consulta.mecanica != null && consulta.mecanica.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.mecanica != null && consulta.mecanica.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.mecanica != null && consulta.mecanica.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.mecanica != null && consulta.mecanica.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarEletrica" :class="{ 'celula-eletrica': consulta.eletrica != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Eletrica')}">
                <div v-if="consulta.eletrica != null && consulta.eletrica.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria"/>
                </div>
                <div v-else-if="consulta.eletrica != null && consulta.eletrica.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.eletrica != null && consulta.eletrica.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.eletrica != null && consulta.eletrica.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarCarroceria"
                :class="{ 'celula-carroceria': consulta.carroceria != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Carroceria') }">
                <div v-if="consulta.carroceria != null && consulta.carroceria.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.carroceria != null && consulta.carroceria.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.carroceria != null && consulta.carroceria.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.carroceria != null && consulta.carroceria.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarBorracharia"
                :class="{ 'celula-borracharia': consulta.borracharia != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Borracharia') }">
                <div v-if="consulta.borracharia != null && consulta.borracharia.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.borracharia != null && consulta.borracharia.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.borracharia != null && consulta.borracharia.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.borracharia != null && consulta.mecanica.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarGeral" :class="{ 'celula-geral': consulta.geral != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Geral') }">
                <div v-if="consulta.geral != null && consulta.geral.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.geral != null && consulta.geral.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.geral != null && consulta.geral.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.geral != null && consulta.geral.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td v-if="painelConfiguration().mostrarReforma" :class="{ 'celula-reforma': consulta.reforma != null, 'categoria-mais-antiga' : consulta.categoriaMaisAntiga.includes('Reforma') }">
                <div v-if="consulta.reforma != null && consulta.reforma.includes('Aberta')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.reforma != null && consulta.reforma.includes('Exec.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.reforma != null && consulta.reforma.includes('Susp.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mingcute:lock-line" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else-if="consulta.reforma != null && consulta.reforma.includes('Pend.')"
                    class="d-flex justify-content-center">
                    <Icon icon="mdi:wrench" width="44px" height="39px" class="icone-categoria" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td class="texto-tabela">
                <div v-if="consulta.previsaoConclusaoFormatada" class="d-flex justify-content-center"
                    :class="{ 'previsao-ultrapassada': new Date(consulta.previsaoConclusao) < new Date() }">{{
                        consulta.previsaoConclusaoFormatada }}</div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="mdi:timer-sand" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td class="texto-tabela">
                <div class="d-flex justify-content-center">{{ consulta.diasDecorridosAber }}</div>
            </td>
            <td class="texto-tabela">
                <div class="d-flex justify-content-center">{{ consulta.diasDecorridosOfic }}</div>
            </td>
            <td class="texto-tabela">
                <div v-if="consulta.dataProximaViagemFormatada" class="d-flex justify-content-center">{{
                    consulta.dataProximaViagemFormatada }}</div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="healthicons:no-outline" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td class="texto-tabela">
                <div v-if="consulta.destinoProximaViagem" class="d-flex justify-content-center">{{
                    consulta.destinoProximaViagem }}</div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="healthicons:no-outline" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
            <td>
                <div v-if="consulta.revisaoVencida" class="d-flex justify-content-center">
                    <Icon icon="fluent-mdl2:event-date-missed-12" style="color: #eb0f0f" width="34px" height="34px" />
                </div>
                <div v-else class="d-flex justify-content-center">
                    <Icon icon="iconoir:check-circle" class="icone-fraco" width="34px" height="34px" />
                </div>
            </td>
        </tr>
    </table>
    <div class="fixed-bottom">
        <table id="tabela-totais">
            <!-- Totais -->
            <tr id="linhaTotais" class="destaque-row">
                <td>
                    <div class="d-flex justify-content-center"></div>
                </td>
                <td>
                    <div class="d-flex justify-content-center">VEICULO</div>
                </td>
                <td v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">LIMPEZA</div>
                </td>
                <td v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">ABASTEC.</div>
                </td>
                <td v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">MECÂNICA</div>
                </td>
                <td v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">ELÉTRICA</div>
                </td>
                <td v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">CARROC.</div>
                </td>
                <td v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">BORRACH.</div>
                </td>
                <td v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">GERAL</div>
                </td>
                <td v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">REFORMA</div>
                </td>
            </tr>

            <tr id="linhaExecucoes" class="parciais-row">
                <td>
                    <div class="d-flex justify-content-center">EXEC :</div>
                </td>
                <td>
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalVeiculosExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalLimpezasExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalAbastecimentosExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalMecanicasExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalEletricasExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalCarroceriasExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalBorrachariasExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalGeraisExec : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalReformasExec : 0 }}</div>
                </td>
            </tr>
            <tr id="linhPendentes" class="parciais-row">
                <td>
                    <div class="d-flex justify-content-center">PEND :</div>
                </td>
                <td>
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalVeiculosPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalLimpezasPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalAbastecimentosPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalMecanicasPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalEletricasPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalCarroceriasPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalBorrachariasPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalGeraisPend : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalReformasPend : 0 }}</div>
                </td>
            </tr>
            <tr id="linhaAbertas" class="parciais-row">
                <td>
                    <div class="d-flex justify-content-center">ABER :</div>
                </td>
                <td>
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalVeiculosAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalLimpezasAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalAbastecimentosAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalMecanicasAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalEletricasAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalCarroceriasAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalBorrachariasAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalGeraisAber : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalReformasAber : 0 }}</div>
                </td>
            </tr>
            <tr id="linhaSuspensas" class="parciais-row">
                <td>
                    <div class="d-flex justify-content-center">SUSP :</div>
                </td>
                <td>
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalVeiculosSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalLimpezasSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalAbastecimentosSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalMecanicasSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalEletricasSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalCarroceriasSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalBorrachariasSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalGeraisSusp : 0 }}</div>
                </td>
                <td v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalReformasSusp : 0 }}</div>
                </td>
            </tr>
            <tr id="linhaTotais" class="destaque-row">
                <td>
                    <div class="d-flex justify-content-center">TOTAL :</div>
                </td>
                <td id="tdVeiculosB">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalVeiculos : 0 }}</div>
                </td>
                <td id="tdLimpezaB" v-if="painelConfiguration().mostrarLimpeza">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalLimpezas : 0 }}</div>
                </td>
                <td id="tdAbastecimentoB" v-if="painelConfiguration().mostrarAbastecimento">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalAbastecimentos : 0 }}</div>
                </td>
                <td id="tdMecanicaB" v-if="painelConfiguration().mostrarMecanica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalMecanicas : 0 }}</div>
                </td>
                <td id="tdEletricaB" v-if="painelConfiguration().mostrarEletrica">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalEletricas : 0 }}</div>
                </td>
                <td id="tdCarroceriaB" v-if="painelConfiguration().mostrarCarroceria">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalCarrocerias : 0 }}</div>
                </td>
                <td id="tdBorrachariaB" v-if="painelConfiguration().mostrarBorracharia">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalBorracharias : 0 }}</div>
                </td>
                <td id="tdGeralB" v-if="painelConfiguration().mostrarGeral">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalGerais : 0 }}</div>
                </td>
                <td id="tdReformaB" v-if="painelConfiguration().mostrarReforma">
                    <div class="d-flex justify-content-center">{{ dadosBanco.consultaVeiculos != null &&
                        (dadosBanco.consultaVeiculos as any).totais ? (dadosBanco.consultaVeiculos as
                        any).totais.totalReformas : 0 }}</div>
                </td>
            </tr>
        </table>
        <footer>
            <div class="complementos-painel">
                <div class="row d-flex justify-content-center">
                    <div class="col-2 d-flex justify-content-center item-complemento">
                        QTD. OS : {{ dadosBanco.consultaVeiculos != null && (dadosBanco.consultaVeiculos as any).totais
                            ? (dadosBanco.consultaVeiculos as any).totais.quantidadeOs : 0 }}
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        ABER : {{ dadosBanco.consultaVeiculos != null && (dadosBanco.consultaVeiculos as any).totais ?
                            (dadosBanco.consultaVeiculos as any).totais.quantidadeAberta : 0 }}
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        PEND : {{ dadosBanco.consultaVeiculos != null && (dadosBanco.consultaVeiculos as any).totais ?
                            (dadosBanco.consultaVeiculos as any).totais.quantidadePendente : 0}}
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        EXEC : {{ dadosBanco.consultaVeiculos != null && (dadosBanco.consultaVeiculos as any).totais ?
                            (dadosBanco.consultaVeiculos as any).totais.quantidadeExecucao : 0}}
                    </div>
                    <div class="col-2 d-flex justify-content-center">
                        SUSP : {{ dadosBanco.consultaVeiculos != null && (dadosBanco.consultaVeiculos as any).totais ?
                            (dadosBanco.consultaVeiculos as any).totais.quantidadeSuspensa : 0 }}
                    </div>

                </div>
            </div>
        </footer>
    </div>

    <div v-if="dadosBanco.consultaVeiculos == null || !(dadosBanco.consultaVeiculos as any).itens"
        class="d-flex justify-content-center mt-5">
        <h2>Carregando dados ... Aguarde.</h2>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, watch } from 'vue';
import { Icon } from '@iconify/vue';
import { painelConfiguration } from '@/stores/configuration';

onMounted(() => {
    atualizarDadosVeiculos();
});

onUnmounted(() => {
    clearInterval(intervalAjusteLayout);
})

let intervalAjusteLayout: number = null;

const dadosBanco = reactive({
    consultaVeiculos: []
})

const listagemCfg = reactive({
    tempoPorPagina: painelConfiguration().pgSize,
    numeroPaginas: 0,
    totalElementos: 0,
    itens: [],
    paginaAtual: 1
})

const atualizarDadosVeiculos = async () => {

    const data = {
        pgSize: painelConfiguration().pgSize,
        programados: painelConfiguration().programados,
        naoProgramados: painelConfiguration().naoProgramados,
        ordenacao: "s",
        idCidade: painelConfiguration().cidade,
        mostrarLimpeza: painelConfiguration().mostrarLimpeza,
        mostrarAbastecimento: painelConfiguration().mostrarAbastecimento,
        mostrarMecanica: painelConfiguration().mostrarMecanica,
        mostrarEletrica: painelConfiguration().mostrarEletrica,
        mostrarCarroceria: painelConfiguration().mostrarCarroceria,
        mostrarBorracharia: painelConfiguration().mostrarBorracharia,
        mostrarGeral: painelConfiguration().mostrarGeral,
        mostrarReforma: painelConfiguration().mostrarReforma,
        empresas: painelConfiguration().gerarStringEmpresa()
    }

    const response = await fetch(import.meta.env.VITE_URL_API + `ordemServico/buscarDados`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        }
    );

    dadosBanco.consultaVeiculos = JSON.parse(await response.text());

    // Tratativa para quando se tem mais de uma página.
    if ((dadosBanco.consultaVeiculos as any).itens && (dadosBanco.consultaVeiculos as any).itens.totalPages > 1) {

        listagemCfg.numeroPaginas = (dadosBanco.consultaVeiculos as any).itens.totalPages;
        listagemCfg.totalElementos = (dadosBanco.consultaVeiculos as any).itens.totalElements;

        for (let i = 1; i <= listagemCfg.numeroPaginas; i++) {

            // Definindo o timeout do último item
            if (i == listagemCfg.numeroPaginas) {

                setTimeout(() => {

                    let start = (i - 1) * painelConfiguration().pgSize;
                    let end = Math.min(listagemCfg.totalElementos, (start + painelConfiguration().pgSize));

                    atualizarItensAtivos(start, end);
                    listagemCfg.paginaAtual++;
                },
                    (listagemCfg.tempoPorPagina * i + 6) * 1000);

                // Buscando novas informações após o fim do ciclo.
                setTimeout(() => {
                    atualizarDadosVeiculos();
                },
                    (listagemCfg.tempoPorPagina * (i + 1) + 6) * 1000);

            }
            // Definindo tratativa do primeiro item
            else if (i == 1) {
                // Atualizar itens ativos
                atualizarItensAtivos(0, painelConfiguration().pgSize);
                listagemCfg.paginaAtual = 1;
            }
            // Definindo tratativa dos itens intermediários
            else {
                setTimeout(() => {

                    let start = (i - 1) * painelConfiguration().pgSize;
                    let end = Math.min(listagemCfg.totalElementos, (start + painelConfiguration().pgSize));

                    atualizarItensAtivos(start, end);
                    listagemCfg.paginaAtual++;
                },
                    (listagemCfg.tempoPorPagina * i + 6) * 1000);
            }
        }
    }
    // Tratativa para quando não se tem mais de uma página.
    else if ((dadosBanco.consultaVeiculos as any).itens && (dadosBanco.consultaVeiculos as any).itens.totalPages <= 1) {

        listagemCfg.itens = (dadosBanco.consultaVeiculos as any).itens.content;

        setTimeout(() => {
            atualizarDadosVeiculos();
        },
            (listagemCfg.tempoPorPagina + 6) * 1000);

        listagemCfg.paginaAtual = 1;
    }

}

// Atualização com base na lista salva em memória.
const atualizarItensAtivos = (start: number, end: number) => {
    listagemCfg.itens = (dadosBanco.consultaVeiculos as any).itens.content.slice(start, end);
}

</script>

<style lang="scss">
table {
    border-collapse: collapse;
    width: 100%;

    td {
        padding: 4px;
        text-align: left;
        border-bottom: 1px solid #ddd; // Linhas demarcadas entre as linhas
        border-right: 1px solid #0e0d0d;
        /* Linha demarcando as colunas */

    }

    /* Remove a borda inferior da última célula de cada linha */
    tr td:last-child {
        border-right: none;
    }

    tr:first-child {
        background-color: #575757; // Tom cinza mais escuro para a "linha de cabeçalho"
        color: #fff; // Cor do texto na "linha de cabeçalho"

        td {
            padding: 6px
        }
    }

    .destaque-row {
        background-color: rgb(26, 25, 25) !important; // Tom cinza mais escuro para a "linha do total"
        color: #fff;

        td {
            padding: 2px !important;
            border-bottom: #0e0d0d 1px solid;
        }
    }

    .parciais-row {
        background-color: rgb(95, 89, 89) !important; // Tom cinza mais escuro para a "linha do total"
        color: #fff;

        td {
            padding: 0px;
            border-bottom: #000000 1px solid;
        }
    }

    /* Linhas pares com cor de fundo mais escura */
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    /* Efeito de destaque ao passar o mouse em cima */
    tr:not(:first-child):hover {
        background-color: #c9f5c7;
    }

    .celula-limpeza {
        background-color: #6268c9;
    }

    .celula-abastecimento {
        background-color: #d67c70;
    }

    .celula-mecanica {
        background-color: #82b3d3;
    }

    .celula-eletrica {
        background-color: #d16bc3;
    }

    .celula-carroceria {
        background-color: #7cd16b;
    }

    .celula-borracharia {
        background-color: #9e86f3;
    }

    .celula-geral {
        background-color: #ffec95;
    }

    .celula-reforma {
        background-color: #488f52;
    }


    .texto-tabela {
        font-size: large;
        font-weight: bold;
    }

    .texto-transito {
        color: #e21111;
    }

    .previsao-ultrapassada {
        color: #e21111;
        background-color: #ffe8e8
    }

    .img-container {
        width: 150px;
        /* Largura fixa */
        height: 50px;

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
        }
    }
}

.complementos-painel {
    background-color: #333131; // Tom cinza mais escuro para a "linha do total"
    color: #fff;
    padding: 1px;

    div:first-child {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
    }

    div {
        margin: 0;
        border-right: 1px solid rgba(0, 0, 0, 0.5);
    }
}

.icone-fraco {
    color: #cfcfcf;
}

.categoria-mais-antiga{

    .icone-categoria{
        border: #2c2a2a 2px solid;
        border-radius: 30px;
        padding: 1px
    }
    
}
</style>
