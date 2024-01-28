<template>
    <div class="h-screen">
        <h1 class="p-4 text-2xl">Services</h1>
        <vue-good-table
            :columns="columns"
            :rows="services"
            :search-options="{
                enabled: true,
                placeholder: 'Search services',
            }">
        
            <template #table-actions>
                <button @click="$router.push({name : 'CreateService'})" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

             <template #table-row="props">
                <span v-if="props.column.field == 'default_image'">
                    <img :src="props.row.default_image" alt="">
                </span>
                <span class="flex justify-center" v-else-if="props.column.field == 'actions'">
                    <router-link :to="{name : 'AdminServiceDetails' , params : {id : props.row.id}}" title="View Service Details">
                        <span class="material-icons-outlined">info</span>
                    </router-link>
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
                services : [],
                filePath : filePath,
                columns : [
                    {
                        label : 'Id',
                        field : 'id'
                    },
                    {
                        label : 'Image',
                        field : 'default_image'
                    },
                    {
                        label : 'Name',
                        field : 'name',
                    },
                    {
                        label : 'Category',
                        field : 'category_name',
                    },
                    {
                        label : 'Created_at',
                        field : 'created_at'
                    },
                    {
                        label : 'Actions',
                        field : 'actions'
                    }
                ]
            }
        },
        mounted () {
            ApiService.get('admin/services').then((res) => {
                this.services = res.data.data.services
                console.log(res.data.data.services);
            }).catch((res) => {
                console.log(res);
            })
        }
        // methods : {
        //     getServices() {
        //         ApiService.get('admin/services').then((res) => {
        //             this.services = res.data.data
        //             console.log(res.data.data);
        //         }).catch((res) => {
        //             console.log(res);
        //         })
        //     }
        // },
        // mounted(){
        //     this.getServices();
        // }
    }
</script>

<style scoped>

</style>