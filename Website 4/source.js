function toggle() {
    let element = document.getElementById("navDiv");
    let header = document.getElementById("headerDiv");
    if (element.style.display === "none") {
        element.style.display = "block";
        header.style.height = "auto";
    } else {
        element.style.display = "none";
        header.style.height = "80px"
    }


}