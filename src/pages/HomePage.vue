<template>
    <BooksRow />
    <ContactInfoRow />
    <div class="container">
        <div class="row">
            <TestimonialRow />
            <div class="col-lg-5 py-5">
                <CategoryRow />
            </div>
        </div>
    </div>
</template>

<script>
import ContactInfoRow from "@/components/ContactInfoRow.vue";
import BooksRow from "@/components/BooksRow.vue";
import { mapActions, mapGetters } from "vuex";
import TestimonialRow from "@/components/TestimonialRow.vue";
import CategoryRow from "@/components/CategoryRow.vue";

export default {
    name: "HomePage",
    components: {
        CategoryRow,
        TestimonialRow,
        BooksRow,
        ContactInfoRow,
    },
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["getBooks"]),
    },
    methods: {
        ...mapActions(["fetchBooks"]),
    },

    mounted() {
        console.log(this.getBooks);
    },
};
</script>

<style scoped>
.page-main {
    height: 100vh;
}
</style>
