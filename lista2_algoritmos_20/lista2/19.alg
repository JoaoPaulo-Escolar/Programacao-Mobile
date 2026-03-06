Algoritmo "Divisiveis"
 Var
    num, i, d3, d5, ambos: inteiro
 Inicio
    d3<-0; d5<-0; ambos<-0
    Para i<-1 Ate 25 Faca
   	Leia(num)
   	Se num%3=0 Entao
      	d3<-d3+1
   	FimSe
   	Se num%5=0 Entao
      	d5<-d5+1
   	FimSe
   	Se num%3=0 e num%5=0 Entao
      	ambos<-ambos+1
   	FimSe
    FimPara
    Escreva("Divisíveis por 3: ",d3)
    Escreva("Divisíveis por 5: ",d5)
    Escreva("Por ambos: ",ambos)
 Fimalgoritmo
