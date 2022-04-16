<template>
    <div class="container">
        <Title titulo="Dashboad" />

        <div class="content">
            <table class="table">
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Quantidade</th>
                    </tr>
                    <tr>
                        <td>Envio pendente</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Retorno pendente</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Envio cancelamento</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Retorno cancelamento</td>
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