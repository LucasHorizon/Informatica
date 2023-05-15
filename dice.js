function dice() {
    var result = Math.floor(Math.random() * 6) + 1;
    
    var resultElement = document.getElementById("diceResult");
    resultElement.innerHTML = "U gooit " + result;
}