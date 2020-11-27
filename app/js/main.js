
document.querySelector('.icon-menu').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.icon-menu').classList.toggle('_active');
    document.querySelector('.menu__body').classList.toggle('_active');
})

let in_burger = document.querySelector('.menu__body');
let in_header = document.querySelector('.contacts-header');

let from_actions = document.querySelector('._actions');
let from_info = document.querySelector('.info-header');

let actions = document.querySelector('.actions-header');
let info_callback = document.querySelector('._callback');
let info_schedule = document.querySelector('._schedule');
let info_cart = document.querySelector('._cart');

window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(widthContenArea1 = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth);

    if (viewport_width < 992) {
        if (!info_schedule.classList.contains('replaced')) {
            in_burger.append(info_schedule);
            info_schedule.classList.add('replaced');
        }
    }
    else {
        from_info.prepend(info_schedule);
        info_schedule.classList.remove('replaced');
    }

    if (viewport_width < 640) {
        if (!actions.classList.contains('replaced') && !info_callback.classList.contains('replaced') && !info_cart.classList.contains('replaced')) {
            in_burger.prepend(actions);
            in_burger.append(info_callback);
            in_header.prepend(info_cart);
            actions.classList.add('replaced');
            info_callback.classList.add('replaced');
            info_cart.classList.add('replaced');
        }
    }
    else {
        from_actions.append(actions);
        from_info.prepend(info_callback);
        from_info.append(info_cart);
        actions.classList.remove('replaced');
        info_callback.classList.remove('replaced');
        info_cart.classList.remove('replaced');
    }
})

let menuParents = document.querySelectorAll('.menu-page__parent');

for (let i = 0; i < menuParents.length; i++) {
    let menuParent = menuParents[i];
    menuParent.addEventListener("mouseenter", function (e) {
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener("mouseleave", function (e) {
        menuParent.classList.remove('_active');
    });
}

let productBurger = document.querySelector('.menu-page__burger');
let productBody = document.querySelector('.menu-page__body');

productBurger.addEventListener("click", function (e) {
    productBurger.classList.toggle('_active');
    productBody.classList.toggle('_active');
})
