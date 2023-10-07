import axios from "./axios";

export default {
    actions: {
        fetchCategories(context) {
            return new Promise((resolve, reject) => {
                axios
                    .get("/categories")
                    .then((response) => {
                        console.log("kategoriyalar muvaffaqiyatli olindi");
                        console.log(response.data);

                        let categories = response.data.data;
                        context.commit("updateCategories", categories);
                        resolve();
                    })
                    .catch(() => {
                        console.log("kategoriyalar olishda xatolik");
                        reject();
                    });
            });
        },
    },
    mutations: {
        updateCategories(state, categories) {
            state.categories = categories;
            localStorage.setItem("categories", JSON.stringify(categories));
        },
    },
    state: {
        categories: JSON.parse(localStorage.getItem("categories")),
    },
    getters: {
        getCategories(state) {
            return state.categories;
        },
    },
};