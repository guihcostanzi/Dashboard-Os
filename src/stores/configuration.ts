import { defineStore } from "pinia";

export const painelConfiguration = defineStore({
  id: 'painelConfiguration',
  state: () =>
    {
    return {                           
        cidade: localStorage.getItem("cidadeConfiguration") ? JSON.parse(localStorage.getItem("cidadeConfiguration")) : 1,
        pgSize: localStorage.getItem("pgSizeConfiguration") ? JSON.parse(localStorage.getItem("pgSizeConfiguration")) : 15,
        paginationMode: localStorage.getItem("paginationModeConfiguration") ? JSON.parse(localStorage.getItem("paginationModeConfiguration")) : 'Auto',
        programados: localStorage.getItem("programadosConfiguration") ? JSON.parse(localStorage.getItem("programadosConfiguration")) : true,
        naoProgramados: localStorage.getItem("naoProgramadosConfiguration") ? JSON.parse(localStorage.getItem("naoProgramadosConfiguration")) : true,
        filtrarCidade: localStorage.getItem("filtrarCidadeConfiguration") ? JSON.parse(localStorage.getItem("filtrarCidadeConfiguration")) : true,
        mostrarEmpresa: localStorage.getItem("mostrarEmpresaConfiguration") ? JSON.parse(localStorage.getItem("mostrarEmpresaConfiguration")) : false,
        mostrarLimpeza: localStorage.getItem("mostrarLimpezaConfiguration") ? JSON.parse(localStorage.getItem("mostrarLimpezaConfiguration")) : false,
        mostrarAbastecimento: localStorage.getItem("mostrarAbastecimentoConfiguration") ? JSON.parse(localStorage.getItem("mostrarAbastecimentoConfiguration")) : false,
        mostrarMecanica: localStorage.getItem("mostrarMecanicaConfiguration") ? JSON.parse(localStorage.getItem("mostrarMecanicaConfiguration")) : true,
        mostrarEletrica: localStorage.getItem("mostrarEletricaConfiguration") ? JSON.parse(localStorage.getItem("mostrarEletricaConfiguration")) : true,
        mostrarCarroceria: localStorage.getItem("mostrarCarroceriaConfiguration") ? JSON.parse(localStorage.getItem("mostrarCarroceriaConfiguration")) : true,
        mostrarBorracharia: localStorage.getItem("mostrarBorrachariaConfiguration") ? JSON.parse(localStorage.getItem("mostrarBorrachariaConfiguration")) : true,
        mostrarGeral: localStorage.getItem("mostrarGeralConfiguration") ? JSON.parse(localStorage.getItem("mostrarGeralConfiguration")) : true,
        mostrarReforma: localStorage.getItem("mostrarReformaConfiguration") ? JSON.parse(localStorage.getItem("mostrarReformaConfiguration")) : true,
        empresaVgl: localStorage.getItem("empresaVglConfiguration") ? JSON.parse(localStorage.getItem("empresaVglConfiguration")) : true,
        empresaEpil: localStorage.getItem("empresaEpilConfiguration") ? JSON.parse(localStorage.getItem("empresaEpilConfiguration")) : true,
        empresaBsul: localStorage.getItem("empresaBsulConfiguration") ? JSON.parse(localStorage.getItem("empresaBsulConfiguration")) : true,
        empresaStanjo: localStorage.getItem("empresaStanjoConfiguration") ? JSON.parse(localStorage.getItem("empresaStanjoConfiguration")) : true,
        empresaLsul: localStorage.getItem("empresaLsulConfiguration") ? JSON.parse(localStorage.getItem("empresaLsulConfiguration")) : true
    }
  },
  actions: {
    async updateCfg(cidade: number, pgSize: number, paginationMode: string, programados: boolean, naoProgramados: boolean, filtrarCidade: boolean, mostrarEmpresa: boolean,
      mostrarLimpeza: boolean, mostrarAbastecimento: boolean, mostrarMecanica: boolean, mostrarEletrica: boolean, mostrarCarroceria: boolean, mostrarBorracharia: boolean,
      mostrarGeral: boolean, mostrarReforma: boolean, empresaVgl: boolean, empresaEpil: boolean, empresaBsul: boolean, empresaStanjo: boolean, empresaLsul: boolean
    ){
        
        this.cidade = cidade;
        localStorage.setItem("cidadeConfiguration", JSON.stringify(this.cidade));
        
        if(pgSize != null){
          this.pgSize = pgSize;
          localStorage.setItem("pgSizeConfiguration", JSON.stringify(this.pgSize));
        }
        if(paginationMode != null){
          this.paginationMode = paginationMode;
          localStorage.setItem("paginationModeConfiguration", JSON.stringify(this.paginationMode));
        }
        if(programados != null){
          this.programados = programados;
          localStorage.setItem("programadosConfiguration", JSON.stringify(this.programados));
        }
        if(naoProgramados != null){
          this.naoProgramados = naoProgramados;
          localStorage.setItem("naoProgramadosConfiguration", JSON.stringify(this.naoProgramados));
        }
        if(filtrarCidade != null){
          this.filtrarCidade = filtrarCidade;
          localStorage.setItem("filtrarCidadeConfiguration", JSON.stringify(this.filtrarCidade));
        }
        if(mostrarEmpresa != null){
          this.mostrarEmpresa = mostrarEmpresa;
          localStorage.setItem("mostrarEmpresaConfiguration", JSON.stringify(this.mostrarEmpresa));
        }
        if(mostrarLimpeza != null){
          this.mostrarLimpeza = mostrarLimpeza;
          localStorage.setItem("mostrarLimpezaConfiguration", JSON.stringify(this.mostrarLimpeza));
        }
        if(mostrarAbastecimento != null){
          this.mostrarAbastecimento = mostrarAbastecimento;
          localStorage.setItem("mostrarAbastecimentoConfiguration", JSON.stringify(this.mostrarAbastecimento));
        }
        if(mostrarMecanica != null){
          this.mostrarMecanica = mostrarMecanica;
          localStorage.setItem("mostrarMecanicaConfiguration", JSON.stringify(this.mostrarMecanica));
        }
        if(mostrarEletrica != null){
          this.mostrarEletrica = mostrarEletrica;
          localStorage.setItem("mostrarEletricaConfiguration", JSON.stringify(this.mostrarEletrica));
        }
        if(mostrarCarroceria != null){
          this.mostrarCarroceria = mostrarCarroceria;
          localStorage.setItem("mostrarCarroceriaConfiguration", JSON.stringify(this.mostrarCarroceria));
        }
        if(mostrarBorracharia != null){
          this.mostrarBorracharia = mostrarBorracharia;
          localStorage.setItem("mostrarBorrachariaConfiguration", JSON.stringify(this.mostrarBorracharia));
        }
        if(mostrarGeral != null){
          this.mostrarGeral = mostrarGeral;
          localStorage.setItem("mostrarGeralConfiguration", JSON.stringify(this.mostrarGeral));
        }
        if(mostrarReforma != null){
          this.mostrarReforma = mostrarReforma;
          localStorage.setItem("mostrarReformaConfiguration", JSON.stringify(this.mostrarReforma));
        }
        if(empresaVgl != null){
          this.empresaVgl = empresaVgl;
          localStorage.setItem("empresaVglConfiguration", JSON.stringify(this.empresaVgl));
        }
        if(empresaEpil != null){
          this.empresaEpil = empresaEpil;
          localStorage.setItem("empresaEpilConfiguration", JSON.stringify(this.empresaEpil));
        }
        if(empresaBsul != null){
          this.empresaBsul = empresaBsul;
          localStorage.setItem("empresaBsulConfiguration", JSON.stringify(this.empresaBsul));
        }
        if(empresaStanjo != null){
          this.empresaStanjo = empresaStanjo;
          localStorage.setItem("empresaStanjoConfiguration", JSON.stringify(this.empresaStanjo));
        }
        if(empresaLsul != null){
          this.empresaLsul = empresaLsul;
          localStorage.setItem("empresaLsulConfiguration", JSON.stringify(this.empresaLsul));
        }
    },
    gerarStringEmpresa(){
      return "(" + (this.empresaVgl ? 1 : 0) + "," + (this.empresaEpil ? 3 : 0) + "," + (this.empresaBsul ? 6 : 0) + "," + (this.empresaStanjo ? 17 : 0) + "," + (this.empresaLsul ? 76 : 0) + ")";
    },
    limparCfg(){
      localStorage.clear();
    }
  
  }
});