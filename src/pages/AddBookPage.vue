<template>
    <div class="d-flex justify-content-center align-content-center">
        <form
            class="col-lg-4 col-md-6 col-8 mb-4"
            @submit.prevent="submit"
            enctype="multipart/form-data"
        >
            <div class="mb-3">
                <label for="bookName" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="bookName"
                    v-model="product.name"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="bookDescription" class="form-label"
                    >Description</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="bookDescription"
                    v-model="product.description"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="bookPrice" class="form-label">Price</label>
                <input
                    type="number"
                    class="form-control"
                    id="bookPrice"
                    v-model="product.price"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="bookText" class="form-label">Text</label>
                <textarea
                    class="form-control"
                    id="bookText"
                    minlength="50"
                    v-model="product.text"
                    required
                ></textarea>
            </div>
            <div class="mb-3">
                <label for="file" class="form-label">File</label>
                <input
                    type="file"
                    class="form-control"
                    id="file"
                    ref="file"
                    @change="handleFileUpload()"
                />
            </div>
            <div class="mb-3">
                <label for="bookCategory" class="form-label">Category</label>
                <select
                    id="bookCategory"
                    class="form-select mb-3"
                    v-model="product.category_id"
                    required
                >
                    <option
                        v-bind:key="category.id"
                        v-for="category of getCategories"
                        :value="category.id"
                    >
                        {{ category.name }}
                    </option>
                </select>
            </div>

            <button
                type="submit"
                class="btn btn-outline-success w-100 rounded-5 p-2 px-5 mt-3"
            >
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "AddBookPage",
    computed: {
        ...mapGetters(["getCategories", "getMedia"]),
    },
    data() {
        return {
            product: {
                name: "",
                price: "",
                description: "",
                text: "",
                category_id: "",
            },
            file: "",
        };
    },
    methods: {
        ...mapActions(["pushBook", "pushFile", "fetchCategories"]),
        submit() {
            const formData = new FormData();
            formData.append("file", this.file);
            const bookData = {
                name: this.product.name,
                price: this.product.price,
                description: this.product.description,
                text: this.product.text,
                category_id: this.product.category_id,
            };
            if (this.file) {
                bookData.photo = this.file;
            }
            this.pushBook(bookData)
                .then(() => {
                    this.$router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
    },

    mounted() {
        this.fetchCategories();
        console.log(this.product.category);
        console.log("product page ishladi");
        console.log(this.getCategories);
        console.log(this.getMedia);
    },
};
</script>

<style scoped></style>
