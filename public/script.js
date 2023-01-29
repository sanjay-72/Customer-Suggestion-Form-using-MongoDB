document.querySelector(
    "body").style.visibility = "hidden";
document.getElementById("jsWarning").style.display = "none";
document.querySelector(
    "#Loader").style.visibility = "visible";
document.body.style.backgroundColor = "white";

setTimeout(function () {
    document.querySelector(
        "#Loader").style.display = "none";
    document.querySelector(
        "body").style.visibility = "visible";
    document.getElementById("fullNameInput").focus();
    document.body.style.backgroundColor = 'rgb(' + 206 + ',' + 249 + ',' + 240 + ')';
}, 6000);

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 20,
    speed: 400
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
        document.title = "Suggestion Form";
    } else {
        document.title = "Please give your suggestion.";
    }
});