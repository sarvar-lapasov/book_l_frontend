<template>
    <!-- Page Header Start -->
    <div class="bg-warning py-5 mb-5">
        <div class="container py-5">
            <div
                class="row align-items-center py-4 px-2 justify-content-center"
            >
                <div
                    class="col-md-6 col-sm-12 text-md-left d-md-block d-flex mb-md-0 mb-5 justify-content-center"
                >
                    <h1
                        v-if="$route.params.bookId || $route.params.postId"
                        class="display-4 mb-md-0 fw-bold text-start text-success text-uppercase"
                    >
                        {{ $route.name
                        }}{{ $route.params.bookId ?? $route.params.postId }}
                    </h1>
                    <h1
                        v-else
                        class="display-4 mb-md-0 fw-bold text-start text-success text-uppercase"
                    >
                        {{
                            $route.path.slice(1, 11) === "categories"
                                ? getCategories[
                                      $route.path.replace("/categories/", "") -
                                          1
                                  ].name
                                : $route.name
                        }}
                    </h1>
                </div>
                <div
                    class="col-md-6 col-sm-12 text-end d-md-block d-flex p-0 justify-content-center"
                >
                    <div class="d-inline-flex align-items-center">
                        <router-link
                            class="btn btn-sm btn-outline-light rounded-5 p-2 px-4"
                            to="/"
                        >
                            <h5 class="m-0">Home</h5>
                        </router-link>
                        <i
                            class="fas fa-angle-double-right text-light mx-2"
                        ></i>
                        <a
                            class="btn btn-sm btn-outline-light disabled rounded-5 p-2 px-4"
                            href=""
                        >
                            <h5
                                v-if="
                                    $route.params.bookId || $route.params.postId
                                "
                                class="m-0 text-uppercase"
                            >
                                {{ $route.name }}{{
                                    $route.params.bookId ?? $route.params.postId
                                }}
                            </h5>

                            <h5 v-else class="m-0 text-uppercase">
                                {{
                                    $route.path.slice(1, 11) === "categories"
                                        ? getCategories[
                                              $route.path.replace(
                                                  "/categories/",
                                                  ""
                                              ) - 1
                                          ].name
                                        : $route.name
                                }}
                            </h5>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Page Header End -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "PageHeaderVue",
    computed: {
        ...mapGetters(["getCategories"]),
    },
};
</script>

<style scoped></style>
