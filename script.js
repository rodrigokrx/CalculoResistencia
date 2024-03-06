function FazerCalculo(){
    let valueF01 = document.getElementById("faixa01").value;
    let valueF02 = document.getElementById("faixa02").value;
    let valuemult = document.getElementById("mult").value;
    let tole = document.getElementById("tol").value;
    let total = ((valueF01+valueF02)*valuemult);
    let maismenos = (total*tole);
    let menor = total - maismenos;
    let maior = total + maismenos;
    document.getElementById("resist").value = total;
    document.getElementById("tolera").value = (menor + "-" + maior);
}