<template>
    <div>
        <vue-good-table :columns="columns" :rows="rootCategories" :search-options="{
            enabled: true,
            placeholder: 'Search categories',
        }">

            <template #table-actions>
                <button @click="$emit('showRootCreate')" class="px-6 py-1 mx-3 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button>
            </template>

            <template #table-row="props">
                <span v-if="props.column.field == 'icon'">
                    <img v-if="props.row.icon" class="w-[24px]" :src="props.row.icon" alt="">
                </span>
                <span class="text-white" v-else-if="props.column.field == 'actions'">
                    <button @click="deleteRootCategory(props.row.id)" title="Delete Category"
                        class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
                        <span class="material-icons-outlined">delete</span>
                    </button>
                </span>
                <span class="font-semibold capitalize" v-else>
                    {{ props.formattedRow[props.column.field] }}
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
        VueGoodTable
    },
    data() {
        return {
            rootCategories: [],
            filePath: filePath,
            columns: [
                {
                    label : 'Id',
                    field : 'id'
                },
                {
                    label: "Icon",
                    field: "icon"
                },
                {
                    label: "Name",
                    field: "name"
                },
                {
                    label: "Type",
                    field: "type"
                },
                {
                    label : "Actions",
                    field : 'actions'
                }
            ]
        }
    },
    mounted() {
        this.getRootCategories();
    },
    methods : {
        getRootCategories () {
            ApiService.get('admin/root-categories').then((res) => {
                this.rootCategories = res.data.data
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
        },
        deleteRootCategory (id) {
            ApiService.delete(`admin/root-categories/${id}`).then(() => {
                this.getRootCategories()
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style scoped></style>