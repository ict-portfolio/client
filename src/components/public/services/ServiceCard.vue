<template>
    <div class="w-[48%] relative card p-2 pb-0 md:w-[30%] lg:w-[23%] bg-[#ffffff] my-4" style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px">
        <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
        <div class="px-0 pt-2 card-body">
            <h2 class="text-base card-title line-clamp-2">{{ service.name }}</h2>
            <p class="text-[0.95rem] line-clamp-2">{{ service.paragraph }}</p>
            <div class="justify-end mt-1 card-actions">
                <button class="border-0 btn btn-primary btn-sm">Read more</button>
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