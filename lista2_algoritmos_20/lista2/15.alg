Algoritmo "Fibonacci"
 Var
    n, i, a, b, prox, pares: inteiro
 Inicio
    Leia(n)
    a<-0; b<-1; pares<-0
    Para i<-1 Ate n Faca
   	Escreva(a)
   	Se a%2=0 Entao
      	pares<-pares+1
   	FimSe
   	prox<-a+b
   	a<-b
   	b<-prox
    FimPara
    Escreva("Quantidade pares: ",pares)
 Fimalgoritmo
