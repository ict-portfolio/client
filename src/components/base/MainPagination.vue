<template>
    <div class="flex justify-center p-2 font-sans">
            <div class="flex items-center bg-[#eff3f7] sm:px-8 px-2 rounded-full shadow-lg py-3">
                <button title="first page" @click="paginateRandom(1)" class="items-center hidden mx-2 sm:flex">
                    <span class="material-icons-outlined" style="font-size: 1.2rem;margin-right: 10px;">keyboard_double_arrow_left</span>
                </button>
                <button title="previous page" :class="paginationData.current_page == 1 ? 'blur-[1px]' : ''"  @click="paginatePrevious" class="flex items-center mx-2">
                    <span class="material-icons-outlined"  style="font-size: 0.9rem;margin-right: 3px;">arrow_back_ios</span>
                </button>
                <div>
                    <span v-for="n in  this.paginationData.paginate_pages" :key="n">
                        <span v-if="n > 0 && n <= paginationData.last_page" @click="paginateRandom(n)"  :class="n ==paginationData.current_page ? 'bg-blue-2 text-white bg-secondary' : ''" class="px-[0.75rem] py-[0.4rem] mx-1 rounded-full cursor-pointer">
                            {{ n }}
                        </span>
                    </span>
                </div>
                <button title="next page" :class="paginationData.last_page <= paginationData.current_page ? 'blur-[1px]' : ''" @click="paginateNext" class="flex items-center mx-2">
                    <span class="material-icons-outlined" style="font-size: 0.9rem;margin-left: 3px;">arrow_forward_ios</span>
                </button>
                <button title="last page" @click="paginateRandom(paginationData.last_page)" class="items-center hidden mx-2 sm:flex">
                    <span class="material-icons-outlined" style="font-size: 1.2rem;margin-left: 10px;">keyboard_double_arrow_right</span>
                </button>
            </div>
        </div>
    </template>
    
    <script>
    
        export default {
            props : {
                paginationProp : {
                    type : Object
                }
            },
    
            data(){
                return {
                    paginationData : {}
                }
            },
    
            watch : {
                'paginationData.current_page'() {
                    this.generatePaginatePages();
                }
            },
    
            methods : {
                generatePaginatePages (){
                    this.paginationData.paginate_pages = [];
                    for (let i = this.paginationData.current_page - 2; i < this.paginationData.current_page + 3; i++) {
                        this.paginationData.paginate_pages.push(i);
                    }
                },
                paginateNext(){
                    if (this.paginationData.current_page < this.paginationData.last_page) {
                        this.paginationData.current_page++;
                        this.$emit('next' , this.paginationData.current_page)
                    }
                },
                paginatePrevious(){
                    if(this.paginationData.current_page > 0){
                        this.paginationData.current_page--;
                        this.$emit('previous' , this.paginationData.current_page)
                    }
                },
                paginateRandom(n){
                    this.paginationData.current_page = n;
                    this.$emit('random' , this.paginationData.current_page)
                },
            },
    
            mounted () {
                this.paginationData = this.paginationProp
                this.paginationData.paginate_pages = [];
            }
        }
    </script>
    
    <style lang="scss" scoped>
    
    </style>