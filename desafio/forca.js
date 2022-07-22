class Forca {
  constructor(palavra) {
    this.gabarito = palavra.split("");
    this.letrasChutadas = [];
    this.vidas = 6;
    this.palavra = this.gabarito.map((caractere) => {
      return "_";
    });
  }

  chutar(letra) { // verificar quais letras podem ser chutadas
    if((!letra.match(/([a-zA-Z])/)) || !(letra.length === 1) || this.letrasChutadas.includes(letra)) { // verificar se o caractere é possível
      return;
    }

    if (this.gabarito.includes(letra)) { // verificar se tem na palavra
      for (let i = 0; i < this.palavra.length; i++) {
        if (this.gabarito[i] === letra) { // se tem, replace na palavra pela letra chutada
          this.palavra[i] = letra;
        }
      }
    } else { // se não tem, diminui vidas
      this.vidas -= 1;
    }


    this.letrasChutadas.push(letra); // adicionar letra na this.letrasChutadas
  }

  buscarEstado() { // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
    if (this.vidas > 0 && !this.palavra.includes("_")) { // ganhou
      return "ganhou";
    } else if (this.vidas === 0) { // perdeu
      return "perdeu";
    } else { // aguardando chute
      return "aguardando chute";
    }
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;
