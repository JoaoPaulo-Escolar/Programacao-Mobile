Algoritmo "SomaPares"
 Var
    num, i, somaPares, qtdImpares: inteiro
 Inicio
    somaPares <- 0
    qtdImpares <- 0
    Para i <- 1 Ate 20 Faca
   	Leia(num)
   	Se num % 2 = 0 Entao
      	somaPares <- somaPares + num
   	Senao
      	qtdImpares <- qtdImpares + 1
   	FimSe
    FimPara
    Escreva("Soma dos pares: ", somaPares)
    Escreva("Quantidade de ímpares: ", qtdImpares)
 Fimalgoritmo
