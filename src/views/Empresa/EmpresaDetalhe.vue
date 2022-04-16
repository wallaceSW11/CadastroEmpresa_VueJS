<template>
    <div class="container">
        <Title titulo="Detalhes da empresa" />

        <div class="content" id="dadosEmpresa">
            <div class="row">
                <div class="row col-sm-3">
                    <InputLabel label="CNPJ" v-model="empresa.cnpj" />
                </div>
                <div class="row col-sm-7">
                    <InputLabel
                        label="Razão social"
                        v-model="empresa.razaoSocial"
                    />
                </div>
                <div class="row col-sm-2 mt-4">
                    <div class="form-check-inline">
                        <label class="form-check-label">
                            <input
                                v-model="empresa.ativa"
                                type="checkbox"
                                class="form-check-input"
                            />
                            Ativa
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row col-sm-4">
                    <InputLabel label="Cidade" v-model="empresa.cidade" />
                </div>
            </div>
        </div>

        <div class="content" id="dadosIntegracao">
            <div class="row">
                <div class="row col-sm-4">
                    <InputLabel label="Provedor" v-model="empresa.provedor" />
                    <InputLabel label="Tipo de integracao" />
                </div>
            </div>
        </div>

        <div>
            <div class="actions">
                <Button text="Salvar" :callback="salvar" />
                <div class="space"></div>
                <Button
                    text="Cancelar"
                    :callback="cancelar"
                    :secondary="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Title from "@/components/title/Title.vue";
import InputLabel from "@/components/input/InputLabel.vue";
import Button from "@/components/button/Button.vue";
import Empresa from "@/models/Empresa";
import empresaService from "@/services/empresa-service";

export default {
    name: "EmpresaDetalhe",
    components: {
        Title,
        InputLabel,
        Button,
    },
    data() {
        return {
            empresa: new Empresa(),
        };
    },
    mounted() {
        let cnpj = this.$route.params.cnpj;

        if (!cnpj) return;

        this.obterEmpresaPorCNPJ(cnpj);
    },
    methods: {
        obterEmpresaPorCNPJ(cnpj) {
            empresaService
                .obterPorCNPJ(cnpj)
                .then((response) => {
                    this.empresa = new Empresa(response.data);
                })
                .catch((error) => {
                    if (error == "Error: Network Error") {
                        let empresaFake = new Empresa({
                            cnpj: "123456789565",
                            razaoSocial: "The Best",
                            cidade: "Terê",
                            provedor: "WebISS",
                            ativa: "true",
                        });
                        this.empresa = empresaFake;
                        return;
                    }
                    console.log("Falha ao obter empresa por CNPJ: " + error);
                });
        },

        salvar() {
            this.$router.push({ name: "Empresas" });
        },
        cancelar() {
            this.$router.push({ name: "Empresas" });
        },
    },
};
</script>

<style scoped>
.actions {
    display: flex;
    flex-direction: row;
    float: right;
}

.space {
    margin-left: 10px;
}

.content {
    display: none;
}

#dadosEmpresa {
    display: block;
}

/* #dadosIntegracao{
    display: block;
} */
</style>
