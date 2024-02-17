
// GRUPO DE CLASE
// Alberto González Romero
// Gema Millán Casado
// Rafael Lasso de la Vega

const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
    return console.log("<p>" + pregunta.titulo + "</p>")
  }
  function imprimeTodasLasRespuestas() {
    for (let respuesta = 0; respuesta < (pregunta.respuestas).length; respuesta++) {
      imprimeUnaRespuesta(respuesta)
    }
  }
  function imprimeUnaRespuesta(respuesta) {
    imprimeLabel(respuesta)
    imprimeInput(respuesta)
  }
  function imprimeLabel(respuesta) {
    console.log(`<label for="${pregunta.respuestas[respuesta].id}">${pregunta.respuestas[respuesta].label}</label>`);
  }
  function imprimeInput(respuesta) {
    console.log(`<input id="${pregunta.respuestas[respuesta].id}" name="${pregunta.respuestas[respuesta].name}" type="radio" value="${pregunta.respuestas[respuesta].value}">`)
  }

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);