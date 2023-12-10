<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="contents"
            :search-options="{
                enabled: true,
                placeholder: 'Search Contents',
            }">
        
            <template #table-actions>
                <button @click="$emit('showCreate')" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

            <template #table-actions-bottom>
                <div class="flex justify-end">
                    <MainPagination v-if="paginationData.current_page"  :paginationProp="paginationData" @next="paginate" @previous="paginate" @random="paginate" />
                </div>
            </template>

            <template #table-row="props">
                <span v-if="props.column.field == 'image'">
                    <img class="w-32" :src="filePath.imagePath(props.row.image.image)" alt="">
                </span>
                <span v-else-if="props.column.field == 'status'">
                    <span class="text-danger" v-if="props.row.status == 0">Not Published</span>
                    <span v-else class="text-tertiary">Published</span>
                </span>
                <span class="text-white" v-else-if="props.column.field == 'actions'">
                    <router-link :to="{name : 'ContentView' , params : {slug : props.row.slug}}" title="Delete Content" class="p-2 pt-4 pb-1 mx-3 rounded-full hover:scale-105 bg-secondary">
                        <span class="material-icons-outlined">fullscreen</span>
                    </router-link>
                    <button @click="$emit('showEdit' , props.row.id)" title="Edit Content" class="p-2 pb-0.5 hover:scale-105 mx-3 rounded-full bg-tertiary">
                        <span class="material-icons-outlined">tune</span>
                    </button>
                    <button @click="deleteContent(props.row.id)" title="Delete Content" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
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
import MainPagination from '@/components/base/MainPagination.vue'
    export default {
        components: {
            VueGoodTable, MainPagination
        },
        data() {
            return {
                contents : [],
                filePath : filePath,
                paginationData : {},
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
            getContents(page) {
                ApiService.get(`admin/contents?page=${page}`).then((res) => {
                    this.contents = res.data.data.contents
                    this.paginationData = res.data.data.pagination
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteContent(id) {
                ApiService.delete(`admin/contents/${id}`).then(() => {
                    this.getContents(1);
                }).catch((res) => {
                    console.log(res);
                })
            },
            paginate(page){
                this.getContents(page)
            },
        },
        mounted(){
            this.getContents(1);
        }

    }
</script>

<style scoped>

</style>