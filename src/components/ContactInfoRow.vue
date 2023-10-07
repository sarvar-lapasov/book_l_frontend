<template>
    <!-- Contact Info Start -->
    <div class="row mt-4 m-0 contact-info">
        <div class="col-lg-4 p-0">
            <div
                class="contact-info-item d-flex align-items-center justify-content-center p-5 bg-warning text-white py-4 py-lg-0"
                style="min-height: 200px"
            >
                <i class="fa fa-3x fa-map-marker-alt text-secondary mr-4"></i>
                <div class="text-lg-start text-md-center">
                    <h5 class="mb-2">Our Office</h5>
                    <p class="m-0">123 Street, New York, USA</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 p-0">
            <div
                class="contact-info-item d-flex align-items-center justify-content-center p-5 bg-success text-white py-4 py-lg-0"
                style="min-height: 200px"
            >
                <i class="fa fa-3x fa-envelope-open text-white mr-4"></i>
                <div class="text-lg-start text-md-center">
                    <h5 class="mb-2 text-dark">Email Us</h5>
                    <p class="m-0 text-white">info@example.com</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4 p-0">
            <div
                class="contact-info-item d-flex align-items-center justify-content-center p-5 bg-warning text-white py-4 py-lg-0"
                style="min-height: 200px"
            >
                <i class="fa fa-3x fa-phone-alt text-secondary mr-4"></i>
                <div class="text-lg-start text-md-center">
                    <h5 class="mb-2">Call Us</h5>
                    <p class="m-0">+012 345 6789</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact Info End -->
</template>

<script>
export default {
    name: "ContactInfoRow",
};
</script>

<style scoped>
.bg-success {
    background-color: #23a036 !important;
}
</style>
