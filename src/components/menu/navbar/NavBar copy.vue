<template>
    <div class="main-menu">
        <div class="menu-mobile">
            <MenuButton :callback="toggleMenu" :clicked="menuClose" />
        </div>
        <div class="menu-desk">

            <ul :class="['menu', menuClose ? 'show-menu-mobile' : '']">
                <li :class="pagina == 0 ? 'selecionado' : 'disponivel'">
                    <a @click="irParaPagina(0, 'Dashboard')">Dashboard</a>
                </li>
                <li :class="pagina == 1 ? 'selecionado' : 'disponivel'">
                    <a @click="irParaPagina(1, 'Enterprises')">Enterprises</a>
                </li>
                <li :class="pagina == 2 ? 'selecionado' : 'disponivel'">
                    <a @click="irParaPagina(2, 'Reports')">Reports</a>
                </li>
                <li :class="pagina == 3 ? 'selecionado' : 'disponivel'">
                    <a @click="irParaPagina(3, 'Tools')">Tools</a>
                </li>
                <li
                    id="signout"
                    :class="pagina == 4 ? 'selecionado' : 'disponivel'"
                >
                    <a @click="irParaPagina(4, 'Login')">Sign out</a>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
import MenuButton from "../../buttons/menubutton/MenuButton.vue";

export default {
    name: "NavBar",
    data() {
        return {
            pagina: { type: Number, default: 0 },
            menuClose: false,
        };
    },
    components: {
        MenuButton,
    },
    methods: {
        irParaPagina(numeroPagina, pagina) {

            if (this.pagina == numeroPagina) return;

            if (numeroPagina == 4) {
                localStorage.removeItem("user");
            }

            this.pagina = numeroPagina;
            this.$router.push({ name: pagina });
        },
        toggleMenu() {
            this.menuClose = !this.menuClose;
        },
    },
    mounted() {
        this.pagina = this.$route.name == "Enterprises" ? 1 : 0;
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
