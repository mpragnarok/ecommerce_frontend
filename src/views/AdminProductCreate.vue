<template>
    <b-container class="py-5">
        <h2>創建新的產品吧</h2>
        <AdminProductCreate
            @after-create-product="afterCreateProduct"
        />
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminProductCreate from '../components/AdminProductCreate.vue';
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    components: {
        AdminProductCreate
    },
    methods: {
        async afterCreateProduct(formData) {
            const res = await request.postNewProduct(formData);
            if (res.status === 200) {
                return Toast.fire({
                    icon: 'success',
                    title: `${res.data.message}`
                });
            }
            Toast.fire({
                    icon: 'warning',
                    title: `${res.data.message}`
            });
        }
    }
}
</script>