<template>
    <b-container class="py-5">
        <h1>管理員頁面</h1>
        <AdminNav />
        <b-container class="py-5" v-if="isShow">
            <AdminProductsTable
                :initProducts="initProducts"
                @after-delete-product="afterDeleteProduct"
            />
        </b-container>
    </b-container>
</template>

<script>
import AdminNav from '../components/AdminNav.vue';
import AdminProductsTable from '../components/AdminProductsTable.vue';
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    components: {
        AdminNav,
        AdminProductsTable
    },
    data() {
        return {
            initProducts: [],
            isShow: true
        }
    },
    async created() {
        try {
            const res = await request.getAdminHomePage();
            if (res.status === 'success') {
                this.initProducts = res.products.sort((a, b) => b.id - a.id);
                this.isShow = true;
            }
        } catch (error) {
            Toast.fire({
                icon: 'warning',
                title: 'Something went wrong'
            });
        }
    },
    methods: {
        async afterDeleteProduct(id) {
            const res = await request.deleteExistProduct(id);
            if (res.status === 'success') {
                const res = await request.getAdminHomePage();
                res.status === 'success'
                    ? this.initProducts = res.products.sort((a, b) => b.id - a.id)
                    : null;
                this.isShow = true;
                return Toast.fire({
                    icon: 'success',
                    title: 'Delete Product success'
                });
            }
            return Toast.fire({
                icon: 'error',
                title: 'Delete Product fail'
            });
        }
    }
}
</script>