export default function activateBurger(btnOpenSelector, btnCloseSelector, burgerWindowSelector, linkSelector, darkSelector) {
    const burgerMenu = document.querySelector(burgerWindowSelector);
    const darkElement = document.querySelector(darkSelector);

    document.addEventListener('click', function (e) {
        if (e.target.closest(btnOpenSelector)) {
            burgerMenu.classList.add('_active');
            darkElement.classList.add('_active');

        }
        if (e.target.closest(btnCloseSelector)) {
            burgerMenu.classList.remove('_active');
            darkElement.classList.remove('_active');
        }
        if (!e.target.closest(burgerWindowSelector) && !e.target.closest(btnOpenSelector)) {
            burgerMenu.classList.remove('_active');
            darkElement.classList.remove('_active');
        }
        if (e.target.closest(linkSelector)) {
            burgerMenu.classList.remove('_active');
            darkElement.classList.remove('_active');
        }
    });
}