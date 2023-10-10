<template>
    <div
        v-if="
            $route.path !== '/login' &&
            $route.path !== '/register' &&
            $route.name !== 'error'
        "
        class="container-fluid p-0"
    >
        <HeaderRow />
        <PageHeaderRow v-if="$route.path !== '/'" />
        <router-view />
        <FooterRow />
    </div>
    <div v-else style="height: 100vh">
        <router-view />
    </div>
</template>

<script>
import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";
import PageHeaderRow from "@/components/PageHeaderRow.vue";

export default {
    name: "App",
    components: {
        PageHeaderRow,
        FooterRow,
        HeaderRow,
    },
    watch: {
        "$route.name"() {
            window.scrollTo(0, 0);
        },
    },
};
</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    scroll-behavior: smooth;
}

article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
    display: block;
}

body {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #181828;
    text-align: left;
    background-color: #fff;
}
.capitalize {
    text-transform: capitalize;
}
.section-title {
    position: relative;
    padding-left: 60px;
    color: black !important;
}

.section-title::before {
    position: absolute;
    content: "";
    top: 16px;
    left: 0;
    width: 45px;
    height: 2px;
    background: #ffc600;
}

.section-title::after {
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    width: 45px;
    height: 2px;
    background: #23a036;
}
h6.text-secondary {
    color: #23a036 !important;
    font-size: 18px !important;
}
.container-fluid {
    padding-left: 40px;
    padding-right: 40px;
}
.container {
    max-width: 1140px;
    padding-left: 40px;
    padding-right: 40px;
}
.text-success,
.active {
    color: #23a036 !important;
}
.bg-success {
    background: #23a036 !important;
}
.bg-warning {
    background-color: #ffc600 !important;
}
.page-link {
    color: #ffc600 !important;
    font-size: 18px;
    padding: 12px 24px;
}
.page-item.active .page-link {
    background-color: #ffc600;
    color: #fff !important;
}

.form-control,
.form-select {
    border: 1px solid #cccccc;
    box-sizing: border-box;
}
.form-control:focus,
.form-select:focus {
    border: 1px solid #ffc600;
    box-shadow: 0 0 10px 1px #ffc600;
    box-sizing: border-box;
}
@media (max-width: 576px) {
    .page-link {
        padding: 6px 12px !important;
        font-size: 14px !important;
    }
}
</style>
