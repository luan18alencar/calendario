
function colorirDia() {
    let day = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let cells = calendar.querySelectorAll('td'); 
  
    
    if (isNaN(day) || day <= 0 || day > 31) {
      alert("Digite um número entre 1 e 31.");
      return;
    }
    day = Math.max(1, parseInt(day));
  
    if (color >= 3) {
      alert(`A cor ${color} já foi utilizada 3 vezes nesse dia.`);
      return;
    }
   
  }

