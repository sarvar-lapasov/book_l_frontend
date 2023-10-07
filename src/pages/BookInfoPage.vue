<template>
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-8">
                <LoaderRow v-if="isLoading" />
                <div v-else class="mb-5">
                    <div
                        v-if="
                            getUser
                                ? getUser.roles.find(
                                      (e) =>
                                          e.name === 'admin' ||
                                          e.name === 'creator'
                                  )
                                : false
                        "
                        class="d-flex justify-content-end mb-4"
                    >
                        <router-link
                            :to="'/edit-book/' + getBook.id"
                            class="btn btn-outline-warning rounded-5 mx-2 p-2 px-4"
                            >Edit
                        </router-link>
                        <button
                            @click="deleteBookById(getBook.id)"
                            class="btn btn-outline-danger rounded-5 p-2 px-4"
                        >
                            Delete
                        </button>
                    </div>
                    <div class="mb-4">
                        <span
                            class="text-light bg-warning p-3 rounded text-uppercase font-weight-medium"
                            >{{ getBook.category.name }}</span
                        >
                    </div>
                    <h1 class="section-title mb-4">{{ getBook.name }}</h1>
                    <div class="mb-4 mt-4">
                        <ImgRow class="card-img-top" :Item="getBook" />
                    </div>
                    <div>
                        <p>{{ getBook.text }}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div
                    class="d-flex flex-column text-center bg-success rounded mb-5 py-5 px-4"
                >
                    <img
                        src="/img/user.jpg"
                        class="img-fluid rounded-circle cursor-pointer mx-auto mb-3 d-flex align-items-center justify-content-center fs-2"
                        style="
                            background-color: #ffc600;
                            color: white;
                            width: 100px;
                            height: 100px;
                        "
                    />
                    <h3 class="text-light mb-3">John Doe</h3>
                    <p class="text-white m-0">
                        Conset elitr erat vero dolor ipsum et diam, eos dolor
                        lorem ipsum, ipsum ipsum sit no ut est. Guber ea ipsum
                        erat kasd amet est elitr ea sit.
                    </p>
                </div>
                <CategoryRow />
                <RecentsRow :Recents="getBooks" :RecentName="'Book'" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import RecentsRow from "@/components/RecentsRow.vue";
import CategoryRow from "@/components/CategoryRow.vue";
import ImgRow from "@/components/ImgRow.vue";
import LoaderRow from "@/components/LoaderRow.vue";

export default {
    name: "BookInfoPage",
    components: {
        LoaderRow,
        ImgRow,
        CategoryRow,
        RecentsRow,
    },
    data() {
        return {
            isLoading: true,
        };
    },
    computed: {
        ...mapGetters(["getBook", "getBooks", "getUser", "getCategories"]),
    },
    methods: {
        ...mapActions([
            "fetchBook",
            "fetchBooks",
            "fetchCategories",
            "deleteBook",
        ]),
        deleteBookById(id) {
            this.deleteBook(id)
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.$router.push("/");
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(id);
        },
    },
    watch: {
        "$route.params.bookId"() {
            console.log("id o'zgarmoqda");
            this.isLoading = true;
            this.fetchBook(this.$route.params.bookId).finally(() => {
                this.isLoading = false;
            });
        },
    },
    mounted() {
        this.fetchBook(this.$route.params.bookId).finally(() => {
            this.isLoading = false;
        });
        this.fetchBooks({ categoryId: this.$route.params.id });

        console.log(this.getBook);
        console.log(this.$route.params.bookId);
    },
};
</script>

<style scoped>
.card-img-top {
    height: 800px !important;
}
.bg-success {
    background-color: #23a036 !important;
}
</style>
