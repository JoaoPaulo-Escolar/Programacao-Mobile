algoritmo "Exercício 25 PM"
//  
//  
var
   n, maior, menor: real
   i: inteiro
inicio
   para i de 1 ate 10 faca
      escreva("numero: ")
      leia(n)

      se (i = 1) entao
         maior <- n
         menor <- n
      senao
         se (n > maior) entao
            maior <- n
         fimse
         se (n < menor) entao
            menor <- n
         fimse
      fimse
   fimpara

   escreval("maior: ", maior)
   escreval("menor: ", menor)
fimalgoritmo
