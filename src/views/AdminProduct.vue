<template>
    <b-container class="py-5 admin-product-container">
        <div v-if="isShow">
            <AdminProductBtnGroup
                :initProduct="initProduct"
                :initColors="initColors"
                @after-product-revise="afterProductRevise"
                @after-color-create="afterColorCreate"
                @after-color-revise="afterColorRevise"
                @after-inventory-change="afterInventoryChange"
                @after-submit-image="afterSubmitImage"
            />
        </div>
        <div v-if="isShow">
            <AdminProduct
                :initProduct="initProduct"
            />
        </div>
        <br>
        <a href="javascript:history.back()">回上一頁</a>
    </b-container>
</template>

<script>
import AdminProduct from '../components/AdminProduct.vue';
import AdminProductBtnGroup from '../components/AdminProductBtnGroup.vue';
import Request from '../api/index';
import { Toast } from '../utils/helpers';
const request = new Request();

export default {
    name: 'admin-product',
    components: {
        AdminProduct,
        AdminProductBtnGroup
    },
    data() {
        return {
            initProduct: {},
            initColors: [],
            isShow: false
        }
    },
    async created() {
        try {
            const res = await request.getAdminSpecificProduct(document.location.pathname);
            if (res.status === 'success') {
                this.initProduct = res.product;
                const temp = this.initProduct.inventories;
                let result = [];
                for (let i=0; i<temp.length; i++) {
                    result.push(temp[i].name);
                }
                this.initColors = result;
                this.isShow = true;
            }
        } catch (error) {
            Toast.fire({
                icon: 'warning',
                title: error.message
            });
        }
    },
    methods: {
        async afterProductRevise(data) {
            try {
                const url = document.location.pathname;
                const res = await request.putAdminProduct(url, data);
                if (res.status === 200) {
                    const res = await request.getAdminSpecificProduct(url)
                    this.initProduct = res.product;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Revise Product Success'
                    });
                }
            } catch (error) {
                Toast.fire({
                    icon: 'warning',
                    title: error.message
                });
            }
        },

        async afterColorCreate(data) {
            try {
                const res = await request.postNewColor(data);
                if (res.status === 200) {
                    const res = await request.getAdminSpecificProduct(document.location.pathname);
                    this.initProduct = res.product;
                    const temp = this.initProduct.inventories;
                    let result = [];
                    for (let i=0; i<temp.length; i++) {
                        result.push(temp[i].name);
                    }
                    this.initColors = result;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Create Product Color Success'
                    });
                }
            } catch (error) {
                Toast.fire({
                    icon: 'warning',
                    title: error.message
                });
            }
        },

        async afterColorRevise(data) {
            try {
                const res = await request.putReviseColor(this.initProduct.id, data);
                if (res.status === 200) {
                    const res = await request.getAdminSpecificProduct(document.location.pathname);
                    this.initProduct = res.product;
                    const temp = this.initProduct.inventories;
                    let result = [];
                    for (let i=0; i<temp.length; i++) {
                        result.push(temp[i].name);
                    }
                    this.initColors = result;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Revise Product Color Success'
                    });
                }
            } catch (error) {
                Toast.fire({
                    icon: 'warning',
                    title: error.message
                });
            }
        },

        async afterInventoryChange(uId, data) {
            try {
                const res = await request.putNewInventory(uId, data);
                if (res.status === 200) {
                    const res = await request.getAdminSpecificProduct(document.location.pathname);
                    this.initProduct = res.product;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Revise Inventory Success'
                    });
                }
            } catch (error) {
                Toast.fire({
                    icon: 'warning',
                    title: error.message
                });
            }
        },

        async afterSubmitImage(formData) {
            try {
                const uId = document.location.pathname.replace(/\/admin\/products\//gi, '');
                const res = await request.postNewImage(uId, formData);
                if (res.status === 200) {
                    const res = await request.getAdminSpecificProduct(document.location.pathname);
                    this.initProduct = res.product;
                    return Toast.fire({
                        icon: 'success',
                        title: 'Revise Product Image Success'
                    });
                }
            } catch (error) {
                Toast.fire({
                    icon: 'warning',
                    title: error.message
                });
            }
        }
    }
}
</script>

<style scoped>
.admin-product-container {
    padding-top: 0 !important;
}
</style>