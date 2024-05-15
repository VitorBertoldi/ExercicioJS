const form = document.getElementById('form');

function validaNumero(numA, numB) {
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    const numA = document.getElementById("numA");
    const numB = document.getElementById("numB");
    console.log(numA.value);
    console.log(numB.value);
    if (!validaNumero(numA.value, numB.value)) {
        alert("Tente novamente, o numero B precisa ser maior que o A")
    }
    else {
        alert("Parabens, numero B maior que A")
        
    }
})