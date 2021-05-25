document.getElementById("botaoenviar").addEventListener("click", validaFormulario)

function validaFormulario(){
    if (document.getElementById("nome").value != "" && document.getElementById ("email").value != ""){
        alert("Pronto! Você receberá as novidades por e-mail.")
    }else{
        alert("Por favor, preencha todos os campos.")
    }
}

