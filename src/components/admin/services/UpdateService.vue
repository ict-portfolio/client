<!-- <template>
    <div class="relative">
        <ImagesModal @selection="selectImage" v-if="viewModal" @cancel="cancelModal"
            class="fixed z-50 w-1/2 bg-white shadow-lg top-1/2 left-1/2" style="transform: translate(-50% , -50%);" />
        <form @submit.prevent="updateService" class="p-4">
            <div class="w-full">
                <span style="cursor: pointer;" class="material-icons-sharp" @click="$emit('reload')">arrow_back</span>
            </div>
            <div class="w-full">
                <img class="w-1/2 mx-auto rounded" v-if="previewImage" :src="previewImage" alt="">
            </div>
            <BaseInput class="h-fit w-full" :error="errors.name" type="text" :label="'Name'" v-model="service.name" />
            <div class="w-full mx-auto mt-2 mb-8">
                <label for="icon" class="block w-full mb-1">Services</label>
                <select v-model="service.category_id"
                    class="w-full text-gray-700 bg-white appearance-none focus:outline-none select select-primary focus:ring-0"
                    name="id" id="">
                    <option disabled selected>Select Category</option>
                    <!-- <option>{{ categories }}</option> -->
                    <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                </select>
                <p v-if="errors.categories" class="w-full text-danger">{{ errors.categories }}</p>
            </div>
            <div class="w-[48%] my-6">
                <p @click="viewModal = true"
                    class="flex items-center px-6 py-2 rounded-full shadow-lg cursor-pointer w-fit">
                    <span style="margin-right: 7px;" class="material-icons-sharp">photo_library</span>
                    Choose Photo
                </p>
                <p v-if="errors.image_id" class="w-full ml-2 font-semibold text-danger">{{ errors.image_id[0] }}</p>
            </div>
            <div class="w-[98%] mx-auto mb-32">
                <label for="description">Paragraph</label>
                <quill-editor class="w-full shadow-sm shadow-primary" v-model:content="service.paragraph" theme="snow"
                    toolbar="full" contentType="html"></quill-editor>
            </div>
            <div class="flex justify-end w-[96%]">
                <button class="bg-secondary px-6 shadow text-white py-1.5 rounded">Update</button>
            </div>

        </form>
    </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import ImagesModal from '../ImagesModal.vue';
import ApiService from '@/services/ApiService';
import filePath from '@/services/FilePath'
export default {
    components: {
        BaseInput, QuillEditor, ImagesModal
    },
    props: ["id"],
    data() {
        return {
            viewModal: false,
            errors: {},
            service: {},
            previewImage: '',
            categories: [],
            props: ["id"]
        }
    },
    mounted() {
        this.getCategory()
        ApiService.get(`admin/services/${this.$props.id}`).then((res) => {
            this.service = res.data.data
            this.previewImage = filePath.imagePath(this.service.image.image)
        }).catch((res) => {
            console.log(res);
        })
    },
    methods: {
        cancelModal() {
            this.viewModal = false;
        },
        selectImage(image) {
            this.service.image_id = image.id
            this.previewImage = filePath.imagePath(image.image)
            this.cancelModal()
        },
        updateService() {
            ApiService.patch(`admin/services/${this.$props.id}`, this.service).then(() => {
                this.$emit('reload')
            }).catch((res) => {
                console.log(res);
            })
        },
        getCategory() {
            ApiService.get('admin/categories').then((res) => {
                this.categories = res.data.data
                console.log(res.data.data);
            }).catch((err) => {
                console.log(err);
            })
        }
    },
}
</script>

<style scoped></style> -->