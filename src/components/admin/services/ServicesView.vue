<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="services"
            :search-options="{
                enabled: true,
                placeholder: 'Search Services',
            }">
        
            <template #table-actions>
                <button @click="$emit('showCreate')" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

            <template #table-actions-bottom>
                <p class="p-1">You can add anything here</p>
            </template>

            <template #table-row="props">
                <span v-if="props.column.field == 'image'">
                    <img class="w-32" :src="filePath.imagePath(props.row.image.image)" alt="">
                </span>
                <span class="text-white" v-else-if="props.column.field == 'actions'">
                    <button @click="$emit('showEdit' , props.row.id)" title="Edit Category" class="p-2 pb-0.5 mx-3 rounded-full bg-tertiary">
                        <span class="material-icons-outlined">tune</span>
                    </button>
                    <button @click="deleteService(props.row.id)" title="Delete Category" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
                        <span class="material-icons-outlined">delete</span>
                    </button>
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
        data() {
            return {
                services : [],
                filePath : filePath,
                columns : [
                    {
                        label : 'Id',
                        field : 'id',
                        width : '3%'
                    },
                    {
                        label : 'Image',
                        field : 'image',
                        width : '20%'
                    },
                    {
                        label : 'Name',
                        field : 'name',
                        width : '25%'
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
            getServices() {
                ApiService.get('admin/services').then((res) => {
                    this.services = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteService(id) {
                ApiService.delete(`admin/services/${id}`).then(() => {
                    this.getServices();
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getServices();
        }

    }
</script>

<style scoped>

</style>