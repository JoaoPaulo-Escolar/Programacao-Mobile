Algoritmo "Intervalos"
 Var
    num, i, c1, c2, c3: inteiro
 Inicio
    c1<-0; c2<-0; c3<-0
    Para i<-1 Ate 30 Faca
   	Leia(num)
   	Se num >=0 e num <=25 Entao
      	c1<-c1+1
   	Senao
      	Se num <=50 Entao
         	c2<-c2+1
      	Senao
         	c3<-c3+1
      	FimSe
   	FimSe
    FimPara
    Escreva("0 a 25: ",c1)
    Escreva("26 a 50: ",c2)
    Escreva("Acima de 50: ",c3)
 Fimalgoritmo
