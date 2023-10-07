<template>
    <BooksRow />
</template>

<script>
import BooksRow from "@/components/BooksRow.vue";
import { mapActions } from "vuex";

export default {
    name: "CategoryBookPage",
    components: {
        BooksRow,
    },
    computed: {},
    methods: {
        ...mapActions(["fetchBooks"]),
    },
    mounted() {
        this.fetchBooks({categoryId: this.$route.params.id }).finally(() => {
            this.isLoading = false;
        });
    },
};
</script>

<style scoped>
.page-main {
    height: 100vh;
}
</style>
