<template>
    <header>
        <nav>
            <div class="logo">EnterPRISES</div>
            <div class="menu">
                <div :class="['item-menu', pagina == 0 ? 'selecionado' : 'disponivel']" @click="goToPage(0, 'Dashboard')">Dashboard</div>
                <div :class="['item-menu', pagina == 1 ? 'selecionado' : 'disponivel']" @click="goToPage(1, 'Enterprises')">Enterprises</div>
                <div :class="['item-menu', pagina == 2 ? 'selecionado' : 'disponivel']" @click="goToPage(2, 'Reports')">Reports</div>
                <div :class="['item-menu', pagina == 3 ? 'selecionado' : 'disponivel']" @click="goToPage(3, 'Tools')">Tools</div>
            </div>
            <div class="sign-out">
                <div :class="['item-menu', pagina == 4 ? 'selecionado' : 'disponivel']" @click="goToPage(4, 'Login')">Sign out</div>
            </div>
            <div class="menu-mobile">
                <MenuButton :callback="toggleMenu" :clicked="menuClose" />
            </div>
        </nav>
    </header>
</template>

<script>
import MenuButton from "../../buttons/menubutton/MenuButton.vue";

export default {
    name: "NavBar",
    data() {
        return {
            pagina: { type: Number, default: 0 },
            page: { type: String, default: 'Dashboard'},
            menuClose: false,
            pages: ['Dashboard', 'Enterprises', 'Reports', 'Tools', 'Login'],
        };
    },
    components: {
        MenuButton,
    },
    methods: {
        goToPage(numeroPagina, pagina) {
            if (this.pagina == numeroPagina) return;

            if (numeroPagina == 4) {
                localStorage.removeItem("user");
            }

            this.page = pagina;

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
    computed: {
        activePage: function() {
            return {

            }
        }
    }
};
</script>

<style lang="scss" src="./style.scss" scoped />
