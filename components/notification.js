const notification = document.getElementById('notification');

const handleCloseBtn = () => {
    notification.classList.add('d-none');
};

notification.innerHTML = `
    <div class="px-5 d-grid d-md-block align-items-center">
        <p class="d-inline">
            Invite Friends and get 50% off on your next purchase
            <a href="#">Invite Now</a>
        </p>
        <button onclick="handleCloseBtn()" id="cross-btn" class="cross-btn float-end">
            <img src="/images/icons/cros.png" alt="cross" />
        </button>
    </div>
`;
