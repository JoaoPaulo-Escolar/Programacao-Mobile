Algoritmo "Estoque"
 Var
    venda, total, maior, diaMaior, i: inteiro
 Inicio
    total<-0; maior<-0
    Para i<-1 Ate 30 Faca
   	Leia(venda)
   	total<-total+venda
   	Se venda < 5 Entao
      	Escreva("Alerta: estoque baixo no dia ",i)
   	FimSe
   	Se venda > maior Entao
      	maior<-venda
      	diaMaior<-i
   	FimSe
    FimPara
    Escreva("Total vendido: ",total)
    Escreva("Dia maior venda: ",diaMaior)
 Fimalgoritmo
