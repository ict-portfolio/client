<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="contacts"
            :search-options="{
                enabled: true,
                placeholder: 'Search contacts',
            }">

            <template #table-row="props">
                <span v-if="props.column.field == 'image'">
                    <img v-if="props.row.image" class="w-32" :src="filePath.imagePath(props.row.image.image)" alt="">
                </span>
                <span class="text-white" v-else-if="props.column.field == 'actions'">
                    <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${props.row.email}`" target="_blank" title="Send Message" class="px-2 pt-4 pb-1.5 mx-3 rounded-full bg-tertiary">
                        <span class="material-icons-sharp">mail</span>
                    </a>
                    <button @click="deleteContact(props.row.id)" title="Delete Contact" class="p-2 hover:scale-105 mx-3 pb-0.5 rounded-full bg-danger">
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
        data(){
            return {
                contacts : [],
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
                        label : 'Email',
                        field : 'email',
                    },
                    {
                        label : 'Message',
                        field : 'message',
                        width : '40%'
                    },
                    {
                        label : 'Actions',
                        field : 'actions'
                    }
                ]
            }
        },
        methods : {
            getContacts() {
                ApiService.get('admin/contacts').then((res) => {
                    this.contacts = res.data.data
                }).catch((res) => {
                    console.log(res);
                })
            },
            deleteContact(id) {
                ApiService.delete(`admin/contacts/${id}`).then(() => {
                    this.getContacts();
                }).catch((res) => {
                    console.log(res);
                })
            }
        },
        mounted(){
            this.getContacts();
        }
    }
</script>

<style scoped>

</style>