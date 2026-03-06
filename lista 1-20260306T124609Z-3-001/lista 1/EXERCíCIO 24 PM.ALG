algoritmo "Exercício 24 PM"
//  
//  
var
   n, soma, qtd: inteiro
inicio
   soma <- 0
   qtd <- 0

   repita
      escreva("digita numero (0 para parar): ")
      leia(n)

      se (n <> 0) entao
         soma <- soma + n
         qtd <- qtd + 1
      fimse
   ate (n = 0)

   escreval("quantidade: ", qtd)
   escreval("soma total: ", soma)
fimalgoritmo
