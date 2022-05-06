<template>
    <div class="button-style">
        <button :class=" secondary ? 'secundaria' : 'primaria'" @click="callback">{{ text }}</button>
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: { type: String, default: "" },
        callback: { type: Function, default: () => {} },
        secondary: { type: Boolean, default: false },
    },
    data() {
        return {

        }
    }
};
</script>

<style scoped>

.button-style{
    margin: 5px;
}

button {
    width: 100%;

    padding: 8px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: var(--secondary-color);
    border: 1px solid var(--secondary-color);
}

button.secundaria:hover{
    color: #fff;
    border: 1px solid var(--secondary-color);
}

.primaria {
    background-color: var(--primary-color);
    color: #fff;
    border: 1px solid var(--primary-color);
}

.secundaria {
    background-color: #fff;
    color: #333;
    border: 1px solid var(--primary-color);
}
</style>
