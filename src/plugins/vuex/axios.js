import axios from "axios";
import store from "@/plugins/vuex/store";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.withCredentials = false;

axios.interceptors.request.use((config) => {
    if (config.url !== "https://book.menuly.uz/api/login") {
        config.headers.Authorization = "Bearer " + store.getters.getToken;
    }
    return config;
});

axios.defaults.baseURL = "https://book.menuly.uz/api";

export default axios;
