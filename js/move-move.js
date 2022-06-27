// Obtém referência para o objeto que deve ser movido
const pontinho = document.querySelector("#pontinho");

// Valores da posição inicial
pontinho.style.left = 0; 
pontinho.syle.top = 0;

function move(direcao){
  // Valores atuais do pontinho
  let left = parseInt(pontinho.style.left);
  let top = parseInt(pontinho.style.top);

  switch(direcao){
    case "^":
      //top = top - 20;
      top -= 20;
      break;
    case "v":
      top += 20;
      break;
    case "&lt":
      left -= 20;
      break;
    case "&gt":
      left += 20;
      break;
  }

  pontinho.style.top = top + "px";
  pontinho.style.left = left + "px";
}