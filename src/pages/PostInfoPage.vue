<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-8">
                <LoaderRow v-if="isLoading" />
                <div v-else>
                    <div class="mb-4">
                        <div
                            v-if="
                                getUser
                                    ? getUser.roles.find(
                                          (e) =>
                                              e.name === 'admin' ||
                                              e.name === 'creator'
                                      ) || getPost.user.id === getUser.id
                                    : false
                            "
                            class="d-flex justify-content-end mb-4"
                        >
                            <router-link
                                :to="'/edit-post/' + getPost.id"
                                class="btn btn-warning rounded-5 mx-2 p-2 px-4"
                                >Edit
                            </router-link>

                            <button
                                @click="deletePostById(getPost.id)"
                                class="btn btn-danger rounded-5 p-2 px-4"
                            >
                                Delete
                            </button>
                        </div>
                        <div class="mb-4">
                            <span
                                class="text-light bg-warning p-3 rounded text-uppercase font-weight-medium"
                            >
                                {{
                                    getPost.created_at
                                        .replace(".000000Z", "")
                                        .replace("T", " ")
                                }}
                            </span>
                        </div>
                        <h1 class="section-title">{{ getPost.title }}</h1>
                        <div class="mt-4 mb-4">
                            <ImgRow class="card-img-top" :Item="getPost" />
                        </div>
                        <div>
                            <p>{{ getPost.content }}</p>
                        </div>
                    </div>
                    <CommentRow :Comments="getPost.comments" />
                </div>

                <div class="bg-light rounded p-5">
                    <h3 class="mb-4 section-title">Comment</h3>

                    <form v-if="getUser" @submit.prevent="submit">
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea
                                name="body"
                                v-model="body"
                                id="message"
                                cols="30"
                                rows="5"
                                class="form-control mt-2"
                            ></textarea>
                        </div>
                        <input
                            type="hidden"
                            name="post_id"
                            value="{{ getPost.id }}"
                        />
                        <div class="form-group mt-3 mb-0">
                            <button
                                class="btn btn-outline-warning rounded-5 p-2 px-4"
                            >
                                Send
                            </button>
                        </div>
                    </form>

                    <div v-else>
                        To leave a comment
                        <router-link
                            to="/login"
                            class="ml-3 btn btn-outline-success rounded-5 p-2 px-4 ms-3"
                            >Login</router-link
                        >
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div
                    class="d-flex flex-column align-items-center text-center bg-success rounded mb-5 py-5 px-4"
                >
                    <UserImgRow class="user_image fs-1" :Item="getPost.user" />
                    <h3 class="text-light mt-3 mb-3">
                        {{ getPost.user.userName }}
                    </h3>
                    <p class="text-white m-0">
                        Conset elitr erat vero dolor ipsum et diam, eos dolor
                        lorem ipsum, ipsum ipsum sit no ut est. Guber ea ipsum
                        erat kasd amet est elitr ea sit.
                    </p>
                </div>
                <CategoryRow />
                <RecentsRow :Recents="getPosts" :RecentName="'Post'" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RecentsRow from "@/components/RecentsRow.vue";
import CategoryRow from "@/components/CategoryRow.vue";
import LoaderRow from "@/components/LoaderRow.vue";
import ImgRow from "@/components/ImgRow.vue";
import UserImgRow from "@/components/UserImgRow.vue";
import CommentRow from "@/components/CommentRow.vue";

export default {
    name: "PostInfoPage",
    components: {
        CommentRow,
        UserImgRow,
        ImgRow,
        LoaderRow,
        CategoryRow,
        RecentsRow,
    },
    data() {
        return {
            isLoading: true,
            body: "",
        };
    },
    computed: {
        ...mapGetters(["getPost", "getPosts", "getUser", "getCategories"]),
    },
    methods: {
        ...mapActions([
            "fetchPost",
            "fetchPosts",
            "fetchCategories",
            "deletePost",
            "pushComment",
            "fetchNotifications",
        ]),
        submit() {
            let commentData = {
                post_id: this.getPost.id,
                body: this.body,
            };
            this.pushComment(commentData)
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.fetchPost(this.$route.params.postId).finally(() => {
                        this.body = "";
                        this.isLoading = false;
                    });
                    this.fetchNotifications({});
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log("comment");
        },
        deletePostById(id) {
            this.deletePost(id)
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.$router.push("/posts");
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(id);
        },
    },
    watch: {
        "$route.params.postId"() {
            this.isLoading = true;
            console.log("id o'zgarmoqda");
            this.fetchPost(this.$route.params.postId).finally(() => {
                this.isLoading = false;
            });
        },
    },
    mounted() {
        this.fetchPost(this.$route.params.postId)
            .then((response) => {
                console.log(response);
            })
            .then(() => {})
            .catch((error) => {
                this.$router.push("/error");
                console.log(error);
            })
            .finally(() => {
                this.isLoading = false;
            });
        this.fetchPosts({ page: 1 });
        console.log(this.$route.params.postId);
        console.log(this.getPost);
    },
};
</script>

<style scoped>
.user_image {
    width: 100px;
    height: 100px;
    background-color: #ffc600;
    color: white;
}
.card-img-top {
    height: 600px !important;
    object-fit: cover;
}
.bg-success {
    background-color: #23a036 !important;
}
.media {
    display: flex;
    align-items: flex-start;
}

.media-body {
    flex: 1;
    position: relative;
}
.svg {
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-parent {
    right: 0;
}
.btn-icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    z-index: 0;
}

.btn-btn {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    cursor: pointer;
}
.comment:hover .btn-btn {
    display: block;
}
.btn-btn:active {
    transform: scale(1.2);
}
</style>
