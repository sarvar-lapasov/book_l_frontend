<template>
    <div class="container mb-5">
        <div class="row align-items-end mb-4">
            <div class="d-flex justify-between">
                <h1 class="section-title mb-3">Notifications</h1>
            </div>
            <div class="d-flex flex-lg-row flex-column justify-content-between">
                <h4 class="mb-3">All Notifications: {{ getNotifyTotal }}</h4>
                <h4 class="mb-3">
                    UnReadNotifications: {{ getUnReadNotifications }}
                </h4>
                <h4 class="mb-3">
                    ReadNotifications:
                    {{ getNotifyTotal - getUnReadNotifications }}
                </h4>
            </div>
        </div>
        <div v-if="getNotifications.length <= 0" class="card">
            <h3 class="fs-6 text-center p-4 m-4">
                No notification here yet...
            </h3>
        </div>
        <div v-else>
            <div
                v-for="notification of getNotifications"
                v-bind:key="notification.id"
                class="border mb-3 p-4 rounded"
            >
                <div
                    class="d-flex justify-content-between align-items-center mb-3"
                >
                    <span class="text-success fs-5 text-uppercase">{{
                        notification.data.created_at
                            .replace(".000000Z", "")
                            .replace("T", " ")
                    }}</span>
                    <small
                        v-if="notification.read_at === null"
                        class="text-white bg-warning rounded-3 p-3 fs-6 text-uppercase"
                        >new</small
                    >
                </div>
                <div
                    v-if="
                        notification.type === 'App\\Notifications\\PostCreated'
                    "
                >
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        Post Author:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.user.userName }}</em
                        >
                    </h5>
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        Post Title:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.title }}
                        </em>
                    </h5>
                    <h5 class="font-weight-medium text-warning d-flex mb-3">
                        Post-Id:
                        <em class="font-weight-medium text-secondary ps-2">
                            {{ notification.data.id }}</em
                        >
                        <router-link
                            class="ms-3 text-success"
                            :to="'/post-info/' + notification.data.id"
                            >post link
                        </router-link>
                    </h5>
                </div>
                <div
                    v-else-if="
                        notification.type === 'App\\Notifications\\UserCreated'
                    "
                >
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        User Name:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.userName }}</em
                        >
                    </h5>
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        User Email:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.email }}</em
                        >
                    </h5>
                </div>
                <div
                    v-else-if="
                        notification.type ===
                        'App\\Notifications\\CommentCreated'
                    "
                >
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        Comment Author:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.user.userName }}</em
                        >
                    </h5>
                    <h5
                        class="font-weight-medium text-warning d-flex flex-column mb-3"
                    >
                        Comment Body:
                        <em class="font-weight-medium text-secondary ps-5">
                            {{ notification.data.body }}</em
                        >
                    </h5>
                    <h5 class="font-weight-medium text-warning d-flex mb-3">
                        Post-Id:
                        <em class="font-weight-medium text-secondary ps-2">
                            {{ notification.data.post_id }}</em
                        >
                        <router-link
                            aria-disabled="disabled"
                            class="ms-3 text-success"
                            :to="'/post-info/' + notification.data.post_id"
                            >post link
                        </router-link>
                    </h5>
                </div>
                <div class="d-flex justify-content-between mt-4">
                    <button
                        v-if="notification.read_at === null"
                        @click="readNotifyById(notification.id)"
                        class="btn btn-outline-warning rounded-5 p-2 px-4 hidden cursor-pointer"
                    >
                        UnRead
                    </button>
                    <button
                        @click="deleteNotifyById(notification.id)"
                        class="btn-btn w-100 text-end cursor-pointer"
                        type="submit"
                    >
                        <svg class="btn-icon delete-btn">
                            <use class="delete-use" xlink:href="#delete"></use>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <PaginationRow :All="getNotifyTotal" @pageClick="pageClick" />
    <svg width="0" height="0" class="hidden">
        <symbol
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 16"
            id="delete"
        >
            <path
                d="M0.999837 13.8333C0.999837 14.75 1.74984 15.5 2.6665 15.5H9.33317C10.2498 15.5 10.9998 14.75 10.9998 13.8333V3.83333H0.999837V13.8333ZM11.8332 1.33333H8.9165L8.08317 0.5H3.9165L3.08317 1.33333H0.166504V3H11.8332V1.33333Z"
                fill="#F7685B"
            ></path>
        </symbol>
    </svg>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PaginationRow from "../components/PaginationRow.vue";

export default {
    name: "NotificationPage",
    components: {
        PaginationRow,
    },
    data() {
        return {};
    },

    computed: {
        ...mapGetters([
            "getNotifications",
            "getUnReadNotifications",
            "getNotifyTotal",
            "getBook",
        ]),
    },
    methods: {
        ...mapActions([
            "fetchNotifications",
            "readNotification",
            "deleteNotification",
        ]),
        pageClick(item) {
            this.fetchNotifications({
                page: item,
            })
                .then(() => {
                    console.log(this.$route.params);
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        deleteNotifyById(id) {
            this.deleteNotification(id)
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.fetchNotifications({page:this.$route.params});
                    this.$router.push("/notification");
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(id);
        },
        readNotifyById(id) {
            this.readNotification(id)
                .then((response) => {
                    console.log(response);
                })
                .then(() => {
                    this.fetchNotifications({});
                    this.$router.push("/notification");
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log(id);
        },
    },
    watch: {},
    mounted() {
        this.fetchNotifications({});
        console.log("notify component yuklandi");
        console.log(this.getNotifications);
    },
};
</script>

<style scoped>
.svg {
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-parent {
    right: 0;
}
.btn-icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    z-index: 0;
}

.btn-btn {
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    cursor: pointer;
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
