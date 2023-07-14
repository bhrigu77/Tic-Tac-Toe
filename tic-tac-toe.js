let count = 0;
      function playGame(id){
        const button = document.querySelector(id);
        
        const winnerText = document.querySelector('.winner-text');
        
        if(!(button.classList.contains('used')) && !((winnerText.innerHTML === 'Winner : Player 1') || (winnerText.innerHTML === 'Winner : Player 2'))) {
          if(count % 2 === 0) {
          count++;
          button.innerHTML = "X";
          button.classList.add('used');
          checkPattern();
          } else {
            count++;
            button.innerHTML = "O";
            button.classList.add('used');
            checkPattern();
          } 
        }
        if (count === 9 && winnerText.innerHTML === ""){
          winnerText.innerHTML = 'Match Draw!';
        }
      }


      function checkPattern() {
      const b11 = document.querySelector('.b-11').innerHTML;
      const b12 = document.querySelector('.b-12').innerHTML;
      const b13 = document.querySelector('.b-13').innerHTML;
      const b21 = document.querySelector('.b-21').innerHTML;
      const b22 = document.querySelector('.b-22').innerHTML;
      const b23 = document.querySelector('.b-23').innerHTML;
      const b31 = document.querySelector('.b-31').innerHTML;
      const b32 = document.querySelector('.b-32').innerHTML;
      const b33 = document.querySelector('.b-33').innerHTML;


        if((b11 === 'X' && b22 === 'X' && b33 === 'X' ) || (b13 === 'X' && b22 === 'X' && b31 === 'X') || (b11 === 'X' && b12 === 'X' && b13 === 'X') || ( b21 === 'X' && b22 === 'X' && b23 === 'X' ) || ( b31 === 'X' && b32 === 'X' && b33 === 'X' ) || (b11 === 'X' && b21 === 'X' && b31 === 'X') || (b12 === 'X' && b22 === 'X' && b32 === 'X') || (b13 === 'X' && b23 === 'X' && b33 === 'X'))  {
          document.querySelector('.winner-text').innerHTML = 'Winner : Player 1';
          return true;
        } 
        else if ((b11 === 'O' && b22 === 'O' && b33 === 'O' ) || (b13 === 'O' && b22 === 'O' && b31 === 'O') || (b11 === 'O' && b12 === 'O' && b13 === 'O') || ( b21 === 'O' && b22 === 'O' && b23 === 'O' ) || ( b31 === 'O' && b32 === 'O' && b33 === 'O' ) || (b11 === 'O' && b21 === 'O' && b31 === 'O') || (b12 === 'O' && b22 === 'O' && b32 === 'O' ) || ( b13 === 'O' && b23 === 'O' && b33 === 'O')) {
          document.querySelector('.winner-text').innerHTML = 'Winner : Player 2';
          return true;
          
        } 
      }  


      function resetButton() {
      count = 0;

      const b11 = document.querySelector('.b-11');
      const b12 = document.querySelector('.b-12');
      const b13 = document.querySelector('.b-13');
      const b21 = document.querySelector('.b-21');
      const b22 = document.querySelector('.b-22');
      const b23 = document.querySelector('.b-23');
      const b31 = document.querySelector('.b-31');
      const b32 = document.querySelector('.b-32');
      const b33 = document.querySelector('.b-33');

      b11.innerHTML = "";
      b12.innerHTML = "";
      b13.innerHTML = "";
      b21.innerHTML = "";
      b22.innerHTML = "";
      b23.innerHTML = "";
      b31.innerHTML = "";
      b32.innerHTML = "";
      b33.innerHTML = "";

      b11.classList.remove('used');
      b12.classList.remove('used');
      b13.classList.remove('used');
      b21.classList.remove('used');
      b22.classList.remove('used');
      b23.classList.remove('used');
      b31.classList.remove('used');
      b32.classList.remove('used');
      b33.classList.remove('used');

      document.querySelector('.winner-text').innerHTML = '';
      document.querySelector('.winner-text').innerHTML = '';



      }