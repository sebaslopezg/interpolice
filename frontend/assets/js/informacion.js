function informacion(){
    const tabla = document.querySelector('#infoCiudadanos')

    fetch('http://localhost:4100/api/ciudadano/listartodos')
    .then((res)=> res.json())
    .then((data) => {
        data = data.datos
        data.forEach(el => {
            console.log(el)
            tabla.innerHTML += `
            <tr>
                <td scope="row">${el.id_ciudadanos}</td>
                <td>${el.nombre}</td>
                <td>${el.apellido}</td>
                <td>${el.categoria_id_categoria}</td>
                <td>
                    <button class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    <button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button>
                </td>
            </tr>
            `
        })
        
    
    })
}

document.addEventListener('click', (e)=>{
    try {

        let submit = e.target.getAttribute('id')
        console.log(submit)
        if (submit == 'btnRegistrar') {
            fntRegistrar()
        }
    } catch (error) {}
})

function fntRegistrar(){
    let nombreEntidad = document.querySelector('#nombreEntidad')
    let apellidoEntidad = document.querySelector('#apellidoEntidad')
    let emailEntidad = document.querySelector('#emailEntidad')
    let fechaEntidad = document.querySelector('#fechaEntidad')
    fetch('http://localhost:4100/api/ciudadano/crear',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify({
            nombre: nombreEntidad.value,
            apellido: apellidoEntidad.value,
            fecha_nacimiento: fechaEntidad.value,
            categoria_id_categoria: 1
        })
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
}