let arrDespesas = [];

imprimirDespesas(arrDespesas);
imprimirExtrato();

// PRIMEIRO
function imprimirDespesas(despesas) {
  let divDespesas = document.getElementById("despesas");
  divDespesas.innerHTML = "<p><u>Despesas Detalhadas</u></p>";

  // A função percorre cada despesa e incrementa no meu array de despesas. Depois imprime no HTML dentro da div Despesas o gasto preenchido.
  despesas.forEach((despesa, index, arrDespesas) => {
    let novaDespesa = `
            <p>VALOR R$: ${despesa.valor} | TIPO: ${despesa.tipo} | DESCRIÇÃO: ${despesa.descricao}</p>
        `;
    divDespesas.innerHTML += novaDespesa;
  });
}

// SEGUNDO
function imprimirExtrato() {
  let divExtrato = document.getElementById("extrato");
  let gastoTotal = 0;
  let gastoAlimentacao = 0;
  let gastoUtilidades = 0;
  let gastoViagem = 0;

  // A função percorre o array e verifica quais objetos possuem o mesmo texto e acrescenta em seu devido gasto.

    arrDespesas.forEach((despesa, index, despesas) => {
        if (despesa.tipo === "alimentação") {
        gastoAlimentacao += despesa.valor
        } else if
        (despesa.tipo === "utilidades"){
            gastoUtilidades += despesa.valor
        } else if
        (despesa.tipo === "viagem"){
            gastoViagem += despesa.valor
        } else {
            window.alert("Não existe essa categoria de despesa")
        }

        gastoTotal = (gastoAlimentacao + gastoUtilidades + gastoViagem)
    })

  divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`;
}

function limparFiltros() {
  document.getElementById("tipoFiltro").value = "";
  document.getElementById("valorFiltroMin").value = "";
  document.getElementById("valorFiltroMax").value = "";
}

function adicionarDespesa() {
  let valorCdt = document.getElementById("valorCadastro");
  let tipoCtd = document.getElementById("tipoCadastro");
  let descricaoCtd = document.getElementById("descricaoCadastro");

  if (
    validarValor(valorCdt) &&
    validarTipo(tipoCtd) &&
    validarDescricao(descricaoCtd)
  ) {
    let novaDespesa = {
      valor: Number(valorCdt.value),
      tipo: tipoCtd.value,
      descricao: descricaoCtd.value,
    };

    arrDespesas.push(novaDespesa);

    valorCdt.value = "";
    tipoCtd.value = "";
    descricaoCtd.value = "";

    limparFiltros();
    imprimirDespesas(arrDespesas);
    imprimirExtrato();
  } else {
    alert("`Faltou algum valor ou algum valor é um número negativo`");
  }
}

// TERCEIRO
function filtrarDespesas() {
  let tipoFiltro = document.getElementById("tipoFiltro").value;
  let valorMin = Number(document.getElementById("valorFiltroMin").value);
  let valorMax = Number(document.getElementById("valorFiltroMax").value);

  let despesasFiltradas = arrDespesas.filter((despesa) => {
    if (tipoFiltro === despesa.tipo && despesa.valor >= valorMin && despesa.valor <= valorMax){
        return true
    }
  })

  imprimirDespesas(despesasFiltradas);
}

// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor) {
  if (valor.value.length > 0 && parseInt(valor.value) > 0) {
    return true;
  }
  return false;
}

function validarTipo(tipo) {
  if (tipo.value !== "") {
    return true;
  }
  return false;
}

function validarDescricao(texto) {
  if (texto.value.replace(/ /g, "").length !== 0) {
    return true;
  }
  return false;
}
