

function vetor() {
    
    var nomes = [
        document.getElementById('nome1').value,
        document.getElementById('nome2').value,
        document.getElementById('nome3').value,
        document.getElementById('nome4').value,
        document.getElementById('nome5').value
        
    ];
    
    for (var i = 0; i < nomes.length; i++){
        document.getElementById('result').innerHTML += nomes[i]+ "<br />";
    }
}
