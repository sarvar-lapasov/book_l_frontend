<template>
    <div class="mb-5 mt-5">
        <h3 class="mb-4 section-title">Recent {{ RecentName }}</h3>
        <div
            class="list-group"
            v-for="recent of Recents"
            v-bind:key="recent.id"
        >
            <router-link
                v-if="$route.path.slice(11) != recent.id"
                :to="$route.path.slice(0, 11) + recent.id"
                class="btn d-flex align-items-center border-bottom mb-4 pb-3"
            >
                <div
                    class="d-flex align-items-center me-4"
                    style="width: 60px; height: 80px"
                >
                    <ImgRow :class="$route.name === 'book-id: ' ? 'height-80':'card-img-top'" :Item="recent" />
                </div>
                <div class="d-flex flex-column">
                    <h6 class="text-secondary text-start m-0">
                        {{ recent.name ?? recent.title }}
                    </h6>
                    <p class="text-secondary m-0 text-start">
                        {{ recent.description }}
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ImgRow from "@/components/ImgRow.vue";

export default {
    name: "RecentBook",
    components: {
        ImgRow,
    },
    props: {
        Recents: {
            type: Array,
            required: true,
        },
        RecentName: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters(["getBooks"]),
    },
    methods: {
        ...mapActions(["fetchCategories", "fetchBooks", "fetchBook"]),
    },
    // watch: {
    //     "$route.params.bookId"() {
    //         console.log("id o'zgarmoqda");
    //         this.fetchBook(this.$route.params.bookId);

    //         // this.fetchBooks({categoryId:this.$route.params.id})
    //     },
    // },
    mounted() {
        console.log(this.$route.params.bookId);
        console.log(this.$route.path.slice(0, 11));
        console.log(this.$route.path.slice(11));
    },
};
</script>

<style scoped>
.height-80{
      height: 80px;
}
.card-img-top {
    height: 60px;
    object-fit: cover;
}
</style>
