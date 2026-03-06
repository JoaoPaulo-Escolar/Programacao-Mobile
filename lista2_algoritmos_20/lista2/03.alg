Algoritmo "MaiorMenor"
 Var
    num, i, maiorPos, menorNeg: inteiro
 Inicio
    maiorPos <- -999999
    menorNeg <- 999999
    Para i <- 1 Ate 15 Faca
   	Leia(num)
   	Se num > 0 e num > maiorPos Entao
      	maiorPos <- num
   	FimSe
   	Se num < 0 e num < menorNeg Entao
      	menorNeg <- num
   	FimSe
    FimPara
    Escreva("Maior positivo: ", maiorPos)
    Escreva("Menor negativo: ", menorNeg)
 Fimalgoritmo
