const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("sub")
const multiplicar = document.getElementById("mult")
const dividir = document.getElementById("div")

function soma() {
    const total = parseInt(numero1.value) + parseInt(numero2.value)
    resultado.value = total
}
function subtrair() {
    const total =  parseInt(numero1.value) - parseInt(numero2.value)
    resultado.value = total
}
function multiplicar() {
    const total =  parseInt(numero1.value) * parseInt(numero2.value)
    resultado.value = total
}
function dividir() {
    const total =  parseInt(numero1.value) / parseInt(numero2.value)
    resultado.value = total
}

somar.addEventListener("click" , soma)

sub.addEventListener("click" , subtrair)

mult.addEventListener("click" , mutiplicar)

dividir.addEventListener("click" , dividir)



