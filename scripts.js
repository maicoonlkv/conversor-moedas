const converterButton = document.getElementById("converterButton")
const currencySource = document.querySelector(".currencySource")
const currencySelect = document.querySelector(".currencySelect")


function converterValues() {  //Criacao da função
    const inputCurrencyValue = document.querySelector(".input-currency").value //pega o valor do input no HTML por classe 
    const currencyValueToConverted = document.querySelector(".currency-value") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value-to-convert") //valor em outra moeda


    const dolarToday = 5.2 //variavel com o valor do Dolar fictício
    const euroToday = 6.20
    const libraToday = 6.26
    const bitcoinToday = 210552.05

    
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", //estilo que quero mudar, no caso é uma moeda
            currency: "USD" //modelo de moeda que quero converter
        }).format(inputCurrencyValue / dolarToday) //.format eu menciono a varial que quero converter

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", //estilo que quero mudar, no caso é uma moeda
            currency: "EUR" //modelo de moeda que quero converter
        }).format(inputCurrencyValue / euroToday) //.format eu menciono a varial que quero converter
        
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency", //estilo que quero mudar, no caso é uma moeda
            currency: "GBP" //modelo de moeda que quero converter
        }).format(inputCurrencyValue / libraToday) //.format eu menciono a varial que quero converter
        
    }
    
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", //estilo que quero mudar, no caso é uma moeda
            currency: "BTC" //modelo de moeda que quero converter
        }).format(inputCurrencyValue / bitcoinToday) //.format eu menciono a varial que quero converter

    }


    //Formatação de moeda para BRL 
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", //estilo que quero mudar, no caso é uma moeda
        currency: "BRL" //modelo de moeda que quero converter
    }).format(inputCurrencyValue) //.format eu menciono a varial que quero converter



    //currencyValueToConverted.innerHTML = inputCurrencyValue //substitui o valor no HTML no campo real sem formatação
    //currencyValueConverted.innerHTML = convertedValue //substitui o valor no HTML no campo outra moeda sem formatação

}

function changeCurrencyOrigin() {
    const currencyOptionNameOrigin = document.querySelector(".currency-text") //pega a classe do valor do HTML para mudar 
    const currencyImgOrigin = document.querySelector(".currencyImgOrigin") //pega a classe da imagem do HTML

    if(currencySource.value == "deReal") {
        currencyOptionNameOrigin.innerHTML = "Real Brasileiro" //muda escrita para Dolar americano
        currencyImgOrigin.src = "./assets/real.png" //muda imagem para bandeira do euro
    }
    
    if(currencySource.value == "deDolar") {
        currencyOptionNameOrigin.innerHTML = "Dolar Americano" //muda escrita para Dolar americano
        currencyImgOrigin.src = "./assets/dolar.png" //muda imagem para bandeira do euro
    }

    if(currencySource.value == "deEuro") {
        currencyOptionNameOrigin.innerHTML = "Euro" //muda escrita para Euro
        currencyImgOrigin.src = "./assets/euro.png" //muda imagem para bandeira do euro
    }

    if(currencySource.value == "deLibra") {
        currencyOptionNameOrigin.innerHTML = "Libra" //muda escrita para Euro
        currencyImgOrigin.src = "./assets/libra.png" //muda imagem para bandeira do euro
    }

    if(currencySource.value == "deBitcoin") {
        currencyOptionNameOrigin.innerHTML = "Bitcoin" //muda escrita para Euro
        currencyImgOrigin.src = "./assets/bitcoin.png" //muda imagem para bandeira do euro
    }
}

function changeCurrency() {
    const currencyOption = document.querySelector(".currency-option") //pega a classe do valor do HTML para mudar 
    const currencyImg = document.querySelector(".currencyImg") //pega a classe da imagem do HTML

    if(currencySelect.value == "real") {
        currencyOption.innerHTML = "Real Brasileiro" //muda escrita para Dolar americano
        currencyImg.src = "./assets/real.png" //muda imagem para bandeira do euro
    }
    
    if(currencySelect.value == "dolar") {
        currencyOption.innerHTML = "Dolar Americano" //muda escrita para Dolar americano
        currencyImg.src = "./assets/dolar.png" //muda imagem para bandeira do euro
    }

    if(currencySelect.value == "euro") {
        currencyOption.innerHTML = "Euro" //muda escrita para Euro
        currencyImg.src = "./assets/euro.png" //muda imagem para bandeira do euro
    }

    if(currencySelect.value == "libra") {
        currencyOption.innerHTML = "Libra" //muda escrita para Euro
        currencyImg.src = "./assets/libra.png" //muda imagem para bandeira do euro
    }

    if(currencySelect.value == "bitcoin") {
        currencyOption.innerHTML = "Bitcoin" //muda escrita para Euro
        currencyImg.src = "./assets/bitcoin.png" //muda imagem para bandeira do euro
    }
}




currencySource.addEventListener("change", changeCurrencyOrigin)
currencySelect.addEventListener("change", changeCurrency) //valida quando troco a moeda
converterButton.addEventListener("click", converterValues) //valida se o click esta pegando, dpois de criar a variavel