const deals = document.getElementById('deals');

const dealsData = [
    {
        id: 1,
        img: '/images/productImg/product8.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 2,
        img: '/images/productImg/product9.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 3,
        img: '/images/productImg/product10.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 4,
        img: '/images/productImg/product8.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 5,
        img: '/images/productImg/product9.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 6,
        img: '/images/productImg/product10.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
    {
        id: 7,
        img: '/images/productImg/product8.png',
        title: 'Best of Styles',
        rating: '4.2',
        price: '$ 50.00',
        oldPrice: '$ 60.00',
        discount: '20',
    },
];

deals.innerHTML = `
<div class="">
<h1 class="mx-2 mx-md-5">Deals of the Day</h1>
<div class="mx-0 my-4">
    <div class="swiper dealsSwiper">
        <div class="swiper-wrapper mx-2 mx-md-5">
            ${dealsData
                .map(
                    (item) => `
                        <div class="swiper-slide">
                            <a href="#">
                                <div class="my-4 rounded-4 shadow">
                                    <img
                                        src=${item.img}
                                        alt="image"
                                        class="deals-product-image img-fluid"
                                    />
                                    <div
                                        class="deals-text p-3 text-center"
                                    >
                                        <img
                                            class="levisImg mb-4 mt-1 img-fluid"
                                            src="/images/productImg/levis.png"
                                            alt=""
                                        />
                                        <h2 class="text-center my-2">
                                            ${item.title}
                                        </h2>
                                        <p class="text-center m-2">
                                            Under Rs.799
                                        </p>
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
