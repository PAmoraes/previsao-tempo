const key="71616450a2a5bba4e23f7b7737e65615"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em "+ dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone-info-tempo").src = `https://openweathermap.org/img/wn/$dados.wheather[0].icon + .png`
}


async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao(){
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}