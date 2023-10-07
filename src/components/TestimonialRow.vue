<template>
    <div class="col-lg-7">
        <div class="py-5">
            <h6 class="text-secondary font-weight-semi-bold text-uppercase mb-3">Testimonial</h6>
            <h1 class="section-title mb-5">What Our Clients Say</h1>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            class="bg-warning  active" aria-current="true"
                            aria-label="Slide 1"></button>
                    <button class="bg-warning" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button class="bg-warning" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner pb-5">
                    <div class="carousel-item active">
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center mb-3">
                                <img class="img-fluid" src="/img/team-1.jpg"
                                     style=" border-radius:50%;width: 70px; height:70px" alt="">
                                <div class="ms-3">
                                    <h5 class="text-black">Client Name</h5>
                                    <i class="text-black opacity-75"> Profession</i>
                                </div>
                            </div>
                            <p class="text-secondary">Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy
                                amet clita sea. Sed eos sed
                                dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo
                                vero
                                ut. Dolor ipsum kasd ipsum dolore.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center mb-3">
                                <img class="img-fluid" src="/img/team-2.jpg"
                                     style=" border-radius:50%;width: 70px; height:70px" alt="">
                                <div class="ms-3">
                                    <h5 class="text-black">Client Name</h5>
                                    <i class="text-black opacity-75"> Profession</i>
                                </div>
                            </div>
                            <p class="text-secondary">Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy
                                amet clita sea. Sed eos sed
                                dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo
                                vero
                                ut. Dolor ipsum kasd ipsum dolore.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="d-flex flex-column">
                            <div class="d-flex align-items-center mb-3">
                                <img class="img-fluid" src="/img/team-3.jpg"
                                     style=" border-radius:50%;width: 70px; height:70px" alt="">
                                <div class="ms-3">
                                    <h5 class="text-black">Client Name</h5>
                                    <i class="text-black opacity-75"> Profession</i>
                                </div>
                            </div>
                            <p class="text-secondary">Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy
                                amet clita sea. Sed eos sed
                                dolores vero no. Ipsum elitr elitr stet dolor lorem erat. Diam no amet sea justo
                                vero
                                ut. Dolor ipsum kasd ipsum dolore.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "TestimonialRow"
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