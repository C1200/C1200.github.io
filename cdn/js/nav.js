function toggleMobileNav() {
    var nav = document.getElementById("navbar");

    if (nav.classList.contains("show")) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
}