//header scroll with bg

(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 620) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    };
}());

//burger menu

//(function() {
//    const burgerItem = document.querySelector('.burger');
//    const menu = document.querySelector('#nav-menu');
//    const menuCloseItem = document.querySelector('.header-nav-close');
//    burgerItem.addEventListener('click', () => {
//        menu.classList.add('header-nav-active');
//         });
//    menuCloseItem.addEventListener('click', ()=> {
//         menu.classList.remove('header-nav-active');
//    });
//}());



//Кнопка вверх

window.onload = function () {
    var scrolled;
    var timer;
    document.getElementById('top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0, scrolled);
            scrolled = scrolled - 50;
            timer = setTimeout(scrollToTop, 20);
        } else {
            clearInterval(timer);
            window.scrollTo(0, 0);
        }
    }
}



//Випадаюче меню

document.getElementById('nav-menu').onmouseover = function (event) {
    let target = event.target;
    if (target.className == 'menu-item') {
        let s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function (event) {
    let target = event.target;
    console.log(event.target);
    if (target.className != 'menu-item' && target.className != 'submenu') {
        closeMenu();
    }
}

function closeMenu() {
    let menu = document.getElementById('nav-menu');
    let submenu = document.getElementsByClassName('submenu');
    for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.display = 'none';
    }
}
