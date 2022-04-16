<template>
    <div>
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
}

button.secundaria:hover{
    color: #fff;
}

.primaria {
    background-color: var(--primary-color);
    color: #fff;
}

.secundaria {
    background-color: #fff;
    color: #333;
}
</style>
