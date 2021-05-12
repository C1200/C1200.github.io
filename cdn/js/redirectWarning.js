var acceptRedirect;

window.addEventListener("load", () => {
    if (location.pathname === "/redirect") {
        var search = new URLSearchParams(location.search);

        document.getElementById("message").innerText = "You are leaving C1200.js.org to go to: " + search.get("url");

        acceptRedirect = () => {
            location.replace(search.get("url"));
        }
    } else {
        var As = document.getElementsByTagName("a");

        for (a of As) {
            if (new URL(a.href).origin !== location.origin) {
                a.href = "/redirect?url=" + a.href;
            }
        }
    }
});