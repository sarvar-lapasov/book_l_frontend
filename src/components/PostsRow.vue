<template>
    <LoaderRow v-if="isLoading" />
    <div v-else class="container">
        <div class="col-lg-6">
            <h1 class="section-title mb-3">Latest Post</h1>
        </div>
        <div class="row">
            <div
                v-for="post of getPosts"
                v-bind:key="post.id"
                class="col-12 col-sm-6 col-lg-4 mb-4"
            >
                <div class="card border-0">
                    <ImgRow class="card-img-top" :Item="post" />
                    <div class="card-body px-0">
                        <!-- <p class="text-success fw-medium fs-5">
                            {{ post.category.name }}
                        </p> -->
                        <h5 class="card-title fw-medium m-0">
                            {{ post.title }}
                        </h5>
                        <p class="card-text text-secondary">
                            {{ post.description }}
                        </p>
                        <div class="d-flex justify-content-between">
                            <router-link
                                :to="'/post-info/' + post.id"
                                class="btn btn-outline-warning rounded-5 p-2 px-5"
                                >Read
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <PaginationRow :All="getPostTotal" @pageClick="pageClick" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import post from "@/plugins/vuex/post";
import LoaderRow from "@/components/LoaderRow.vue";
import ImgRow from "@/components/ImgRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
    name: "PostsRow",
    components: {
        ImgRow,
        LoaderRow,
        PaginationRow,
    },
    data() {
        return {
            isLoading: true,
        };
    },

    computed: {
        post() {
            return post;
        },
        ...mapGetters(["getPosts",  "getPostTotal", "getPost"]),
    },
    methods: {
        ...mapActions(["fetchPosts",  "fetchPost"]),
        pageClick(item) {
            this.fetchPosts({
                page: item,
            })
                .then(() => {
                    console.log(this.$route.params);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
    watch: {
        // "$route.params.id"() {
        //     console.log("id o'zgarmoqda");
        //     this.fetchPosts({ categoryId: this.$route.params.id });
        // },
    },
    mounted() {
        
        console.log("booksRow component yuklandi");
        console.log(this.getUser);
        this.fetchPosts({ }).finally(() => {
            this.isLoading = false;
        });
    },
};
</script>

<style scoped>
.card-img-top {
    height: 20vw;
    object-fit: cover;
}
@media (max-width:992px){
    .card-img-top{
        height: 50vh;
    }
}
@media (max-width:576px){
    .card-img-top{
        height: 65vh;
    }
}
</style>
