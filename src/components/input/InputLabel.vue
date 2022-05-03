<template>
    <div>
        <label for="input" class="labelClass">{{ label }}</label> <br />
        <input :type="type" :placeholder="placeHolder" v-model="inputValue"/>
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
        return {};
    },
    computed: {
        inputValue: {
            get: function(){
                return this.value;
            },
            set: function(newValue){
                this.$emit('onChange', newValue);
            }
        }
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
    min-width: 145px;
}


</style>
