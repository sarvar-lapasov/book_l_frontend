<template>
           <footer class="bg-dark text-light mt-5 p-5">
               <form class="col-12 text-center d-flex flex-column align-items-center" action="#">
                   <h3 class="text-light mb-5">Sign up to receive wonderful books and offers in your inbox
                   </h3>
                   <div class="mb-3 col-lg-4">
                       <label for="exampleFormControlInput1" class="form-label">Email address</label>
                       <input type="email" class="form-control" id="exampleFormControlInput1"
                              placeholder="E-mail address">
                   </div>
                   <button class="btn btn-outline-success" type="submit">Sign me up</button>
               </form>
               <div class="box socials text-light text-center mt-5">
                   <p class="copyright left">© Books  2023 | All rights reserved.
                   </p>
               </div>
           </footer>
</template>

<script>
export default {
    name: "FooterRow"
}
</script>

<style scoped>

</style>