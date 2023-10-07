<template>
        <h3 class="mb-4 section-title">Categories</h3>
        <div class="list-group">
            <router-link
                v-for="category of getCategories"
                v-bind:key="category.id"
                :to="'/categories/' + category.id"
                class="btn btn-outline-warning rounded-4 p-2 px-4 mb-2 d-flex justify-content-between align-items-center"
                :class="
                    parseInt($route.params.id) === category.id ? 'active' : ''
                "
            >
                {{ category.name }}
                <div class="rounded-4 bg-success text-success p-1 px-3">
                    <span class="fw-medium text-light">{{
                        category.products.length
                    }}</span>
                </div>
            </router-link>
        </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "CategoryRow",
    computed: {
        ...mapGetters(["getCategories"]),
    },
    methods: {
        ...mapActions(["fetchCategories"]),
    },
    mounted() {
        this.fetchCategories();
        console.log(this.getCategories);
    },
};
</script>

<style scoped>
.bg-success {
    background-color: #23a036 !important;
}
</style>
