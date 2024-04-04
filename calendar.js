
function colorirDia(){
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let td = calendar.getElementsByTagName('td')
    [(parseInt (days)+2)];
 
    if(days <= 0){
        alert("Digite um número positivo de dias(maior que 0).");
        return;
    }
    days = Math.max(1, parseInt(days));
 
    td.style.backgroundColor = color;
}

