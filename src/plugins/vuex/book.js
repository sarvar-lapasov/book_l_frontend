import axios from "./axios";

export default {
    actions: {
        fetchBooks(context, data) {
            if (!data.page) {
                data.page = 1;
            }
            let url = "?page=" + data.page;

            let category = "/categories/" + data.categoryId;
            if (!data.categoryId) {
                data.category = null;
                category = "";
            }
            return new Promise((resolve, reject) => {
                axios
                    .get(category + "/products" + url)
                    .then((response) => {
                        console.log("kitoblar muvaffaqiyatli olindi");
                        console.log(response.data);
                        console.log(data);
                        console.log(context);
                        let books = {
                            models: response.data.data,
                            totalItems: response.data.meta.total,
                        };
                        context.commit("updateBooks", books);
                        resolve();
                    })
                    .catch(() => {
                        console.log("kitoblar olishda xatolik");
                        reject();
                    });
            });
        },
        fetchBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/products/" + bookId)
                    .then((response) => {
                        console.log("kitob muvaffaqiyatli olindi");
                        console.log(response.data.data.photo.url);
                        context.commit("updateBook", response.data.data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("kitob olishda xatolik");
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        deleteBook(context, bookId) {
            return new Promise((resolve, reject) => {
                axios
                    .delete("/products/" + bookId)
                    .then((response) => {
                        console.log("kitob ochirildi");
                        console.log(response);
                        resolve();
                    })
                    .catch(() => {
                        console.log("kitoblar ochirishda xatolik");
                        reject();
                    });
            });
        },
        pushBook(context, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("/products", data, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    })
                    .then((response) => {
                        console.log("yangi kitob bazaga qoshildi");
                        console.log(response.data);
                        console.log(response);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("yangi kitob bazaga qoshilmadi");
                        console.log(data);
                        reject();
                    })
                    .finally(() => {
                        console.log("oxirgi bolib finally() ishladi");
                    });
            });
        },
        editBook(context, { id, data }) {
            return new Promise((resolve, reject) => {
                axios
                    .put("/products/" + id, data)
                    .then((response) => {
                        console.log(" kitob o'zgartirildi");
                        console.log(response.data);
                        console.log(response);
                        console.log(data);
                        resolve();
                    })
                    .catch(() => {
                        console.log("kitob malumotlari o'zgarmadi");
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
        updateBooks(state, books) {
            state.books = books;
        },
        updateBook(state, book) {
            state.book = book;
        },
    },
    state: {
        books: {
            models: "",
            totalItems: 0,
        },
        book: {
            name: "",
            description: "",
            text: "",
            category: "",
            price: "",
            photo: "",
        },
    },
    getters: {
        getBooks(state) {
            return state.books.models;
        },
        getBook(state) {
            return state.book;
        },
        getBookTotal(state) {
            return state.books.totalItems;
        },
    },
};