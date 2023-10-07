import axios from "./axios";

export default {
    actions: {
        pushComment(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/comments", data)
                    .then((response) => {
                        console.log("comment yuborish muvaffaqiyatli");
                        console.log(response.data);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("comment yuborishda xato");
                        console.log(data);
                        reject();
                    });
            });
        },
        updateComment(context, { id, data }) {
            return new Promise((resolve, reject) => {
                axios
                    .put("/comments/" + id, data)
                    .then((response) => {
                        console.log("comment ozgartirish muvaffaqiyatli");
                        console.log(response.data);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("comment ozgartirishda xato");
                        console.log(data);
                        reject();
                    });
            });
        },
        deleteComment(context, id) {
            return new Promise((resolve, reject) => {
                axios
                    .delete("/comments/" + id)
                    .then((response) => {
                        console.log("comment o'chirish muvaffaqiyatli");
                        console.log(response.data);
                        console.log(id);
                        resolve();
                    })
                    .catch(() => {
                        console.log("comment o'chirishda xato");
                        reject();
                    });
            });
        },
    },
    mutations: {},
    state: {},
    getters: {},
};
