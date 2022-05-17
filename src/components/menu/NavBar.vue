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
import MenuButton from "../button/MenuButton.vue";

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

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: var(--primary-color);
}

li {
    float: left;
}

li:first-child {
    margin-left: 40px;
}

li:last-child {
    float: right;
    margin-right: 10px;
}

ul.menu li a {
    display: block;
    color: #fff;
    padding: 15px 17px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
}

.selecionado {
    background-color: var(--secondary-color);
    color: #fff;
}

.disponivel {
    background-color: var(--primary-color);
}

li.disponivel a:hover {
    background-color: var(--secondary-color);
    color: #fff;
}

.main-menu {
    width: 100%;
}

.menu {
    display: flex;
}

.menu-mobile {
    display: none;
    width: 100%;
    height: 54px;
    background: var(--primary-color);
}

.show-menu-mobile {
    display: flex !important;
}

@media only screen and (max-width: 600px) {
    .menu-mobile {
        display: flex;
        justify-content: flex-start;
    }
    .menu {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        background-color: var(--secondary-color);
        transition: all 0.6s ease;
        z-index: 1000;
    }
    .menu li {
        margin: 0;
        width: 100%;
    }
    .menu a {
        padding: 0;
        margin: 0;
        text-align: left;

        border-bottom: 2px solid var(--primary-color);
    }
}

</style>
