let funcionPredeterminada = () => {
    const formulario = document.getElementById('formulario')
    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault(); /*prevenir el evento predeterminado*/
        let valorPorHora = parseFloat(document.getElementById('valorPorHora').value)
        let interfazHoras = parseFloat(document.getElementById('interfazHoras').value)
        let htmlHoras = parseFloat(document.getElementById('htmlHoras').value)
       
        let cssHoras = parseFloat(document.getElementById('cssHoras').value)

        let resultado = (valorPorHora * interfazHoras) + (valorPorHora + htmlHoras) + (valorPorHora + cssHoras)
        document.getElementById('valorTotal').value = "$"+ resultado
       
      })

}

funcionPredeterminada(); /*invoca la funcion flecha*/