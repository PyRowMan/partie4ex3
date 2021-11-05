button.addEventListener("click", action)

let multiply = (number1, number2) => {
    if (isNaN(number1) || isNaN(number2)){
        return "Veuillez écrire un nombre"
    }else{
        return number1 * number2       
    }
}

function action() {
    let p = document.createElement("p")
    p.innerText = multiply(number1.value, number2.value)
    document.body.append(p)
}
