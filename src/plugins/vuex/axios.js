import axios from "axios";
import store from "@/plugins/vuex/store";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaultswithCredentials = true;

axios.interceptors.request.use((config) => {
    if (config.url !== "https://master-books.000webhostapp.com/api/login") {
        config.headers.Authorization = "Bearer " + store.getters.getToken;
    }
    return config;
});

axios.defaults.baseURL = "https://master-books.000webhostapp.com/api";

export default axios;
