<template>
  <div
    class="w-[48%] relative card p-3 md:w-[30%] lg:w-[23%] bg-[#ffffff] my-4"
    style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px"
  >
  <figure>
      <img
        src="https://www.stuff.tv/wp-content/uploads/sites/2/2021/04/Stuff-Best-Laptop-Lead.png?resize=1080,720"
        alt=""
      />
    </figure>
    <span
      class="absolute top-0 shadow-md right-0 px-3 py-0.5 text-sm font-sans text-white rounded-se-xl rounded-es-xl bg-success"
      v-if="product.discount > 0"
      >{{ product.discount }}% Off</span
    >
    <div class="px-0 pt-2 card-body">
      <h1 class="text-base card-title line-clamp-2">{{ product.name }}</h1>
      <p class="font-sans text-lg text-primary">
        <span v-if="product.discount > 0">
          <span class="mr-2 line-through text-neutral" >{{ `$ ${product.price}` }}</span>
          <span>${{ product.price - (product.price * product.discount/100) }}</span>
        </span>
        <span v-else>$ {{ product.price }}</span>
      </p>
      <p class="text-sm">
        <span v-if="product.instock" class="text-success">Instock</span>
        <span v-else class="text-danger">Out of Stock</span>
      </p>
    </div>
    <div class="justify-end card-actions">
      <router-link  :to="{name : 'ProductDetails' , params : {slug : product.slug}}" class="text-white border-0 btn btn-primary btn-sm">see more</router-link>
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