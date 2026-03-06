Algoritmo "MediaValidada"
 Var
    nota, soma: real
    i: inteiro
 Inicio
    soma <- 0
    Para i <- 1 Ate 5 Faca
   	Repita
      	Leia(nota)
   	Ate nota >= 0 e nota <= 10
   	soma <- soma + nota
    FimPara
    Escreva("Média: ", soma/5)
 Fimalgoritmo
