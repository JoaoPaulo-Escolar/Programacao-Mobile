algoritmo "Exercício 20 PM"
//  
//  
var
   peso, altura, imc: real
inicio
   escreva("peso: ")
   leia(peso)
   escreva("altura: ")
   leia(altura)

   imc <- peso / (altura ^ 2)

   escreval("imc: ", imc)

   se (imc < 18.5) entao
      escreval("abaixo do peso")
   senao
      se (imc < 25) entao
         escreval("peso normal")
      senao
         se (imc < 30) entao
            escreval("sobrepeso")
         senao
            escreval("obesidade")
         fimse
      fimse
   fimse
fimalgoritmo
