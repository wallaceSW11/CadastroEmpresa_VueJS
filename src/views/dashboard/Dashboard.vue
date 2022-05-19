<template>
    <div class="container">
        <Title text="Dashboad" />

        <div class="content">
            <table class="table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td>Enterprises registred</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Enterprises inactive</td>
                        <td>2</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>

import Title from '@/components/titles/title/Title.vue';

export default {
    components:{
        Title
    }

}
</script>

<style lang="scss" src="./style.scss" scoped />