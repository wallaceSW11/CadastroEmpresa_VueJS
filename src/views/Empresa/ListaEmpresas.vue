<template>
    <div class="container">
        <Title titulo="Empresas" />
        <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>CNPJ</th>
                        <th>Empresa</th>
                        <th>Cidade</th>
                        <th>Provedor</th>
                        <th class="centralizado">Ativa</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="empresa in empresas" :key="empresa.cnpj">
                        <td class="cnpj">{{ empresa.cnpj }}</td>
                        <td>{{ empresa.razaoSocial }}</td>
                        <td>{{ empresa.cidade }}</td>
                        <td>{{ empresa.provedor }}</td>
                        <td class="centralizado">{{ empresa.ativa | booleanToString }}</td>
                        <td>
                            <i
                                @click="editarEmpresa(empresa)"
                                class="fas fa-pencil-alt icones-tabela"
                            ></i>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Empresa from "@/models/Empresa";
import Title from "@/components/title/Title.vue";
import BooleanString from '@/utils/conversores/BooleanString';
import empresaService from "@/services/empresa-service";

export default {
    name: "Empresas",
    data() {
        return {
            empresas: [],
        };
    },
    components: {
        Title,
    },
    filters: {
        booleanToString(valor) {
            return BooleanString.booleanToString(valor);
        }
    },
    mounted() {
        this.obterEmpresas();
    },

    methods: {
        obterEmpresas(){
            empresaService
              .obterTodas()
              .then((response) => {
                  let empresas = response.data.map((e) => new Empresa(e));
                  this.empresas = empresas;
              })
              .catch((error) => {
                  console.log('Falha ao obterEmpresas: ' + error);
              })

        },
        editarEmpresa(empresa) {
            this.$router.push({
                name: "EmpresaDetalhe",
                params: { cnpj: empresa.cnpj },
            });
        },
    },
};
</script>

<style scoped>

.cnpj {
    max-width: 80px;
}
.centralizado {
    text-align: center;
}
</style>
