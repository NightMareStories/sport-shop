
document.querySelector('.icon-menu').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.icon-menu').classList.toggle('_active');
    document.querySelector('.menu__body').classList.toggle('_active');
})

let in_burger = document.querySelector('.menu__body');
let from_actions = document.querySelector('._actions');
let from_info = document.querySelector('._info');
let actions = document.querySelector('.actions-header');
let info = document.querySelector('.info-header');

window.addEventListener('resize', function (event) {
    let viewport_width = Math.max(widthContenArea1 = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth);
    if (viewport_width < 640) {
        if (!actions.classList.contains('done') && !info.classList.contains('done')) {
            in_burger.prepend(actions);
            in_burger.append(info);
            actions.classList.add('done');
            info.classList.add('done');
        }
    }
    else {
        from_actions.append(actions);
        from_info.append(info);
        actions.classList.remove('done');
        info.classList.remove('done');
    }
})
