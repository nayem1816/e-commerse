const customerSay = document.getElementById('customerSay');

const customerSayData = [1, 2, 3, 4, 5, 6];

customerSay.innerHTML = `
    <div class="">
        <h1 class="mx-2 mx-md-5 title">What Our Customer Says</h1>
        <div class="my-4 customer-say-slide-part mySwiper">
            <div class="swiper customerSaySwiper">
                <div class="swiper-wrapper">
                ${customerSayData
                    .map(
                        (item) => `
                            <div class="swiper-slide border rounded-4">
                            <div
                                class="text-center customer-card py-5 px-4"
                            >
                                <img
                                    class="img-fluid my-3"
                                    src="/images/icons/user2.png"
                                    alt=""
                                />
                                <p
                                    class="customer-star my-3 d-flex align-items-center justify-content-center"
                                >
                                    <img
                                        src="/images/icons/star.png"
                                        alt=""
                                    />
                                    <img
                                        src="/images/icons/star.png"
                                        alt=""
                                    />
                                    <img
                                        src="/images/icons/star.png"
                                        alt=""
                                    />
                                    <img
                                        src="/images/icons/star.png"
                                        alt=""
                                    />
                                    <img
                                        src="/images/icons/star1.png"
                                        alt=""
                                    />
                                    <span class="ms-3">4.4</span>
                                </p>
                                <p class="customer-text my-3">
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Dui vel
                                    morbi cursus sed sodales molestie
                                    proin dictum gravida. Porttitor
                                    maecenas tincidunt ipsum semper
                                    malesuada. In sapien feugiat laoreet
                                    convallis eu sed. Sapien et montes,
                                    duis tempor euismod augue cras eu
                                    eget. Risus suspendisse mauris
                                    ullamcorper
                                </p>
                            </div>
                        </div>
                            `
                    )
                    .join('')}
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </div>
    </div>
`;
