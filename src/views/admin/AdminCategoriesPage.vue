<template>
    <div class="h-screen">
        <h1 class="p-4 text-2xl">Categories</h1>
        <CreateCategory @reload="reloadPage" class="w-1/2 mx-auto mt-8" v-if="createForm" />
        <CategoriesView @showCreate="showCreateForm" v-if="indexTable" />
    </div>
</template>

<script>
import CreateCategory from '@/components/admin/categories/CreateCategory.vue'
import CategoriesView from '@/components/admin/categories/CategoriesView.vue'
    export default {
        components : {
            CreateCategory , CategoriesView
        },
        data(){
            return {
                createForm : false,
                indexTable : true
            }
        },
        methods : {
            reloadPage () {
                this.createForm = false;
                this.indexTable = true;
            },
            showCreateForm(){
                this.createForm = true;
                this.indexTable = false;
            }
        }
    }
</script>

<style scoped>

</style>