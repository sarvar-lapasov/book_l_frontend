<template>
    <img
        v-if="Item.photo[0]"
        :src="'https://bookapi.sarvarjon.uz/storage/' + Item.photo[0].url"
        class="bg-secondary-subtle rounded w-100"
        alt="Image"
    />
    <img
        v-else
        src="/img/no_image.png"
        class="bg-secondary-subtle rounded w-100"
        alt="Image"
    />
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
