const headerLocation = "pages/template/header.html"
const sideBarLocation = "pages/template/sideBar.html"

fetch(headerLocation)
.then(res => res.text())
.then(data => {
    //document.write(data)
})

fetch(sideBarLocation)
.then(res => res.text())
.then(data => {
    //document.write(data)
})