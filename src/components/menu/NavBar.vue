<template>
<div class="main-menu">
    <div class="menu-mobile"><button> X </button></div>
    <div class="menu-desk">
    <ul class="menu">
        <li :class="pagina == 0 ? 'selecionado' : 'disponivel'">
            <a @click="irParaPagina(0, 'Dashboard')">Dashboard</a>
        </li>
        <li :class="pagina == 1 ? 'selecionado' : 'disponivel'">
            <a @click="irParaPagina(1, 'Enterprises')">Enterprises</a>
        </li>
        <li :class="pagina == 2 ? 'selecionado' : 'disponivel'">
            <a @click="irParaPagina(2, 'Relatorios')">Relatórios</a>
        </li>
        <li :class="pagina == 3 ? 'selecionado' : 'disponivel'">
            <a @click="irParaPagina(3, 'Ferramentas')">Ferramentas</a>
        </li>
        <li :class="pagina == 4 ? 'selecionado' : 'disponivel'">
            <a @click="irParaPagina(4, 'Login')">Sair</a>
        </li>
    </ul>
    </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            pagina: { type: Number, default: 0 },
        };
    },
    methods: {
        irParaPagina(numeroPagina, pagina) {
            //console.log('numeroPagina: ' + numeroPagina + ' pagina: ' + pagina + ' this.pagina: ' + this.pagina);
            if (this.pagina == numeroPagina) return;

            if (numeroPagina == 4) {
             localStorage.removeItem('user');
            }

            this.pagina = numeroPagina;
            this.$router.push({ name: pagina });
        },
    },
    mounted() {
        this.pagina = this.$route.name == 'Enterprises' ? 1 : 0;
    },
};
</script>

<style scoped>
ul {
    list-style-type: none;
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

.main-menu{
    
    width: 100%;
}

.menu-mobile {
    display: none;
    width: 100%;
    height: 54px;
    background: var(--primary-color);
}

@media only screen and (max-width: 600px) {
  .menu-mobile {
    color: blue;
    display: block;
  }

  .menu-desk {
      display: none;
  }

  
}
</style>
