<template>
  <div inheritAttrs:false class="relative my-6 w-[48%] min-w-[200px]">
    <input
      class="peer w-full h-full rounded-[7px] border border-primary border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-1 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-primary placeholder-shown:border-t-primary focus:border focus:border-primary focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-primary"
      placeholder=" "
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <label
      class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[12px] font-normal leading-tight text-gray-1 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-primary before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-primary after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-1 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[12px] peer-focus:leading-tight peer-focus:text-gray-1 peer-focus:before:border-t peer-focus:before:border-l peer-focus:before:border-primary peer-focus:after:border-t peer-focus:after:border-r peer-focus:after:border-primary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-primary"
    >
      {{ label }}
    </label>
    <p v-if="error" class="ml-1 font-semibold text-danger">{{ error[0] }}</p>
  </div>
</template>

<script>
export default {
  props: ["modelValue" , "label" , "error"],
};
</script>

<style lang="scss" scoped>
</style>
