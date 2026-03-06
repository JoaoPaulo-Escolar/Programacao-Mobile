algoritmo "Exercício 23 PM"
//  
//  
var
   n, soma, media: real
   i: inteiro
inicio
   soma <- 0

   para i de 1 ate 5 faca
      escreva("numero: ")
      leia(n)
      soma <- soma + n
   fimpara

   media <- soma / 5
   escreval("media: ", media)
fimalgoritmo
