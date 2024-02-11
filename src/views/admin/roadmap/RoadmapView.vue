<template>
    <div class="h-screen">
        <h1 class="p-4 text-2xl">Roadmap</h1>
        <vue-good-table
            :columns="columns"
            :rows="roadmap"
            :search-options="{
                enabled: true,
                placeholder: 'Search categories',
            }">
        
            <template #table-actions>
                <router-link :to="{name : 'CreateRoadmap'}" class="relative px-6 py-1.5 mx-4 text-white border rounded-sm top-1 bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</router-link>
            </template>

            <template #table-row="props">
                <span class="text-white" v-if="props.column.field == 'actions'">
                    <router-link :to="{name : 'EditRoadmap' , params : {id : props.row.id}}" title="Edit Roadmap" class="p-2 pt-4 pb-1 mx-3 rounded-full bg-tertiary">
                        <span class="material-icons-outlined">tune</span>
                    </router-link>
                    <button @click="deleteItem(props.row.id)" title="Delete Roadmap" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
                        <span class="material-icons-outlined">delete</span>
                    </button>
                </span>
                <span v-else-if="props.column.field == 'description'">
                    <p class="text-sm">{{ props.row.description.slice(0 , 80) }} . . .</p>
                </span>
                <span class="text-sm" v-else-if="props.column.field == 'status'">
                    <p class="text-primary" v-if="props.row.status == 'completed'">Completed</p>
                    <p class="text-secondary" v-else-if="props.row.status == 'progress'">In Progress</p>
                    <p class="text-tertiary" v-else>Upcoming</p>
                </span>
                <span class="text-sm" v-else>
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
                roadmap : [],
                filePath : filePath,
                columns : [
                    {
                        label : 'Id',
                        field : 'id'
                    },
                    {
                        label : 'Title',
                        field : 'title',
                        width : '25%'
                    },
                    {
                        label : 'Description',
                        field : 'description',
                    },
                    {
                        label : 'Status',
                        field : 'status',
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
            getRoadmap() {
                ApiService.get('admin/roadmap').then((res) => {
                    this.roadmap = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteItem(id) {
                ApiService.delete(`admin/roadmap/${id}`).then(() => {
                    this.getRoadmap();
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getRoadmap();
        }
    }
</script>

<style scoped>

</style>