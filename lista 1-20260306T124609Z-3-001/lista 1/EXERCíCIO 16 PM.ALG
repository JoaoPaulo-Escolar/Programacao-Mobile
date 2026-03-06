algoritmo "Exercício 16 PM"
//  
//  
var
   a, b, c: real
inicio
   escreva("lado 1: ")
   leia(a)
   escreva("lado 2: ")
   leia(b)
   escreva("lado 3: ")
   leia(c)

   se (a + b > c) e (a + c > b) e (b + c > a) entao
      escreval("forma triangulo")
   senao
      escreval("nao forma triangulo")
   fimse
fimalgoritmo
