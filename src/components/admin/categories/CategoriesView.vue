<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="categories"
            :search-options="{
                enabled: true,
                placeholder: 'Search categories',
            }">
        
            <template #table-actions>
                <button @click="$emit('showCreate')" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-tertiary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

            <template #table-actions-bottom>
                <p class="p-1">You can add anything here</p>
            </template>

            <template #table-row="props">
                <span v-if="props.column.field == 'image'">
                    <img class="w-32" :src="filePath.imagePath(props.row.image.image)" alt="">
                </span>
                <span class="text-white" v-else-if="props.column.field == 'actions'">
                    <!-- <button title="Edit Category" class="p-2 pb-0.5 mx-3 rounded-full bg-tertiary">
                        <span class="material-icons-outlined">tune</span>
                    </button> -->
                    <button @click="deleteCategory(props.row.id)" title="Delete Category" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
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
import filePath from '@/services/FilePath';
import axios from 'axios';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
    export default {
        components: {
            VueGoodTable,
        },
        data(){
            return {
                categories : [],
                filePath : filePath,
                columns : [
                    {
                        label : 'Id',
                        field : 'id'
                    },
                    {
                        label : 'Image',
                        field : 'image',
                        width : '25%'
                    },
                    {
                        label : 'Name',
                        field : 'name',
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
            getCategories() {
                axios.get('admin/categories').then((res) => {
                    this.categories = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteCategory(id) {
                axios.delete(`admin/categories/${id}`).then(() => {
                    this.getCategories();
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getCategories();
        }
    }
</script>

<style scoped>

</style>