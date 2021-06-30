var search = new URLSearchParams(location.search);

var container = document.getElementsByClassName("container")[0];
var elsewhere = document.getElementsByClassName("elsewhere")[0];

var video = document.getElementsByTagName("video")[0];
var source = document.createElement("source");

var playpause = document.getElementById("playpause");
var fullscrn = document.getElementById("fullscrn");
var vol = document.getElementById("vol");

var title = document.getElementsByClassName("title")[0];
var time = document.getElementsByClassName("time")[0];

var isFullscreen = false;

if (!search.has("v")) {
    document.body.innerHTML =
        '<div class="error">There was an error while loading that!</div>';
} else {
    var v = videos.filter((v) => v.id === search.get("v"))[0];

    if (!v)
        document.body.innerHTML =
            '<div class="error">There was an error while loading that!</div>';

    source.src = v.url;
    video.append(source);

    elsewhere.innerHTML = v.elsewhere
        .map(
            (where) =>
                `<a href="${where.url}">
                    ${where.fa ? `<i class="fa ${where.fa}"></i>` : ""}
                    ${v.video ? "Watch on" : "Listen on"} ${where.name}
                </a>`
        )
        .join("");

    title.innerText = v.title;
    document.title = v.title + " | C1200";

    if (!v.video) {
        var cover = document.createElement("img");
        cover.src = v.cover;
        cover.className = "coverimg";
        video.style.background = "lightblue";
        document.getElementsByClassName("c-video")[0].append(cover);
    }

    if (search.get("autoplay") === "true") togglePlayback();
    if (search.get("muted") === "true") video.volume = 0;
    if (search.get("embed") === "true") {
        container.classList.add("full");
        fullscrn.style.display = "none";
    }
}

function togglePlayback() {
    if (video.paused) {
        playpause.className = "pause";
        video.play().catch(console.log);
    } else {
        playpause.className = "play";
        video.pause();
    }
}

function timeUpdate() {
    if (video.ended) {
        playpause.className = "end";
    }

    var timew = video.currentTime / video.duration;
    time.style.width = timew * 100 + "%";
}

function volUpdate() {
    video.volume = vol.value / 100;
}

function toggleFullscreen() {
    var elem = document.documentElement;

    if (!isFullscreen) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

vol.value = video.volume * 100;
playpause.addEventListener("click", togglePlayback);
fullscrn.addEventListener("click", toggleFullscreen);
video.addEventListener("timeupdate", timeUpdate);
video.addEventListener("volumechange", volUpdate);
vol.addEventListener("change", volUpdate);

video.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
cover.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("fullscreenchange", () => {
    if (!isFullscreen) {
        isFullscreen = true;
        container.classList.add("full");
        fullscrn.className = "nofull";
    } else {
        isFullscreen = false;
        container.classList.remove("full");
        fullscrn.className = "full";
    }
});
