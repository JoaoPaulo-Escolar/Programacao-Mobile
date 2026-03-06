algoritmo "Exercício 19 PM"
//  
//  
var
   ano: inteiro
inicio
   escreva("digita o ano: ")
   leia(ano)

   se ((ano mod 4 = 0) e (ano mod 100 <> 0)) ou (ano mod 400 = 0) entao
      escreval("ano bissexto")
   senao
      escreval("nao eh bissexto")
   fimse
fimalgoritmo
