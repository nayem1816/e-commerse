const footer = document.getElementById('footer');

const womenData = [
    {
        id: 1,
        title: 'All Women',
    },
    {
        id: 2,
        title: 'Skirts',
    },
    {
        id: 3,
        title: 'T- Shirts',
    },
    {
        id: 4,
        title: 'Tops',
    },
    {
        id: 5,
        title: 'Jackets',
    },
];
const manData = [
    {
        id: 1,
        title: 'All men',
    },
    {
        id: 2,
        title: 'Shirts',
    },
    {
        id: 3,
        title: 'T- Shirts',
    },
    {
        id: 4,
        title: 'Shorts',
    },
    {
        id: 5,
        title: 'Jackets',
    },
];
const kidsData = [
    {
        id: 1,
        title: 'All kids',
    },
    {
        id: 2,
        title: 'Shirts',
    },
    {
        id: 3,
        title: 'T- Shirts',
    },
    {
        id: 4,
        title: 'Shorts',
    },
    {
        id: 5,
        title: 'Jackets',
    },
];
const shopData = [
    {
        id: 1,
        title: 'Your cart',
    },
    {
        id: 2,
        title: 'Your orders',
    },
    {
        id: 3,
        title: 'Compared items',
    },
    {
        id: 4,
        title: 'Wishlist',
    },
    {
        id: 5,
        title: 'Shipping Details',
    },
];
const moreData = [
    {
        id: 1,
        title: 'Blogs',
    },
    {
        id: 2,
        title: 'Gift center',
    },
    {
        id: 3,
        title: 'Buying guides',
    },
    {
        id: 4,
        title: 'New arrivals',
    },
    {
        id: 5,
        title: 'Clearance',
    },
];

footer.innerHTML = `
    <div class="py-3 ">
        <div class="footer-logo d-flex align-items-center gap-4 mx-lg-5 justify-content-center justify-content-lg-start">
            <img src="images/logo/footerLogo.png" alt="logo" />
            <h2 class="mt-3">Globex</h2>
        </div>
        <div class="my-5 mx-0 mx-lg-5">
            <div
                class="row footer-category p-0 mx-2 mx-lg-5"
                style="row-gap: 20px"
            >
                <div class="col-lg-10">
                    <div class="row gap-2" style="row-gap: 20px">
                        <div class="col-lg-2">
                            <div class="text-center text-lg-start">
                                <h3>Womem</h3>
                                <ul class="list-unstyled">
                                ${womenData
                                    .map(
                                        (item) => `
                                                <li class="my-2">
                                                    <a href="#" class="text-white">
                                                        ${item.title}
                                                    </a>
                                                </li>
                                            `
                                    )
                                    .join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="text-center text-lg-start">
                                <h3>Men</h3>
                                <ul class="list-unstyled">
                                ${manData
                                    .map(
                                        (item) => `
                                                <li class="my-2">
                                                    <a href="#" class="text-white">
                                                        ${item.title}
                                                    </a>
                                                </li>
                                            `
                                    )
                                    .join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="text-center text-lg-start">
                                <h3>Kids</h3>
                                <ul class="list-unstyled">
                                ${kidsData
                                    .map(
                                        (item) => `
                                                <li class="my-2">
                                                    <a href="#" class="text-white">
                                                        ${item.title}
                                                    </a>
                                                </li>
                                            `
                                    )
                                    .join('')}
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="text-center text-lg-start">
                                <h3>Shopping</h3>
                                <ul class="list-unstyled">
                                ${shopData
                                    .map(
                                        (item) => `
                                                <li class="my-2">
                                                    <a href="#" class="text-white">
                                                        ${item.title}
                                                    </a>
                                                </li>
                                            `
                                    )
                                    .join('')}
                                </ul>
                            </div>
                        </div>
                        <div
                            class="col-lg-2 d-flex justify-content-center justify-content-lg-end"
                        >
                            <div class="text-center text-lg-start">
                                <h3>More links</h3>
                                <ul class="list-unstyled">
                                ${moreData
                                    .map(
                                        (item) => `
                                                <li class="my-2">
                                                    <a href="#" class="text-white">
                                                        ${item.title}
                                                    </a>
                                                </li>
                                            `
                                    )
                                    .join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 in-touch-footer">
                    <div class="text-center text-lg-start">
                        <h3>Stay In Touch</h3>
                        <p class="text-justify">
                            Stay in touch to get special offers, free
                            giveaways and once in a lifetime deals
                        </p>
                        <div class="mb-3">
                            <div
                                class="d-flex gap-3 py-1 align-items-center mt-4 px-3 border"
                            >
                                <span class="bg-transparent text-white">
                                    <img
                                        src="images/icons/mail.png"
                                        alt="mail"
                                    />
                                </span>
                                <input
                                    type="text"
                                    class="bg-transparent text-white border-0 footer-input w-100"
                                    placeholder="Enter your email"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div class="footer-bottom">
            <div class="row p-0 m-0" style="row-gap: 20px">
                <div class="col-md-4 text-center text-lg-end">
                    <a class="text-white" href="#">
                        <p>Terms & Conditions</p>
                    </a>
                </div>
                <div class="col-md-4 text-center">
                    <a class="text-white" href="#">
                        <p>Privacy Policy</p>
                    </a>
                </div>
                <div class="col-md-4">
                    <div
                        class="social-icons d-flex gap-3 justify-content-center justify-content-lg-start"
                    >
                        <a href="#">
                            <img
                                src="images/social/facebook.png"
                                alt="facebook"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="images/social/instagram.png"
                                alt="instagram"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="images/social/whatsapp.png"
                                alt="whatsapp"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="images/social/twitter.png"
                                alt="twitter"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
