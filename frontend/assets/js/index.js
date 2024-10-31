let main = document.getElementById('main')

fetch("pages/dashboard.html")
.then(res => res.text())
.then(data => {
    console.log(main)
    //main.innerHTML = data
    //document.write(main)
})

document.addEventListener('DOMContentLoaded', ()=>{

    document.addEventListener('click', (e) =>{
        try {
            console.log(e.target)
        } catch (error) {}
    })
})