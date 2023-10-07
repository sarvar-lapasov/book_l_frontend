<template>
    <div class="d-flex justify-content-center align-content-center">
        <form
            class="col-lg-4 col-md-6 col-8 mb-4"
            @submit.prevent="submit"
            enctype="multipart/form-data"
        >
            <div class="mb-3">
                <label for="postTitle" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="postTitle"
                    v-model="addpost.title"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="postDescription" class="form-label"
                    >Description</label
                >
                <input
                    type="text"
                    class="form-control"
                    id="postDescription"
                    v-model="addpost.description"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="postContent" class="form-label">Content</label>
                <textarea
                    class="form-control"
                    id="postContent"
                    minlength="50"
                    v-model="addpost.content"
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
    name: "AddPostPage",
    computed: {
        ...mapGetters(["getCategories", "getUser"]),
    },
    data() {
        return {
            addpost: {
                title: "",
                description: "",
                content: "",
            },
            file: "",
        };
    },
    methods: {
        ...mapActions(["pushPost", "fetchNotifications", "fetchCategories"]),
        submit() {
            const formData = new FormData();
            formData.append("file", this.file);
            const postData = {
                title: this.addpost.title,
                description: this.addpost.description,
                content: this.addpost.content,
            };
            if (this.file) {
                postData.photo = this.file;
            }
            this.pushPost(postData)
                .then(() => {
                    this.fetchNotifications({});
                    this.$router.push("/posts");
                })
                .catch((error) => {
                    console.log(error);
                    throw new Error(error);
                });
        },
        handleFileUpload() {
            this.file = this.$refs.file.files[0];
        },
    },

    mounted() {
        this.fetchCategories();
        console.log("post page ishladi");
    },
};
</script>

<style scoped></style>
