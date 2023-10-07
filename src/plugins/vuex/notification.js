import axios from "./axios";

export default {
    actions: {
        fetchNotifications(context, data) {
            if (!data.page) {
                data.page = 1;
            }
            let url = "?page=" + data.page;

            return new Promise((resolve, reject) => {
                axios
                    .get("/notifications" + url)
                    .then((response) => {
                        console.log("notification muvaffaqiyatli olindi");
                        console.log(response.data.data);

                        let notifications = {
                            read: response.data.data.read.data,
                            totalItems: response.data.data.read.total,
                            unread: response.data.data.unread,
                        };
                        context.commit("updateNotifications", notifications);
                        resolve();
                    })
                    .catch(() => {
                        console.log("notification olishda xatolik");
                        reject();
                    });
            });
        },
        readNotification(context, notifyId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/notifications/" + notifyId + "/read")
                    .then((response) => {
                        console.log("notification oqilgan");
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        console.log("notification oqishda xatolik");
                        reject();
                    });
            });
        },

        deleteNotification(context, notifyId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete("/notifications/" + notifyId)
                    .then((response) => {
                        console.log("notification ochirildi");
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        console.log("notification ochirishda xatolik");
                        reject();
                    });
            });
        },
    },

    mutations: {
        updateNotifications(state, notifications) {
            state.notifications = notifications;
            localStorage.setItem(
                "notifications",
                JSON.stringify(notifications.read)
            );
        },
    },
    state: {
        notifications: {
            read: "",
            unread: "",
            totalItems: "",
        },
    },
    getters: {
        getNotifications(state) {
            return state.notifications.read;
        },
        getUnReadNotifications(state) {
            return state.notifications.unread;
        },
        getNotifyTotal(state) {
            return state.notifications.totalItems;
        },
    },
};