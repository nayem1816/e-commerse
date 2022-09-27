const trending = document.getElementById('trending');

const trendingData = [
    {
        id: 1,
        img: '/images/productImg/product(1).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 2,
        img: '/images/productImg/product(2).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 3,
        img: '/images/productImg/product(3).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 4,
        img: '/images/productImg/product(7).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 5,
        img: '/images/productImg/product(3).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 6,
        img: '/images/productImg/product(1).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 7,
        img: '/images/productImg/product(7).png',
        title: 'Womens Denim Jacket',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
];

trending.innerHTML = `
    <div className="">
        <h1 class="mx-2 mx-md-5">Trending Now</h1>
        <div class="mx-0 my-4">
            <div class="swiper trendingSwiper">
                <div class="swiper-wrapper mx-md-5">
                ${trendingData
                    .map(
                        (item) => `
                            <div class="swiper-slide">
                                <a href="#">
                                    <div class="my-4 rounded-4 shadow">
                                        <img
                                            src=${item.img}
                                            alt="image"
                                            class="img-fluid trending-product-image"
                                        />
                                        <div class="text p-3">
                                            <h2 class="text-start">
                                                ${item.title}
                                            </h2>
                                            <div
                                                class="brand d-flex align-items-center my-3"
                                            >
                                                <p>Brand Name</p>
                                                <div
                                                    class="rating d-flex ms-4 align-items-center"
                                                >
                                                    <p>4.2</p>
                                                    <img
                                                        class="img-fluid ms-2"
                                                        src="/images/icons/star.png"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                            <div
                                                class="price d-flex my-3 gap-3 align-items-center"
                                            >
                                                <p class="current-price">
                                                    Rs. 1000
                                                </p>
                                                <p class="old-price">
                                                    <del>Rs. 100</del>
                                                </p>
                                                <p class="discount">(30% off)</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            `
                    )
                    .join('')}
                </div>
            </div>
        </div>
    </div>
`;
