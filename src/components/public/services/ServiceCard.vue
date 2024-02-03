<template>
    <div class="w-[48%] relative p-3 rounded md:w-[30%] lg:w-[23%] bg-[#ffffff] my-4" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <figure>
            <img class="rounded" :src="service.default_image" :alt="service.name" />
        </figure>
        <div class="px-0 pt-2">
            <h2 class="mt-1 text-lg font-semibold line-clamp-2">{{ service.name }}</h2>
            <p class="text-[0.95rem] my-2 line-clamp-3" v-html="service.proposal"></p>
            <div class="flex justify-end">
                <router-link :to="{name : 'ServiceDetails' , params : {slug : service.slug}}" class="px-3 py-1.5 rounded bg-primary text-white text-sm">Read more</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props : {
            service : {
                type : Object,
                required : true
            }
        }
    }
</script>

<style scoped>

</style>