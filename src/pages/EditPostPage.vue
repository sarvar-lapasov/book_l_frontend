<template>
    <div class="d-flex justify-content-center align-content-center">
        <form
            v-if="post"
            class="col-lg-4 col-md-6 col-8 mb-4"
            @submit.prevent="edit"
            enctype="multipart/form-data"
        >
            <div class="mb-3">
                <label for="postTitle" class="form-label">Title</label>
                <input
                    type="text"
                    class="form-control"
                    id="postTitle"
                    v-model="post.title"
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
                    v-model="post.description"
                />
            </div>
            <div class="mb-3">
                <label for="postContent" class="form-label">Content</label>
                <textarea
                    class="form-control"
                    id="postContent"
                    v-model="post.content"
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
                    :to="'/post-info/' + getPost.id"
                    >Cancel
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "EditPostPage",
    computed: {
        ...mapGetters(["getCategories", "getPost", "getToken"]),
    },
    data() {
        return {
            post: null,
            file: "",
        };
    },

    methods: {
        ...mapActions(["fetchPost", "editPost"]),
        edit() {
            const formData = new FormData();
            formData.append("file", this.file);
            const postData = {
                title: this.post.title,
                description: this.post.description,
                content: this.post.content,
            };
            if (this.file) {
                postData.photo = this.file;
            }
            this.editPost({ id: this.$route.params.postId, data: postData })
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.$router.push(
                        "/post-info/" + this.$route.params.postId
                    );
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
        this.fetchPost(this.$route.params.postId).then((response) => {
            console.log(response);
            this.post = this.getPost;
        });
        console.log("edit post page ishladi");
        console.log(this.$route.params.postId);
        console.log(this.$route.path);
    },
};
</script>

<style scoped></style>
