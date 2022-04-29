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
                        <!-- <th class="centralizado">Ativa</th> -->
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="enterprise in enterprises" :key="enterprise.id">
                        <td class="cnpj">{{ enterprise.identification }}</td>
                        <td>{{ enterprise.name }}</td>
                        <td>{{ enterprise.city }}</td>
                        <td>{{ enterprise.provider }}</td>
                        <!-- <td class="centralizado">
                            {{ empresa.ativa | booleanToString }}
                        </td> -->
                        <td>
                            <i
                                @click="editarEmpresa(enterprise)"
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
// import Empresa from "@/models/Empresa";
import Enterprise from "@/models/Enterprise";
import Title from "@/components/title/Title.vue";
import BooleanString from "@/utils/conversores/BooleanString";
import empresaService from "@/services/empresa-service";

export default {
    name: "Empresas",
    data() {
        return {
            enterprises: [],
        };
    },
    components: {
        Title,
    },
    filters: {
        booleanToString(valor) {
            return BooleanString.booleanToString(valor);
        },
    },
    mounted() {
        this.obterEmpresas();
    },

    methods: {
        obterEmpresas() {
            empresaService
                .obterTodas()
                .then((response) => {
                    let enterprises = response.data.map((e) => new Enterprise(e));
                    this.enterprises = enterprises;
                })
                .catch((error) => {
                    console.log('Falha ao obter todas as empresas:');
                    console.log(error);
                })
        },
        editarEmpresa(enterprise) {
            this.$router.push({
                name: "EmpresaDetalhe",
                params: { id: enterprise.id },
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
