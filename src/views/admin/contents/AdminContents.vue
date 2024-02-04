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
                <router-link :to="{name : 'AdminCreateContent'}" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</router-link>
            </template>

            <template #table-actions-bottom>
                <div class="flex justify-end">
                    <MainPagination v-if="paginationData.current_page"  :paginationProp="paginationData" @next="paginate" @previous="paginate" @random="paginate" />
                </div>
            </template>

            <template #table-row="props">
                <span v-if="props.column.field == 'image'">
                    <img class="w-32" :src="props.row.image.url" alt="">
                </span>
                <span v-else-if="props.column.field == 'status'">
                    <span class="text-danger" v-if="props.row.status == 0">Not Published</span>
                    <span v-else class="text-tertiary">Published</span>
                </span>
                <span class="flex justify-center" v-if="props.column.field == 'actions'">
                    <router-link :to="{name : 'AdminDetailContent' , params : {id : props.row.id}}" title="View Content Details">
                        <span class="material-icons-outlined">info</span>
                    </router-link>
                </span>
                <!-- <span v-else>
                {{props.formattedRow[props.column.field]}}
                </span> -->
            </template>

        </vue-good-table>
    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
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