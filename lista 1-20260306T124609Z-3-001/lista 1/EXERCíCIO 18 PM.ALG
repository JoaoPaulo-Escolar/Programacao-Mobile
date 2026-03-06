algoritmo "Exercício 18 PM"
//  
//  
var
   salario, parcela: real
inicio
   escreva("salario: ")
   leia(salario)
   escreva("parcela: ")
   leia(parcela)

   se (parcela <= salario * 0.30) entao
      escreval("emprestimo aprovado")
   senao
      escreval("emprestimo negado")
   fimse
fimalgoritmo
