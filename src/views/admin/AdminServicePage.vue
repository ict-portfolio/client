<template>
    <div class="h-screen">
        <h1 class="p-4 text-2xl">Services</h1>
        <CreateService @reload="reloadPage" v-if="createForm"  class="p-4" />
        <ServicesView @showEdit="showEditForm" @showCreate="showCreateForm" v-if="indexTable" />
        <UpdateService :id="idForEdit" v-if="editForm" @reload="reloadPage" />
    </div>
</template>

<script>
import ServicesView from '../../components/admin/services/ServicesView.vue'
import CreateService from '../../components/admin/services/CreateService.vue'
import UpdateService from '../../components/admin/services/UpdateService.vue'
export default {
        components : {
            CreateService , ServicesView , UpdateService
        },
        data(){
            return {
                createForm : false,
                indexTable : true,
                editForm : false,
                idForEdit : null
            }
        },
        methods : {
            reloadPage () {
                this.indexTable = true;
                this.createForm = this.editForm = false;
            },
            showCreateForm(){
                this.createForm = true;
                this.indexTable = this.editForm = false;
            },
            showEditForm (id) {
                this.editForm = true;
                this.indexTable = this.createForm = false;
                this.idForEdit = id;
            }
        }
    }
</script>

<style scoped>

</style>