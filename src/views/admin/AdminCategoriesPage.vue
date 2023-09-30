<template>
    <div class="h-screen">
        <h1 class="p-4 text-2xl">Categories</h1>
        <CreateCategory @reload="reloadPage" class="w-1/2 mx-auto mt-8" v-if="createForm" />
        <CategoriesView @showUpdate="showUpdateForm" @showCreate="showCreateForm" v-if="indexTable" />
        <UpdateCategory :id="idForEdit" @reload="reloadPage" v-if="updateForm" />
    </div>
</template>

<script>
import CreateCategory from '@/components/admin/categories/CreateCategory.vue'
import CategoriesView from '@/components/admin/categories/CategoriesView.vue'
import UpdateCategory from '@/components/admin/categories/UpdateCategory.vue'
    export default {
        components : {
            CreateCategory , CategoriesView , UpdateCategory
        },
        data(){
            return {
                createForm : false,
                indexTable : true,
                updateForm : false,
                idForEdit : null
            }
        },
        methods : {
            reloadPage () {
                this.indexTable = true;
                this.createForm = this.updateForm = false;
            },
            showCreateForm(){
                this.createForm = true;
                this.indexTable = this.updateForm = false;
            },
            showUpdateForm (id) {
                this.updateForm = true;
                this.indexTable = this.createForm = false;
                this.idForEdit = id;
            }
        }
    }
</script>

<style scoped>

</style>