import axios from "axios";
import store from "@/plugins/vuex/store";

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.interceptors.request.use((config) => {
    if (config.url !== "http://localhost:8000/api/login") {
        config.headers.Authorization = "Bearer " + store.getters.getToken;
    }
    return config;
});

axios.defaults.baseURL = "http://localhost:8000/api";

export default axios;