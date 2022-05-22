<template>
    <header>
        <nav>
            <div class="logo">Enter<span>PRISES</span></div>
            <div
                id="menuu"
                :class="menuOpened ? 'menu-compacted show-sign-out' : 'menu'"
            >
                <div
                    :class="[
                        'item-menu',
                        selectedPage == pages[0] ? 'selected' : 'available',
                    ]"
                    @click="goToPage('Dashboard')"
                >
                    Dashboard
                </div>
                <div
                    :class="[
                        'item-menu',
                        selectedPage == pages[1] ? 'selected' : 'available',
                    ]"
                    @click="goToPage('Enterprises')"
                >
                    Enterprises
                </div>
                <div
                    :class="[
                        'item-menu',
                        selectedPage == pages[2] ? 'selected' : 'available',
                    ]"
                    @click="goToPage('Reports')"
                >
                    Reports
                </div>
                <div
                    :class="[
                        'item-menu',
                        selectedPage == pages[3] ? 'selected' : 'available',
                    ]"
                    @click="goToPage('Tools')"
                >
                    Tools
                </div>
                <div
                    v-if="menuOpened"
                    class="item-menu"
                    @click="goToPage('Login')"
                >
                    Sign out
                </div>
            </div>
            <div class="sign-out">
                <div
                    :class="[
                        'item-menu',
                        selectedPage == pages[4] ? 'selected' : 'available',
                    ]"
                    @click="goToPage('Login')"
                >
                    Sign out
                </div>
            </div>
            <div class="menu-mobile">
                <MenuButton :callback="toggleMenu" :clicked="menuOpened" />
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
            selectedPage: { type: String, default: "Dashboard" },
            pages: ["Dashboard", "Enterprises", "Reports", "Tools", "Login"],
            menuOpened: false,
        };
    },
    components: {
        MenuButton,
    },
    methods: {
        goToPage(page) {
            if (this.selectedPage == page) return;

            if (page == "Login") localStorage.removeItem("user");

            this.selectedPage = page;
            this.$router.push({ name: page });
        },
        toggleMenu() {
            this.menuOpened = !this.menuOpened;
        },
    },
    mounted() {
        this.selectedPage =
            this.$route.name == "Enterprises" ? this.pages[1] : this.pages[0];
    },
};
</script>

<style lang="scss" src="./style.scss" scoped />
