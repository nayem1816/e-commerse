const banner = document.getElementById('banner');

banner.innerHTML = `
    <div class="swiper mySwiper slider-part d-block align-items-baseline">
        <div class="swiper-wrapper slider-image-part">
            <div class="swiper-slide">
                <div class="row">
                    <div class="col-md-6 p-0 m-0 d-none d-md-block">
                        <img
                            class="img-fluid slider-img"
                            src="/images/slider/imageWoman.png"
                            alt=""
                        />
                    </div>
                    <div class="col-12 col-md-6 p-0 m-0 imageBg-container">
                        <img
                            class="img-fluid w-100 slider-img"
                            src="/images/slider/imageBg.png"
                            alt=""
                        />
                        <div class="centered">
                            <img 
                                src="/images/slider/imageText.png"
                                alt=""
                                class="img-fluid flex-center"
                            />
                            <h2 class="text-center w-100">
                               Big Fashion Festival
                            </h2>
                            <h2 class="text-center">
                                50% - 80% off
                            </h2>
                            <div class="text-center">
                                <a href="#" class="btn-style">Explore</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination slider-pagination"></div>
    </div>
`;
