<template>
    <div class="min-h-screen">
        <h1 class="p-4 text-2xl">Products</h1>
        <vue-good-table
            :columns="columns"
            :rows="products"
            :search-options="{
                enabled: true,
                placeholder: 'Search products',
            }">
        
            <template #table-actions>
                <button @click="$router.push({name : 'CreateProduct'})" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

            <template #table-row="props">
                <span class="flex justify-center" v-if="props.column.field == 'actions'">
                    <router-link :to="{name : 'AdminProductDetails' , params : {id : props.row.id}}" title="View Product Details">
                        <span class="material-icons-outlined">info</span>
                    </router-link>
                </span>
                <span v-else-if="props.column.field == 'description'">
                    <p class="truncate line-clamp-2" v-html="props.row.description"></p>
                </span>
                <span v-else>
                {{props.formattedRow[props.column.field]}}
                </span>
            </template>

        </vue-good-table>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
    export default {
        components: {
            VueGoodTable,
        },
        data(){
            return {
                products : [],
                filePath : filePath,
                columns : [
                    {
                        label : 'Id',
                        field : 'id'
                    },
                    {
                        label : 'Name',
                        field : 'name',
                    },
                    {
                        label : 'Price',
                        field : 'price',
                    },
                    {
                        label : 'Discount',
                        field : 'discount',
                    },
                    {
                        label : 'Description',
                        field : 'description',
                        width : '20%'
                    },
                    {
                        label : 'Actions',
                        field : 'actions',
                        width : '20%'
                    },
                ]
            }
        },
        methods : {
            getProducts() {
                ApiService.get('admin/products').then((res) => {
                    this.products = res.data.data
                    console.log(res.data.data);
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>