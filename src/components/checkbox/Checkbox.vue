<template>
    <div class="check">

        <label>
            <input id="check" type="checkbox" v-model="inputValue" />
             {{ text }}</label>
    </div>
</template>

<script>
export default {
    name: 'checkbox',
    model: {
        prop: 'value',
        event: 'onChange',
    },
    props: {
        text: { type: String, default: "" },
        value: { type: Boolean, defaul: false },
    },
    data() {
        return {};
    },
    computed: {
        inputValue: {
            get: function () {
                return this.value;
            },
            set: function (newValue) {
                this.$emit("onChange", newValue);
            },
        },
    },
};
</script>

<style scoped>

.check {
    display: flex;
    align-content: center;
    flex-direction: row;
    padding: 0 5px;
    width: 100%;
}

</style>
