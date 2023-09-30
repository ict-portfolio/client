<template>
    <div class="h-screen">
            <h1 class="p-4 text-2xl">Contents</h1>
            <CreateContent @reload="reloadPage" v-if="createForm"  class="p-4" />
            <ContentsView @showEdit="showEditForm" @showCreate="showCreateForm" v-if="indexTable" />
            <UpdateContent :id="idForEdit" v-if="editForm" @reload="reloadPage" />
    </div>
</template>

<script>
import ContentsView from '../../components/admin/contents/ContentsView.vue'
import CreateContent from '../../components/admin/contents/CreateContent.vue'
import UpdateContent from '../../components/admin/contents/UpdateContent.vue'
    export default {
        components : {
            CreateContent , ContentsView , UpdateContent
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