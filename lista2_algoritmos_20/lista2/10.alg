Algoritmo "Crescimento"
 Var
    A, B: real
    anos: inteiro
 Inicio
    Leia(A)
    Leia(B)
    anos<-0
    Enquanto A <= B Faca
   	A<-A*1.03
   	B<-B*1.015
   	anos<-anos+1
    FimEnquanto
    Escreva("Anos: ",anos)
 Fimalgoritmo
