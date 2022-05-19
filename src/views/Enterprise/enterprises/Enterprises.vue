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
                        <th class="space-around">
                            <i>Actions</i>
                            <i
                                @click="addEnterprise()"
                                class="fas fa-solid fa-plus pointer icones-tabela"
                            ></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-show="enterprises.length == 0">
                        <td colspan="5" class="text-center">
                            <span>There are no enterprises registered</span>
                        </td>
                    </tr>
                    <tr v-for="enterprise in enterprises" :key="enterprise.id">
                        <td class="identification">
                            {{ enterprise.identification }}
                        </td>
                        <td>{{ enterprise.name }}</td>
                        <td>{{ enterprise.city }}</td>
                        <td>{{ enterprise.provider }}</td>
                        <td>
                            <i
                                @click="editEnterprise(enterprise)"
                                class="fas fa-pencil-alt icones-tabela"
                            ></i>
                            <i
                                @click="deleteEnterprise(enterprise)"
                                class="fas fa-trash-alt icones-tabela"
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
import Title from "@/components/titles/title/Title.vue";
import BooleanString from "@/utils/conversores/BooleanString";
import enterpriseService from "@/services/enterprise-service";
import Message from "@/utils/messages/message";

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
                    let enterprises = response.data.map(
                        (e) => new Enterprise(e)
                    );
                    this.enterprises = enterprises;
                })
                .catch((error) => {
                    console.log("Erro trying get all enterprises:");
                    console.log(error);
                });
        },
        editEnterprise(enterprise) {
            this.$router.push({
                name: "EnterpriseDetail",
                params: { id: enterprise.id },
            });
        },
        addEnterprise() {
            this.$router.push({
                name: "EnterpriseDetail",
            });
        },
        deleteEnterprise(enterprise) {
            Message.confirm(
                "",
                "Are you sure you want to delete the enterprise?"
            ).then((result) => {
                if (result.isConfirmed) {
                    enterpriseService
                        .deleteEnterprise(enterprise.id)
                        .then(() => {
                            Message.information("success", "Successfully deleted", '');
                            this.getEnterprises();
                        })
                        .catch((error) => alert(error));
                }
            });
        },
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />