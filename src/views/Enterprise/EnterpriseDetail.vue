<template>
    <div class="container">
        <Title text="Company details" />

        <div class="content" id="enterpriseData">
            <div class="row">
                <div class="row col-sm-3 min-px">
                    <InputLabel
                        label="Identification (CNPJ)"
                        v-model="enterprise.identification"
                        autoFocus
                        mask="##.###.###/####-##"
                    />
                </div>
                <div class="row col-sm-8">
                    <InputLabel
                        label="Corporate name"
                        v-model="enterprise.name"
                    />
                </div>
                <div class="row col-sm-2 mt-4">
                    <div class="form-check-inline"></div>
                </div>
            </div>
            <div class="row">
                <div class="row col-sm-4">
                    <InputLabel label="City" v-model="enterprise.city" />
                </div>
                <div class="row col-sm-4">
                    <InputLabel
                        label="Provider"
                        v-model="enterprise.provider"
                    />
                </div>
            </div>
        </div>

        <div :class="this.$route.params.id ? 'action-footer-left' : 'action-footer'">
            <div class="check-keep-adding" v-if="!this.$route.params.id">
                <label>
                    <input
                        class="check-left"
                        type="checkbox"
                        v-model="keepAdding"
                        name="inputKeepAdding"
                    />
                    Keep adding</label
                >
            </div>
            <div class="actions">
                <Button text="Save" :callback="saveRegistration" />
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
import Message from "@/utils/messages/message";

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
            keepAdding: true,
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
            if (this.enterprise.modelInvalid()) {
                Message.information(
                    "warning",
                    "Invalid model",
                    this.enterprise._invalidDescription
                );
                return;
            }

            if (this.enterprise.id == null) {
                console.log(this.enterprise.identification);
                let newEnterprise = new Enterprise(this.enterprise);
                newEnterprise.identification = newEnterprise.identification.replace('.', '').replace('/', '').replace('-', '');
                console.log(newEnterprise.identification);

                enterpriseService
                    .createEnterprise(newEnterprise)
                    .then(() => {
                        Message.information(
                            "success",
                            "",
                            "Successfull created"
                        );
                        if (this.keepAdding){
                            this.enterprise = new Enterprise();
                        } else {
                            this.$router.push({ name: "Enterprises" });
                        }

                    })
                    .catch((error) => {
                        this.$swal({
                            icon: "error",
                            title: "Fail",
                            text: error,
                            animate: true,
                        });
                    });
                return;
            }

            enterpriseService
                .saveEnterprise(this.enterprise)
                .then(() => {
                    this.$router.push({ name: "Enterprises" });
                })
                .catch((error) =>
                    Message.information("error", "Failure", error)
                );
        },
        cancelRegistration() {
            this.$router.push({ name: "Enterprises" });
        },
    },
};
</script>

<style scoped>

.action-footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.action-footer-left{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.actions {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.check-keep-adding{
    margin-top: 10px;
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

.min-px {
    min-width: 145px;
}
</style>
