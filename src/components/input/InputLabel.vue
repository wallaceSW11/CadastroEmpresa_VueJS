<template>
    <div>
        <label for="input">{{ label }}</label> <br />
        <input :type="type" :placeholder="placeHolder" v-model="valor" />
    </div>
</template>

<script>
export default {
    name: 'InputLabel',
    model: {
        prop: 'value',
        event: 'onChange',
    },
    props: {
        label: { type: String, default: '' },
        type: { type: String, default: "text" },
        placeHolder: { type: String, default: '' },
        value: { type: String, default: '' },
    },
    data() {
        return {
            valor: this.value,
        };
    },
    watch: {
        valor() {
            this.$emit('onChange', this.valor);
        },
    },
    computed: {
        // update()
        // {
        //     return this.value = valor;
        // }
    }
};
</script>

<style scoped>
input {
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 20px;
    display: inline-block;
    border: 1px solid var(--primary-color);
    outline: none;
    box-sizing: border-box;
}
</style>
