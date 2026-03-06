Algoritmo "Primo"
 Var
    num, i, cont: inteiro
 Inicio
    Repita
   	Leia(num)
    Ate num > 1
    cont<-0
    Para i<-1 Ate num Faca
   	Se num % i = 0 Entao
      	cont<-cont+1
   	FimSe
    FimPara
    Se cont = 2 Entao
   	Escreva("É primo")
    Senao
   	Escreva("Não é primo")
    FimSe
 Fimalgoritmo
