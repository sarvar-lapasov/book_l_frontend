<template>
    <div class="container mt-5">
        <LoaderRow v-if="isLoading" />
        <div v-else class="row">
            <div
                v-for="book of getBooks"
                v-bind:key="book.id"
                class="col-12 col-sm-6 col-lg-4 mb-4"
            >
                <div class="card border-0">
                    <ImgRow class="rounded-4 card-img-top" :Item="book" />

                    <div class="card-body px-0">
                      <div class="d-flex justify-content-between align-items-center mb-3">
                          <p class="text-success fw-medium fs-5 m-0">
                            {{ book.category.name }}
                        </p>
                          <p class="text-light bg-success rounded p-1 px-3 fw-medium fs-5 m-0">
                            ${{ book.price }}
                        </p>
                      </div>
                        <h5 class="card-title fw-medium m-0">
                            {{ book.name }}
                        </h5>
                        <p class="card-text text-secondary">
                            {{ book.description }}
                        </p>

                        <div class="d-flex justify-content-between">
                            <router-link
                                :to="'/book-info/' + book.id"
                                class="btn btn-outline-warning rounded-5 p-2 px-5"
                                >Read
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <PaginationRow :All="getBookTotal" @pageClick="pageClick" />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import book from "@/plugins/vuex/book";
import LoaderRow from "@/components/LoaderRow.vue";
import ImgRow from "@/components/ImgRow.vue";
import PaginationRow from "./PaginationRow.vue";

export default {
    name: "BooksRow",
    components: {
        LoaderRow,
        PaginationRow,
        ImgRow,
    },
    data() {
        return {
            isLoading: true,
        };
    },

    computed: {
        book() {
            return book;
        },
        ...mapGetters(["getBooks", "getBookTotal", "getBook"]),
    },
    methods: {
        ...mapActions(["fetchBooks", "fetchBook", "deleteBook"]),
        pageClick(pageNum) {
            // this.isLoading = true;
            this.fetchBooks({
                categoryId: this.$route.params.id ?? null,
                page: pageNum,
            })
                .then(() => {
                    console.log({ categoryId: this.$route.params.id });
                    console.log(this.$route.params);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
    },
    watch: {},
    mounted() {
        console.log("booksRow component yuklandi");
        this.fetchBooks({categoryId: this.$route.params.id }).finally(() => {
            this.isLoading = false;
        });
    },
};
</script>

<style scoped>
.card-img-top {
    height: 30vw;
    /*object-fit:cover;*/
}
@media (max-width: 992px) {
    .card-img-top {
        height: 50vh;
    }
}
@media (max-width: 576px) {
    .card-img-top {
        height: 65vh;
    }
}
</style>
