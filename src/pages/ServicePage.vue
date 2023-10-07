<template>
    <!-- Services Start -->
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Services</h6>
                    <h1 class="mb-4 section-title">Awesome Book Services For You</h1>
                    <p>Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et
                        dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
                    <a href="" class="btn btn-outline-success rounded-5 mt-3 py-2 px-4">More Services</a>
                </div>
                <div class="col-lg-6 pt-5 pt-lg-0">

                </div>
            </div>
        </div>
    <!-- Services End -->

<ContactInfoRow/>

        <div class="container">
            <div class="row py-5">
<TestimonialRow/>
                <div class="col-lg-5" style="min-height: 400px;">
                    <div class="position-relative h-100 rounded ">
                        <img class="position-absolute w-100 h-100 rounded-4 object-fit-cover" src="/img/day_four.jpg"
                              >
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import ContactInfoRow from "@/components/ContactInfoRow.vue";
import TestimonialRow from "@/components/TestimonialRow.vue";

export default {
    name: "ServicePage",
    components: {TestimonialRow, ContactInfoRow}
}
</script>

<style scoped>
.section-title{
    font-size: 20px;
}
.section-title:before{
    top: 8px;
}.section-title:after{
    top: 12px;
}
</style>