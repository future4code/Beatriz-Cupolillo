function criarTarefa() {
    const inputTarefa = document.getElementById("tarefa");
    let tarefa = inputTarefa.value;
    //console.log(tarefa);
    const diasSemana = document.getElementById("dias-semana");
    let semana = diasSemana.value;
    //console.log(semana);

    if (inputTarefa.value === "") {
        alert("Você precisa digitar alguma tarefa")
    } else {
        switch (semana) {
            case "domingo":
                document.getElementById("domingo").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "segunda":
                document.getElementById("segunda").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "terca":
                document.getElementById("terca").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "quarta":
                document.getElementById("quarta").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "quinta":
                document.getElementById("quinta").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "sexta":
                document.getElementById("sexta").innerHTML += "<p>* " + tarefa + "</p>";
                break;
            case "sabado":
                document.getElementById("sabado").innerHTML += "<p>* " + tarefa + "</p>";
                break;
        }
    }
}
