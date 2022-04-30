<template>
    <div class="container">
        <Title text="Company details" />

        <div class="content" id="enterpriseData">
            <div class="row">
                <div class="row col-sm-3">
                    <InputLabel label="Identification (CNPJ)" v-model="enterprise.identification" />
                </div>
                <div class="row col-sm-8">
                    <InputLabel
                        label="Corporate name"
                        v-model="enterprise.name"
                    />
                </div>
                <div class="row col-sm-2 mt-4">
                    <div class="form-check-inline">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="row col-sm-4">
                    <InputLabel label="City" v-model="enterprise.city" />
                </div>
                <div class="row col-sm-4">
                    <InputLabel label="Provider" v-model="enterprise.provider" />
                </div>
            </div>

        </div>



        <div>
            <div class="actions">
                <Button text="Save" :callback="saveRegistration" />
                <div class="space"></div>
                <Button
                    text="Cancel"
                    :callback="cancelRegistration"
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
import Enterprise from "@/models/Enterprise";
import enterpriseService from "@/services/enterprise-service";

export default {
    name: "EnterpriseDetail",
    components: {
        Title,
        InputLabel,
        Button,
    },
    data() {
        return {
            enterprise: new Enterprise(),
        };
    },
    mounted() {
        let id = this.$route.params.id;
        if (!id) return;
        this.getEnterpriseById(id);
    },
    methods: {
        getEnterpriseById(id) {
            enterpriseService
                .getById(id)
                .then((response) => {
                    this.enterprise = new Enterprise(response.data);
                })
                .catch((error) => {
                    console.log("Error trying to get enterprise by id: ");
                    console.log(error);
                });
        },

        saveRegistration() {

            if (!this.enterprise.modelValid()) {
                alert('Invalid model');
                return;
            }

            enterpriseService
                .saveEnterprise(this.enterprise)
                .then(this.$router.push({ name: "Enterprises" }))
                .catch(error => alert('Error trying update the enterprise: ' + error));
        },
        cancelRegistration() {
            this.$router.push({ name: "Enterprises" });
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

#enterpriseData {
    display: block;
}

/* #dadosIntegracao{
    display: block;
} */
</style>
