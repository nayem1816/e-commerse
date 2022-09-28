const banner = document.getElementById('banner');

const bannerData = [1, 2, 3, 4, 5, 6, 7];

banner.innerHTML = `
        <div class="swiper bannerSwiper">
            <div class="swiper-wrapper">
                ${bannerData
                    .map(
                        (item) => `
                        <div class="swiper-slide">
                            <div class="row p-0 m-0">
                                <div class="col-md-6 d-none d-md-block p-0 m-0">
                                    <img
                                        class="slider-img img-fluid"
                                        src="/images/slider/imageWoman.png"
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="col-12 col-md-6 imageBg-container p-0 m-0"
                                >
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
                                        <h2 class="text-center">50% - 80% off</h2>
                                        <div class="text-center">
                                            <a href="#" class="btn-style"
                                                >Explore</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `
                    )
                    .join('')}
            </div>
            <div class="swiper-pagination"></div>
        </div>
`;
