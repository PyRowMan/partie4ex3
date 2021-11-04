
let somme = (nbr1, nbr2) => {
    console.log(nbr1, nbr2)
    var sum;
    nbr1 = Number(nbr1)
    nbr2 = Number(nbr2)
    sum = nbr1 * nbr2;
    document.getElementById("sum").value = sum;
}
