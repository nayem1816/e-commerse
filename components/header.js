const header = document.getElementById('header');

header.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-style">
        <div class="container-fluid d-flex align-items-center">
            <a class="navbar-brand mx-3" href="/">
                <img
                    class="logo-image"
                    src="/images/logo/logo.png"
                    alt="logo"
                />
            </a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="row w-100 d-flex gap-3 gap-md-0">
                    <div
                        class="col-md-6 d-flex justify-content-center order-2 order-md-1"
                    >
                        <ul
                            class="navbar-nav d-flex align-items-center gap-3"
                        >
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="/man"
                                >
                                    Man
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="/woman"
                                >
                                    Woman
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="/kids"
                                >
                                    Kids
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="/shop"
                                >
                                    Shop
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link nav-text"
                                    href="/contact"
                                >
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div
                        class="col-md-3 d-flex align-items-center justify-content-center order-sm-1 order-md-2"
                    >
                        <div class="search d-flex align-items-center">
                            <input
                                class="form-control me-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="">
                                <img
                                    src="/images/icons/search.png"
                                    alt="search"
                                />
                            </button>
                        </div>
                    </div>

                    <div
                        class="col-md-3 d-flex justify-content-center justify-content-md-end order-3"
                    >
                        <ul
                            class="navbar-nav d-flex align-items-center gap-2"
                        >
                            <li class="nav-item icon">
                                <a class="nav-link" href="#">
                                    <img
                                        src="/images/icons/love.png"
                                        alt="favorite"
                                    />
                                </a>
                            </li>
                            <li class="nav-item icon">
                                <a class="nav-link" href="#">
                                    <img
                                        src="/images/icons/cart.png"
                                        alt="cart"
                                    />
                                </a>
                            </li>
                            <li class="nav-item icon">
                                <a
                                    class="nav-link d-flex align-items-center gap-2"
                                    href="#"
                                >
                                    <img
                                        src="/images/icons/user.png"
                                        alt="user"
                                    />
                                    <span class="nav-text"
                                        >Anne Doe</span
                                    >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;