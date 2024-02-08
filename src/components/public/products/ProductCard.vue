<template>
  <div
    class="sm:w-[48%] relative p-3 rounded-xl lg:w-[23%] bg-[#ffffff] my-4"
    style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px"
  >
  <figure>
      <img
        class="w-full rounded aspect-[16/9]"
        src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png?resize=1080,720"
        alt=""
      />
    </figure>
    <span
      class="absolute top-0 shadow-md right-0 px-3 py-0.5 text-sm font-sans text-white rounded-se-xl rounded-es-xl bg-green"
      v-if="product.discount > 0"
      >{{ product.discount }}% Off</span
    >
    <div class="px-0 pt-2">
      <h1 class="mt-1 text-lg font-semibold line-clamp-2">{{ product.name }}</h1>
      <p class="my-2 font-sans font-semibold">
        <span v-if="product.discount > 0">
          <span class="mr-2 line-through text-neutral" >{{ `$ ${product.price}` }}</span>
          <span class="text-lg text-primary">${{ product.price - (product.price * product.discount/100) }}</span>
        </span>
        <span class="text-primary" v-else>$ {{ product.price }}</span>
      </p>
      <p class="text-sm">
        <span v-if="product.instock" class="font-semibold text-green">Instock</span>
        <span v-else class="text-danger">Out of Stock</span>
      </p>
    </div>
    <div class="flex justify-end">
      <router-link  :to="{name : 'ProductDetails' , params : {slug : product.slug}}" class="px-3 py-1.5 rounded bg-green hover:bg-green/80 text-white font-bold text-sm">show details</router-link>
    </div>
  </div>
</template>

<script>
export default {
    props : {
        product : {
            type : Object,
            required : true
        }
    }
};
</script>

<style scoped>
</style>