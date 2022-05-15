<template>
    <div class="flex">
        <label for="input" class="labelClass">{{ label }}</label>
        <input v-if="useMask" v-mask="localMask" type="text" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
        <input v-else :type="type" :placeholder="placeHolder" v-model="inputValue" ref="myInput"/>
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
        autoFocus: { type: Boolean, default: false},
        mask: { type: String, default: ''}
    },
    data() {
        return {
            localMask: '',
            useMask: false
        };
    },
    created() {
        this.useMask = !!this.mask;
        this.localMask = this.mask;
    },
    mounted() {
        if (this.autoFocus) {
            this.$refs.myInput.focus();
        }
    },
    computed: {
        inputValue: {
            get: function() {
                return this.value;
            },
            set: function(newValue) {
                this.$emit('onChange', newValue);
            }
        },
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
    min-width: 145px;
}

.labelClass{
    min-width: 165px;
}

.flex {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 5px;
}

</style>
