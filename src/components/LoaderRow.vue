<template>
    <div class="d-flex justify-content-center align-items-center loader">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoaderRow",
};
</script>
<style scoped>
.loader {
    height: 500px;
}
</style>
