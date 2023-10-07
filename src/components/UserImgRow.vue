<template>
    <img
        v-if="Item.photo[0]"
        :src="'http://localhost:8000/storage/' + Item.photo[0].url"
        class="img-fluid rounded-circle cursor-pointer"
        
    />
    <span
        v-else
        class="img-fluid rounded-circle cursor-pointer d-flex justify-content-center align-items-center capitalize"
        >{{ Item.userName.slice(0, 1) }}</span>
</template>
<script>
export default {
    name: "ImgRow",
    props: {
        Item: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped></style>
