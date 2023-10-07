<template>
    <svg width="0" height="0" class="hidden">
        <symbol
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 16"
            id="delete"
        >
            <path
                d="M0.999837 13.8333C0.999837 14.75 1.74984 15.5 2.6665 15.5H9.33317C10.2498 15.5 10.9998 14.75 10.9998 13.8333V3.83333H0.999837V13.8333ZM11.8332 1.33333H8.9165L8.08317 0.5H3.9165L3.08317 1.33333H0.166504V3H11.8332V1.33333Z"
                fill="#F7685B"
            ></path>
        </symbol>
        <symbol
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            id="edit"
        >
            <path
                d="M0.5 12.375V15.5H3.625L12.8417 6.28334L9.71667 3.15834L0.5 12.375ZM15.2583 3.86667C15.5833 3.54167 15.5833 3.01667 15.2583 2.69167L13.3083 0.741675C12.9833 0.416675 12.4583 0.416675 12.1333 0.741675L10.6083 2.26667L13.7333 5.39167L15.2583 3.86667Z"
                fill="#2ED47A"
            ></path>
        </symbol>
    </svg>

    <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content w-100 mx-auto">
                <div class="bg-light rounded p-5 w-100">
                    <form v-if="getUser" @submit.prevent="update">
                        <div class="form-group">
                            <label for="message">Message *</label>
                            <textarea
                                name="body"
                                v-model="comment.body"
                                id="message"
                                cols="30"
                                rows="5"
                                class="form-control mt-2"
                            ></textarea>
                        </div>
                        <input
                            type="hidden"
                            name="post_id"
                            value="{{ getPost.id }}"
                        />
                        <div class="form-group mt-3 mb-0">
                            <button
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                                class="btn btn-outline-warning rounded-5 p-2 px-4"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="mb-4">
        <h3 class="mb-4 section-title">
            {{ Comments.length ? Comments.length : "" }} Comments
        </h3>
        <div class="card rounded-3 p-2">
            <h3 v-if="Comments.length <= 0" class="fs-6 text-center p-4">
                No comment here yet...
            </h3>
            <div v-else class="card__item p-4">
                <div
                    v-for="comment of Comments"
                    v-bind:key="comment.id"
                    class="comment d-flex flex-column position-relative mb-3 border-bottom pb-3"
                >
                    <div class="media w-100">
                        <UserImgRow
                            class="user_image fs-4 pointer"
                            :Item="comment.user"
                        />
                        <div class="content w-100">
                            <div class="media-body px-1">
                                <h6
                                    class="my-2 mb-3 ps-2 d-flex justify-content-between"
                                >
                                    {{ comment.user.userName }}
                                    <small class="text-end">
                                        <em class="mr-auto text-warning">
                                            <span class="me-3 text-success">
                                                {{
                                                    comment.status
                                                        ? "edited"
                                                        : ""
                                                }}
                                            </span>
                                            {{
                                                comment.created_at
                                                    .replace(".000000Z", "")
                                                    .replace("T", " ")
                                            }}
                                        </em>
                                    </small>
                                </h6>
                                <p>
                                    {{ comment.body }}
                                </p>
                                <button
                                    type="button"
                                  
                                    class="btn btn-outline-secondary btn-sm mt-3 p-2 px-4 rounded-5"
                                >
                                    Reply
                                </button>
                                <div
                                    v-if="comment.user.id === getUser.id"
                                    class="position-absolute d-flex btn-parent bottom-0"
                                >
                                    <button
                                        @click="edit(comment.id)"
                                        class="btn-btn editBtn"
                                        type="button"
                                        data-bs-target="#exampleModalToggle"
                                        data-bs-toggle="modal"
                                    >
                                        <svg class="btn-icon">
                                            <use xlink:href="#edit"></use>
                                        </svg>
                                    </button>
                                    <button
                                        @click="deleteCommentById(comment.id)"
                                        class="btn-btn cursor-pointer"
                                        type="submit"
                                    >
                                        <svg class="btn-icon delete-btn">
                                            <use
                                                class="delete-use"
                                                xlink:href="#delete"
                                            ></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div
                    class="comment d-flex justify-content-between mt-3 position-relative"
                >
                    <div class="media ms-5">
                        <img
                            src="/img/user.jpg"
                            alt="Image"
                            class="img-fluid rounded-circle mx-3 mt-1"
                            style="width: 45px"
                        />
                        <div class="content">
                            <div class="media-body px-1">
                                <h6
                                    class="mb-2 mt-3 d-flex justify-content-between"
                                >
                                    {{ "John Doe" }}
                                    <small>
                                        <em class="mr-auto text-warning">
                                            {{ "2023-09-24 13:39:35" }}
                                        </em>
                                    </small>
                                </h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Cum earum natus aliquam
                                    unde alias magnam doloremque voluptate?
                                    Possimus ipsum nam at? Ratione, labore
                                </p>
                                <button
                                    class="btn btn-outline-secondary btn-sm mt-3 p-2 px-4 rounded-5"
                                >
                                    Reply
                                </button>
                                <div
                                    class="position-absolute d-flex btn-parent bottom-0"
                                >
                                    <button
                                        class="btn-btn cursor-pointer"
                                        type="submit"
                                    >
                                        <svg class="btn-icon delete-btn">
                                            <use
                                                class="delete-use"
                                                xlink:href="#delete"
                                            ></use>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserImgRow from "./UserImgRow.vue";

export default {
    name: "CommentRow",
    components: {
        UserImgRow,
    },
    props: {
        Comments: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            comment: {
                body: "",
                id: "",
            },
            parent_id: "",
        };
    },
    computed: {
        ...mapGetters(["getUser"]),
    },
    methods: {
        ...mapActions([
            "deleteComment",
            "fetchPost",
            "pushComment",
            "updateComment",
        ]),
        edit(id) {
            this.Comments.find((element) => {
                if (element.id === id) {
                    return localStorage.setItem(
                        "editComment",
                        JSON.stringify(element)
                    );
                }
            });
            this.comment = JSON.parse(localStorage.getItem("editComment"));
        },

        update() {
            let bodyData = {
                body: this.comment.body,
            };
            this.updateComment({ id: this.comment.id, data: bodyData })
                .then((res) => res)
                .then(() => {
                    this.fetchPost(this.$route.params.postId).finally(() => {
                        this.isLoading = false;
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteCommentById(id) {
            this.deleteComment(id)
                .then((res) => res)
                .then(() => {
                    this.fetchPost(this.$route.params.postId).finally(() => {
                        this.isLoading = false;
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>

<style scoped>
.comment:last-child {
    border: none !important;
    margin-bottom: 0 !important;
}
.user_image {
    width: 40px;
    height: 40px;
    background-color: #ffc600;
    color: white;
}
.media {
    display: flex;
    align-items: flex-start;
    margin-left: auto;
}

.media-body {
    flex: 1;
    position: relative;
}
.svg {
    width: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-parent {
    right: 0;
}
.btn-icon {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    z-index: 0;
}

.btn-btn {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    z-index: 3;
    cursor: pointer;
}
.media:hover .btn-btn {
    display: block;
}
.btn-btn:active {
    transform: scale(1.2);
}
.card__item {
    overflow-y: auto;
    max-height: 32rem;
    border: none;
}
.card__item::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f1f1f1;
    margin-right: 12px;
}
.card__item::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: #f1f1f1;
}
.card__item::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #222;
}
</style>
