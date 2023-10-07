<template>
            <div class="d-flex justify-content-center align-content-center">
                <form v-if="product" class="col-lg-4 col-md-6 col-8 mb-4" @submit.prevent="edit" enctype="multipart/form-data">
                    <div class="mb-3">
                        <label for="bookName" class="form-label">Name</label>
                        <input
                            type="text"
                            class="form-control"
                            id="bookName"
                            v-model="product.name"
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
                        />
                    </div>
                    <div class="mb-3">
                        <label for="bookPrice" class="form-label">Price</label>
                        <input
                            type="number"
                            class="form-control"
                            id="bookPrice"
                            v-model="product.price"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="bookText" class="form-label">Text</label>
                        <textarea
                            class="form-control"
                            id="bookText"
                            v-model="product.text"
                        >
                        </textarea>
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
                        <label for="bookCategory" class="form-label"
                            >Category</label
                        >
                        <select
                            id="bookCategory"
                            class="form-select mb-3"
                            v-model="product.category"
                            
                            >
                            <option
                                v-for="category of getCategories"
                                v-bind:key="category.id"
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <div
                        class="d-flex flex-md-row flex-column justify-content-between mt-5"
                    >
                        <button
                            type="submit"
                            class="btn btn-outline-success rounded-5 mb-md-0 mb-2 p-2 px-5 fs-5"
                        >
                            Submit
                        </button>
                        <router-link
                            class="btn btn-outline-warning rounded-5 p-2 px-5 fs-5"
                            :to="'/book-info/' + getBook.id"
                            >Cancel
                        </router-link>
                    </div>
                </form>
            </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "EditBookPage",
    computed: {
        ...mapGetters(["getCategories", "getBook", "getMedia"]),
    },
    data() {
        return {
            product: null,
            file: "",
        };
    },

    methods: {
        ...mapActions(["fetchBook", "editBook", "pushFile", "deleteFile"]),
        edit() {
            const bookData = {
                name: this.product.name,
                price: this.product.price,
                description: this.product.description,
                text: this.product.text,
                category_id: this.product.category,
            };
            if (this.file) {
                bookData.photo = this.file;
            }
            this.editBook({ id: this.$route.params.bookId, data: bookData })
                .then((response) => {
                    console.log(response);
                })
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
        this.fetchBook(this.$route.params.bookId).then((response) => {
            console.log(response);
            this.product = this.getBook;
        });
        console.log("edit book page ishladi");
        console.log(this.$route.params.bookId);
        console.log(this.$route.path);
        console.log(this.getBook.category["@id"]);
    },
};
</script>

<style scoped></style>
