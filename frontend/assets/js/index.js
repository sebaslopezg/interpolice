 const main = document.getElementById('main')


fetch("pages/dashboard.html")
.then(res => res.text())
.then(data => {
    main.innerHTML = data
})

document.addEventListener('DOMContentLoaded', ()=>{



    document.addEventListener('click', (e) =>{
        try {
            let pageSelected = e.target.closest('a').getAttribute('data-page')

            if (pageSelected != null) {
                fetch(`pages/${pageSelected}.html`)
                .then(res => res.text())
                .then(data => {
                    main.innerHTML = data
                    window[pageSelected]()
                })
            }
        } catch (error) {}
    })
}) 