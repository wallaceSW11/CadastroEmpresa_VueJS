<template>
    <div class="container">
        <div class="logo"><img src="../../src/assets/logo.png" alt="" /></div>
        <div class="title"><h1>ISS-Easy</h1></div>
        <div class="login">
            <InputLabel
                label="Código"
                placeHolder="Código do cliente na Alterdata"
                v-model="usuario.codigo"
            />
            <InputLabel label="Senha" type="password" v-model="usuario.senha" />
            <Button text="Acessar" :callback="logar" />
        </div>
    </div>
</template>

<script>
import InputLabel from "@/components/input/InputLabel.vue";
import Button from "@/components/button/Button.vue";
import Usuario from "@/models/Usuario";
import usuarioService from "@/services/usuario-service.js";

export default {
    name: "Login",
    components: {
        InputLabel,
        Button,
    },
    data() {
        return {
            usuario: new Usuario(),
        };
    },
    methods: {
        logar() {
            console.log(this.usuario);

            if (!this.usuario.modeloValido()){
                alert("Usuário ou senha inválido")
                return;
            }

            if (!usuarioService.login()) {
                alert('Usuário ou senha inválido')
                return;
            }



            this.$router.push({ name: "Dashboard" });
        },
    },
};
</script>

<style scoped>
.container {
    border: 1px solid var(--primary-color);
    min-height: 500px;
    max-width: 400px;
    border-radius: 5px;
}

img {
    height: 100px;
}

.logo {
    display: flex;
    justify-content: center;
}

.title {
    text-align: center;
}
</style>
