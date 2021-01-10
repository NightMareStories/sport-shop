
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


let productBurger = document.querySelector('.menu-page__burger');
let productBody = document.querySelector('.menu-page__body');

window.addEventListener("load", function (e) {
    let viewport_width = Math.max(widthContenArea1 = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth);
    if (viewport_width < 992) {
        let menuParents = document.querySelectorAll('.menu-page__parent>a');
        for (let i = 0; i < menuParents.length; i++) {
            let menuParent = menuParents[i];
            menuParent.addEventListener("click", function (e) {
                menuParent.parentElement.classList.toggle('_active');
                e.preventDefault();
            });
        }
    }
    else {
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
    }
})
productBurger.addEventListener("click", function (e) {
    productBurger.classList.toggle('_active');
    productBody.classList.toggle('_active');
})

let searchSelect = document.querySelector('.search-page__title');
let searchCategories = document.querySelector('.categories-search');
searchSelect.addEventListener("click", function (e) {
    searchSelect.classList.toggle('_active');
    searchCategories.classList.toggle('_active');
})

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

let checkboxSelected = document.querySelector('.search-page__title>span');

for (let i = 0; i < checkboxCategories.length; i++) {
    let checkboxItem = checkboxCategories[i];
    checkboxItem.addEventListener("change", function (e) {
        checkboxItem.classList.toggle('_active');
        let categories = document.querySelectorAll('.categories-search__checkbox._active');
        console.log(categories);
        if (categories.length > 0) {
            searchSelect.classList.add('_selected');
            let searchCount = document.querySelector('.search-page__count');
            searchCount.textContent = searchCount.getAttribute('data-text') + categories.length;
        }
        else {
            searchSelect.classList.remove('_selected');
        }
    })
}

let side_in = document.querySelector('.page__content-side-in');
let side_from = document.querySelector('.page__side');

let side_content = document.querySelector('.page__content-side-from');

if (side_content != undefined) {
    window.addEventListener('resize', function (event) {
        let viewport_width = Math.max(widthContenArea1 = window.innerWidth || document.documentElement.clientWidth ||
            document.body.clientWidth);

        if (viewport_width < 992) {
            if (!side_content.classList.contains('replaced')) {
                side_in.append(side_content);
                side_content.classList.add('replaced');
            }
        }
        else {
            side_from.append(side_content);
            side_content.classList.remove('replaced');
        }
    })
}

//======================================================================================================================
//---------------------------------------------noUiSlider---------------------------------------------------------------

let priceSlider = document.querySelector('.price-filter__slider');

noUiSlider.create(priceSlider, {
    start: [0, 100000],
    connect: true,
    tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
    range: {
        'min': [0],
        'max': [200000]
    }
});

let priceStart = document.getElementById('price-start');
let priceEnd = document.getElementById('price-end');
let nodes = [
    document.getElementById('price-start'),
    document.getElementById('price-end')
];
let formatPrice = wNumb({
    decimals: 0
})
priceSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    nodes[handle].value = formatPrice.to(+values[handle]);
});
priceStart.addEventListener('change', function (e) {
    priceSlider.noUiSlider.set([this.value, null]);
});
priceEnd.addEventListener('change', function (e) {
    priceSlider.noUiSlider.set([null, this.value]);
});

//======================================================================================================================

//======================================================================================================================
//--------------------------------- Скрыть и показать секцию фильтрации товара -----------------------------------------

let filterTitle = document.querySelectorAll('._spoller');
filterTitle.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.target.parentElement.classList.toggle('_active');
        this.classList.toggle('_active');
    })
});

//=======================================================================================================================

//=======================================================================================================================
//-------------------------- Скрыть и показать фильтрацию товара на мобильном устройстве --------------------------------

let filterMobile = document.querySelector('.filter__title');
let filterContent = document.querySelector('.filter__content');
window.addEventListener('resize', function (e) {

    let viewport_width = Math.max(widthContenArea1 = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth);
    if (viewport_width < 992) {
        filterMobile.addEventListener('click', function (e) {
            e.preventDefault();
            if (!filterContent.classList.contains('_active')) {
                filterContent.classList.add('_active');
            }
            else {
                filterContent.classList.remove('_active');
            }
        });
    }
});

//=======================================================================================================================

//=======================================================================================================================
//---------------------------------- Сортировка товара плиткой или списком ----------------------------------------------



let viewGrid = document.querySelector('.view-catalog__item_grid');
let viewList = document.querySelector('.view-catalog__item_list');

viewGrid.addEventListener('click', function (e) {
    if (!viewGrid.classList.contains('_active') && viewList.classList.contains('_active')) {
        viewList.classList.remove('_active');
        viewGrid.classList.add('_active');

    }
});

viewList.addEventListener('click', function (e) {
    if (!viewList.classList.contains('_active') && viewGrid.classList.contains('_active')) {
        viewGrid.classList.remove('_active');
        viewList.classList.add('_active');
    }
});

//=======================================================================================================================



;



