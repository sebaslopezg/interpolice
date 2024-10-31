const footerLocation = "pages/template/footer.html"

fetch(footerLocation)
.then(res => res.text())
.then(data => {
    //document.write(data)
})