function toggleNavbar() {
    let x = document.getElementById("toggleNavbarContent")
    if (x.className === "navbar-content") {
        x.className += " responsive"
    } else
        x.className = "navbar-content"
}