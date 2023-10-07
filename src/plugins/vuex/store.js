import { createStore } from 'vuex';
import user from "@/plugins/vuex/user";
import post from "@/plugins/vuex/post";
import book from "@/plugins/vuex/book";
import media from "@/plugins/vuex/media";
import categories from "@/plugins/vuex/categories";
import notification from "@/plugins/vuex/notification";
import comment from "@/plugins/vuex/comment";

export default createStore({
    modules: {
        book,
        post,
        comment,
        notification,
        categories,
        media,
        user
    }
})