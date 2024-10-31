const headerLocation = "pages/template/header.html"
const sideBarLocation = "pages/template/sideBar.html"
const footerLocation = "pages/template/footer.html"

fetch(headerLocation)
.then(res => res.text())
.then(data => {
    document.write(data)
})

fetch(sideBarLocation)
.then(res => res.text())
.then(data => {
    document.write(data)
})

fetch("pages/dashboard.html")
.then(res => res.text())
.then(data => {
    document.write(data)
})

document.addEventListener('DOMContentLoaded', ()=>{
    fetch(footerLocation)
    .then(res => res.text())
    .then(data => {
        document.write(data)
    })
})