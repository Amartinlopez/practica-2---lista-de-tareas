var listaTareas = new Array();

listaTareas = [
    {
        id: 1,
        titulo: 'Estudiar Javascript',
        prioridad: 'urgente'
    },
    {
        id: 2,
        titulo: 'Dormir',
        prioridad: 'diaria'
    },
    {
        id: 3,
        titulo: 'Salir de cañas',
        prioridad: 'mensual'
    },
    {
        id: 4,
        titulo: 'Ir a la compra',
        prioridad: 'mensual'
    }
];



var seccionTareas = document.getElementById('tareas')
var mensaje = document.getElementById('mensaje')
var mensajeFiltro = document.getElementById('mensajeFiltro')
var tituloTarea = document.getElementById('tituloTarea')
var btnGuardar = document.getElementById('guardar')
var prioridad = document.getElementById('prioridad')
var busqueda = document.querySelector('#search')
var seleccionarPrioridad = document.getElementById('prioridadSelect')

var eliminar

var ultimoId = 1


/* console.log(listaTareas) */
pintarTareas(listaTareas)



/* INTRODUCIR TAREA */

btnGuardar.addEventListener('click', e => {
    e.preventDefault()
    var nombreTarea = tituloTarea.value
    var prioridadTarea = prioridad.value

    if (nombreTarea == "" || prioridadTarea == "nulo" || nombreTarea[0] == " ") {
        console.log(nombreTarea)
        mensaje.innerText = 'No es posible guardar la tarea, rellene todos los campos'
        /* document.getElementById('form').reset() */

    } else {
        /*mensaje.innerText =''*/
        guardarTarea(nombreTarea, prioridadTarea)
        /* document.getElementById('form').reset() */
    }
    document.querySelector('#form').reset();
})


function guardarTarea(pNombre, pPrioridad) {
    let registroTarea = {
        id: ultimoId,
        titulo: pNombre,
        prioridad: pPrioridad,
    }
    listaTareas.push(registroTarea)
    pintarTarea(registroTarea)
    ultimoId++

}

function pintarTarea(pTarea) {
    seccionTareas.innerHTML += `
                <div id="${pTarea.id}" class="card tarea ${pTarea.prioridad}">

                    <div class="colorPrioridad"></div>
                    <h2>${pTarea.titulo}</h2>
                    <a href="#" title="eliminar" class="eliminar">Hecho<i class="fas fa-check eliminar">
                    </i>
                    </a>
                    
                </div >`
    eliminar = document.querySelectorAll('.eliminar')
    for (boton of eliminar) {
        boton.addEventListener('click', eliminarTarea)
    }

}


/* BUSCAR TAREA FILTRANDO*/

/* buscar tarea por nombre */

function pintarTareas(pListaFiltrada) {

    seccionTareas.innerHTML = ""

    if (pListaFiltrada.length != 0) {

        mensajeFiltro.innerText = ''

        pListaFiltrada.forEach(tarea => {
            seccionTareas.innerHTML += `
                <div id="${tarea.id}" class="card tarea ${tarea.prioridad}">
                    
                    <div class="colorPrioridad"></div>
                    <h2>${tarea.titulo}</h2>
                    <a href="#" title="eliminar" class="eliminar">Hecho<i class="fas fa-check eliminar">
                    </i>
                    </a>
                    
                </div >`

            eliminar = document.querySelectorAll('.eliminar')

            for (boton of eliminar) {
                boton.addEventListener('click', eliminarTarea)
            }


        })
    } else {
        mensajeFiltro.innerText = 'No existen tareas con esas condiciones'
    }
}


/* filtrar tarea por nombre */

var listaFiltradaNombre = new Array()

busqueda.addEventListener('keyup', (e) => {
    var tareaBuscar = e.target.value
    /* console.log(tareaBuscar) */

    listaFiltradaNombre = listaTareas.filter(tarea => {
        var nombreTarea = tarea.titulo.toLowerCase()

        return nombreTarea.includes(tareaBuscar)
    })
    pintarTareas(listaFiltradaNombre)

})


/* filtrar tarea por prioridad */

var listaFiltradaPrioridad = new Array();

seleccionarPrioridad.addEventListener('change', (e) => {
    var filtrarPrioridad = e.target.value

    /* console.log(filtrarPrioridad) */
    listaFiltradaPrioridad = listaTareas.filter(tarea => tarea.prioridad.includes(filtrarPrioridad))

    pintarTareas(listaFiltradaPrioridad)

})



/* BORRAR TAREA */

/* evento eliminar tarea */

var tareaArticulo = document.getElementsByTagName('article')
/* console.log(tareaArticulo) */

function eliminarTarea(e) {
    /* console.log(e.target.parentNode) */

    for (let i = 0; i < listaTareas.length; i++) {

        /* if(listaTareas[i].id == tareaArticulo[i].id){ */

        /* console.log(tareas.removeChild(e.target.parentNode)) */
        tareas.removeChild(e.target.parentNode);

        listaBorradas = new Array()
        listaBorradas = listaTareas.splice(tareaArticulo, 1);

    }
}

