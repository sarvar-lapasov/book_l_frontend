<template>
    <div
        class="d-flex justify-content-center align-items-center"
        style="height: 100%"
    >
        <div class="container" id="container">
            <div class="form-container sign-in-container">
                <form @submit.prevent="auth">
                    <h1>Sign in</h1>
                    <div class="social-container">
                        <a href="#" class="social"
                            ><i class="fab fa-facebook-f"></i
                        ></a>
                        <a href="#" class="social"
                            ><i class="fab fa-google-plus-g"></i
                        ></a>
                        <a href="#" class="social"
                            ><i class="fab fa-linkedin-in"></i
                        ></a>
                    </div>
                    <span>or use your account</span>
                    <input
                        type="email"
                        placeholder="Email"
                        v-model="form.email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        v-model="form.password"
                    />
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <sign-overlay-row />
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import SignOverlayRow from "@/components/signOverlayRow.vue";

export default {
    name: "LoginPage",
    components: { SignOverlayRow },
    data() {
        return {
            form: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        ...mapActions(["fetchUserToken", "fetchUser", "fetchBooks"]),
        auth() {
            this.fetchUserToken(this.form).then(() => {
                console.log("login muvaffaqiyatli boldi");
                this.fetchUser();
                this.$router.push("/");
                this.fetchBooks({});
            });
            console.log("bu login sahifasi auth funksiyasi");
        },
        signIn() {},
        signUp() {},
    },
};
</script>

<style scoped>
h1 {
    font-weight: bold;
    margin: 0;
}

h2 {
    text-align: center;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:active {
    transform: scale(0.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background-color: transparent;
    border-color: #ffffff;
    border-radius: 20px;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
}

input {
    background-color: #eee !important;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

.container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 768px;
    max-width: 100%;
    min-height: 560px;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.container.right-panel-active .sign-in-container {
    transform: translateX(100%);
}

.sign-up-container {
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {
    0%,
    49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #dddddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}
</style>
