ffunction afficher(){
            var pointure = document.getElementById('pointure').value;
            var annee = document.getElementById('annee').value;
            var result = pointure * 2;
            result += 5;
            result *= 50;
            result -= annee;
            result += 1766;
            alert('Le résultat est : ' + result);
          }
