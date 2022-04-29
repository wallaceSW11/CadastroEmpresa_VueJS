<template>
    <div class="container">
        <Title titulo="Enterprises" />
        <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Identification</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>provider</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="enterprise in enterprises" :key="enterprise.id">
                        <td class="identification">{{ enterprise.identification }}</td>
                        <td>{{ enterprise.name }}</td>
                        <td>{{ enterprise.city }}</td>
                        <td>{{ enterprise.provider }}</td>
                        <td>
                            <i
                                @click="editEnterprise(enterprise)"
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
import Enterprise from "@/models/Enterprise";
import Title from "@/components/title/Title.vue";
import BooleanString from "@/utils/conversores/BooleanString";
import enterpriseService from "@/services/enterprise-service";

export default {
    name: "Enterprises",
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
        this.getEnterprises();
    },

    methods: {
        getEnterprises() {
            enterpriseService
                .getAll()
                .then((response) => {
                    let enterprises = response.data.map((e) => new Enterprise(e));
                    this.enterprises = enterprises;
                })
                .catch((error) => {
                    console.log('Erro trying get all enterprises:');
                    console.log(error);
                })
        },
        editEnterprise(enterprise) {
            this.$router.push({
                name: "EnterpriseDetail",
                params: { id: enterprise.id },
            });
        },
    },
};
</script>

<style scoped>
.identification {
    max-width: 80px;
    min-width: 70px;
}
</style>
