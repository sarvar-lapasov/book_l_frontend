import axios from "axios";

export default {
    actions: {
        fetchUserToken(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/login", data)
                    .then((response) => {
                        console.log("token muvaffaqiyatli olindi");
                        console.log(response.data);
                        console.log(data);
                        console.log(response.data.data.token);
                        console.log(data.email + "  data ketdi");
                        context.commit("updateToken", response.data.data.token);
                        resolve();
                    })
                    .catch(() => {
                        console.log("token olishda xatolik");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        fetchUser(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/user")
                    .then((response) => {
                        console.log("user muvaffaqiyatli olindi");
                        console.log(response);
                        console.log(response.data);
                        context.commit("updateUser", response.data.data);

                        resolve();
                    })
                    .catch(() => {
                        console.log("user olishda xatolik");
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        register(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/register", data)
                    .then((response) => {
                        console.log("register muvaffaqiyatli");
                        console.log(response.data);
                        console.log(data);

                        resolve();
                    })
                    .catch(() => {
                        console.log("register da xatolik");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        logout(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/logout")
                    .then((response) => {
                        console.log("logout muvaffaqiyatli");
                        console.log(response.data);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("logout da xatolik");
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
    },
    mutations: {
        updateToken(state, token) {
            state.token = token;
            localStorage.setItem("token", token);
        },
        updateUser(state, user) {
            state.user = user;
            localStorage.setItem("userr", JSON.stringify(user));
        },
    },
    state: {
        token: localStorage.getItem("token"),
        user: localStorage.getItem("userr")
            ? JSON.parse(localStorage.getItem("userr"))
            : "",
    },
    getters: {
        getToken(state) {
            return state.token;
        },
        getUser(state) {
            return state.user;
        },
    },
};
