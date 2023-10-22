<template>
    <div>
        <vue-good-table
            :columns="columns"
            :rows="users"
            :search-options="{
                enabled: true,
                placeholder: 'Search categories',
            }">
        
            <template #table-actions>
                <!-- <button @click="$emit('showCreate')" class="px-6 py-1 mx-4 text-white border rounded-sm bg-primary border-primary hover:bg-transparent hover:text-gray-1">Create</button> -->
            </template>

            <template #table-row="props">
                <span class="text-white" v-if="props.column.field == 'actions'">
                    <button @click="demote(props.row.id)" v-if="props.row.roles.length && props.row.roles[0].name == 'admin'" class="px-2 py-1 m-2 rounded h-fit bg-secondary">Demote</button>
                    <button v-else @click="promote(props.row.id)" class="px-2 py-1 m-2 rounded h-fit bg-primary">Make Admin</button>
                    <button class="px-2 py-1 m-2 rounded h-fit bg-danger">Remove Account</button>
                </span>
                <span v-else-if="props.column.field == 'role' && props.row.roles.length">
                    <span class="text-primary">{{ props.row.roles[0].name }}</span>
                </span>
                <span v-else-if="props.column.field == 'role' && props.row.roles.length==0">
                    <span class="text-tertiary">user</span>
                </span>
                <span v-else>
                    <span :class="authStore.user.id == props.row.id ? 'text-[#e665d0]' : ''">{{props.formattedRow[props.column.field]}}</span>
                </span>
            </template>

        </vue-good-table>

        <p v-if="message" class="absolute z-50 px-6 py-3 text-white rounded shadow-xl bg-tertiary top-1/2 left-1/2" style="transform: translate(-50% , -50%);">{{ message }}</p>

    </div>
</template>

<script>
import ApiService from '@/services/ApiService';
import { useAuthStore } from '@/stores/auth';
import { VueGoodTable } from 'vue-good-table-next';
import 'vue-good-table-next/dist/vue-good-table-next.css'
    export default {
        components : {
            VueGoodTable
        },
        data(){
            return {
                users : [],
                authStore : useAuthStore(),
                message : '',
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
                        label : 'Role',
                        field : 'role',
                    },
                    {
                        label : 'Actions',
                        field : 'actions',
                        width : '35%'
                    },
                ]

            }
        },
        mounted () {
            this.getUsers()
        },
        methods : {
            getUsers(){
                ApiService.get('admin/users').then((res) => {
                    this.users = res.data.data;
                    console.log(this.users);
                }).catch((res) => {
                    console.log(res);
                })
            },
            promote(id){
                ApiService.get(`admin/make-admin/${id}`).then((res) => {
                    this.message = res.data.message
                    setTimeout(()=> {
                        this.message = '';
                    } , 2000);
                    let user = res.data.data
                    this.users = this.users.map((u) => {
                        if (user.id == u.id) {
                            u = user
                        }
                        return u
                    })
                }).catch((res) => {
                    console.log(res);
                })
            },
            demote(id){
                ApiService.get(`admin/demote-admin/${id}`).then((res) => {
                    this.message = res.data.message
                    setTimeout(()=> {
                        this.message = '';
                    } , 2000);
                    let user = res.data.data
                    console.log(user);
                    this.users = this.users.map((u) => {
                        if (user.id == u.id) {
                            u = user
                        }
                        return u
                    })
                    console.log(this.users);
                }).catch((res) => {
                    console.log(res);
                })
            }

        }
    }
</script>

<style scoped>

</style>