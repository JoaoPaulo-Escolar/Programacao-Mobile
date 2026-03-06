algoritmo "Exercício 12 PM"
//  
//  
var
   idade: inteiro
inicio
   escreva("digita sua idade ai: ")
   leia(idade)

   se (idade >= 0) e (idade <= 12) entao
      escreval("crianca")
   senao
      se (idade <= 17) entao
         escreval("adolescente")
      senao
         se (idade <= 59) entao
            escreval("adulto")
         senao
            escreval("idoso")
         fimse
      fimse
   fimse
fimalgoritmo