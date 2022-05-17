<template>
    <div class="container">
        <Title text="Company details" />

          <div class="form-row">
            <div id="identification">
                <InputLabel
                    label="Identification (CNPJ)"
                    v-model="enterprise.identification"
                    mask="##.###.###/####-##"
                    ref="inputIdentification"
                    autoFocus
                />
            </div>
                <div id="corporate-name">
                    <InputLabel
                        label="Corporate name"
                        v-model="enterprise.name"
                    />
                </div>
        </div>
        <div class="form-row">
            <div class="fullsize">
                <InputLabel label="City" v-model="enterprise.city" />
            </div>
            <div class="fullsize">
                <InputLabel label="State" v-model="enterprise.provider" />
            </div>
            <div class="fullsize">
                <InputLabel label="Country" />
            </div>
        </div>

        <div class="footer">
            <div :class="newRegister ? 'keep-adding' : 'hide-keep-adding' " >
                <Checkbox text="Keep adding" v-model="keepAdding" />
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
import Checkbox from "@/components/checkbox/Checkbox.vue";
import Enterprise from "@/models/Enterprise";
import enterpriseService from "@/services/enterprise-service";
import Message from "@/utils/messages/message";

export default {
    name: "EnterpriseDetail",
    components: {
        Title,
        InputLabel,
        Button,
        Checkbox
    },
    data() {
        return {
            enterprise: new Enterprise(),
            keepAdding: true,
            newRegister: true
        };
    },
    mounted() {
        this.newRegister = !this.$route.params.id;

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
                let newEnterprise = new Enterprise(this.enterprise);
                newEnterprise.identification = newEnterprise.identification
                    .replace(".", "")
                    .replace("/", "")
                    .replace("-", "");

                enterpriseService
                    .createEnterprise(newEnterprise)
                    .then(() => {
                        Message.information(
                            "success",
                            "",
                            "Successfull created"
                        );
                        if (this.keepAdding) {
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

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.keep-adding {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.actions {
    display: flex;
    flex-direction: row;
}

.hide-keep-adding {
    visibility: hidden;
}

.form-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    flex: 1 1 auto;
}

#identification {
    flex: 0 0 150px;
}

#corporate-name {
    flex: 3 1 200px;
}
.fullsize{
    flex: 1 1 auto;
}

</style>
