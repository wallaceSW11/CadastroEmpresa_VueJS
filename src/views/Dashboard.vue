<template>
    <div class="container">
        <Title titulo="Dashboad" />

        <div class="content">
            <table class="table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Quantity</th>
                    </tr>
                    <tr>
                        <td>To send</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Waiting response</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Cancellation to send</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Waiting cancellation</td>
                        <td>0</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>
</template>

<script>

import Title from '@/components/title/Title.vue';

export default {
    components:{
        Title
    }

}
</script>