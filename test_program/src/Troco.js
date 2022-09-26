/**
 * Essa classe possui o metodo getQtdeNotas ele não está completo e cabe a você concluí-lo de acordo com os requisitos.
 */

class Troco {

  static getQtdeNotas(reais) {
    const notasQtd = {
      '100': 0,
      '50': 0,
      '20': 0,
      '10': 0,
      '5': 0,
      '2': 0,
      '1': 0,
      '0.5': 0,
      '0.25': 0,
      '0.1': 0,
      '0.05': 0,
      '0.01': 0
    }
    // laço para passar de key em key da array
    for (let i=0; i<=11 ; i++){
     const notas= [100,50,20,10,5,2,1,0.5,0.25,0.05,0.01];
      // essse laço vai fazer com que se repita o programa até que não seja mais possivel dividir reais por notasQtd
      while ((reais / notas[i])=0){
        //adicionando ao valor do array a quantidade de notas que será nescessaria para o troco
        notasQtd[i]=+1;
        
      }
    }
    /*
     * Coloque o seu código aqui.
     * Você é livre para criar classes, arquivos e funções da maneira que achar melhor.
     * Esse método deve retornar a quantidade de notas e moedas necessária para o valor em reais passado para ele
     *
     * Exemplo:
     * getQtdeNotas(100.00) // Deve retornar algo como {'100': 1}
     */

    return notasQtd
  }
}

module.exports = Troco
