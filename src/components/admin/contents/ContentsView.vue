<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="contents"
            :search-options="{
                enabled: true,
                placeholder: 'Search categories',
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
                    <button @click="deleteContent(props.row.id)" title="Delete Category" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
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
                contents : [],
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
                        label : 'Category',
                        field : 'category.name',
                    },
                    {
                        label : 'Status',
                        field : 'status',
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
            getContents() {
                ApiService.get('admin/contents').then((res) => {
                    this.contents = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteContent(id) {
                ApiService.delete(`admin/contents/${id}`).then(() => {
                    this.getContents();
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getContents();
        }

    }
</script>

<style scoped>

</style>