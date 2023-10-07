import axios from "./axios";

export default {
    actions: {
        fetchPosts(context, data) {
            let url = "?page=" + data.page;
            if (!data.page) {
                data.page = 1;
            }

            return new Promise((resolve, reject) => {
                axios
                    .get("/posts" + url)
                    .then((response) => {
                        console.log("postlar muvaffaqiyatli olindi");
                        console.log(response.data.data);
                        console.log(response.data);
                        console.log(data);
                        let posts = {
                            models: response.data.data,
                            totalItems: response.data.meta.total,
                        };
                        context.commit("updatePosts", posts);
                        resolve();
                    })
                    .catch(() => {
                        console.log("postlar olishda xatolik");
                        reject();
                    });
            });
        },
        fetchPost(context, postId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/posts/" + postId)
                    .then((response) => {
                        console.log("post muvaffaqiyatli olindi");
                        console.log(response.data.data.photo.url);
                        context.commit("updatePost", response.data.data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("post olishda xatolik");
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        deletePost(context, postId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete("/posts/" + postId)
                    .then((response) => {
                        console.log("post ochirildi");
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        console.log("postlar ochirishda xatolik");
                        reject();
                    });
            });
        },
        pushPost(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/posts", data, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        console.log("yangi post bazaga qoshildi");
                        console.log(response.data);
                        console.log(response);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("yangi post bazaga qoshilmadi");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        editPost(context, { id, data }) {
            return new Promise((resolve, reject) => {
                axios
                    .put("/posts/" + id, data)
                    .then((response) => {
                        console.log(" post o'zgartirildi");
                        console.log(response.data);
                        console.log(response);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("post malumotlari o'zgarmadi");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        updatePost(state, post) {
            state.post = post;
        },
    },
    state: {
        posts: {
            models: [],
            totalItems: 0,
        },
        post: {
            title: "",
            description: "",
            content: "",
            comments: "",
            photo: "",
            user: {
                userName: "",
                photo: "",
            },
            created_at: "",
        },
    },
    getters: {
        getPosts(state) {
            return state.posts.models;
        },
        getPost(state) {
            return state.post;
        },
        getPostTotal(state) {
            return state.posts.totalItems;
        },
    },
};
