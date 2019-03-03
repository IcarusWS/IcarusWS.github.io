// Config params
const hamburger = document.querySelector('.hamburger');
const section = document.querySelector('section');
const leftbar = document.querySelector('.leftbar');
var mobile;

var mobileMediaQuery = window.matchMedia("(max-width: 360px)");
if (mobileMediaQuery.matches) { mobile = true; } else { mobile = false; }

// WOX
wox.assign("daidalos", "pages/daidalos.html");
wox.render("daidalos");

function removeActivePage() {
    var activePage = document.querySelector('#active-page');
    activePage.remove();
}

function setClickedAsActive() {
    var active = document.querySelector('#active');
    active.removeAttribute("id");
    event.target.setAttribute("id", "active");
}

function autoCloseMenuOnClick() {
    hamburger.classList.toggle('nav-open');
    section.classList.toggle('nav-open');
    childrenVisibility();
}

function clickLangic(event) {
    removeActivePage();
    wox.assign("langic", "pages/langic.html");
    setClickedAsActive();
    if (mobile) { autoCloseMenuOnClick(); }
}

function clickDaidalos(event) {
    removeActivePage();
    wox.assign("daidalos", "pages/daidalos.html")
    setClickedAsActive();
    if (mobile) { autoCloseMenuOnClick(); }
}

function clickPH(event) {
    removeActivePage();
    wox.assign("projecthub", "pages/projecthub.html")
    setClickedAsActive();
    if (mobile) { autoCloseMenuOnClick(); }
}

function clickWox(event) {
    removeActivePage();
    wox.assign("wox", "pages/wox.html")
    setClickedAsActive();
    if (mobile) { autoCloseMenuOnClick(); }
}

// Hamburger toggle state
hamburger.onclick = function toggleMenu() {
    hamburger.classList.toggle('nav-open');
    section.classList.toggle('nav-open');
    childrenVisibility();
};

function childrenVisibility() {
    var subs = leftbar.children;

    if (hamburger.classList.contains('nav-open')) {
        for (var i = 0; i < subs.length; i++) {
            var subsToShow = subs[i];
            subsToShow.style.display = 'block';
        }
    } else {
        for (var j = 0; j < subs.length; j++) {
            var subsToHide = subs[j];
            subsToHide.style.display = 'none';
        }
    }
}
