<template>
    <div class="container">
        <Title text="Enterprises" />
        <div class="content">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>Identification</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Provider</th>
                        <th><i>Actions</i></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="!enterprises"><td colspan="5" class="text-center"><span>No enterprise was found</span></td></tr>
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
       // this.enterprises = []
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
.text-center {
    text-align: center;
}
</style>
