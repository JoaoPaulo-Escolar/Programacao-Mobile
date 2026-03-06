algoritmo "Exercício 14 PM"
//  
//  
var
   valor, final: real
inicio
   escreva("valor da compra: ")
   leia(valor)

   se (valor > 100) entao
      final <- valor - (valor * 0.10)
   senao
      final <- valor
   fimse

   escreval("valor final: ", final)
fimalgoritmo
