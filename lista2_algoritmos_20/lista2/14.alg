Algoritmo "Eleicao"
 Var
    voto, c1, c2, c3: inteiro
 Inicio
    c1<-0; c2<-0; c3<-0
    Leia(voto)
    Enquanto voto<>0 Faca
   	Escolha voto
      	Caso 1
         	c1<-c1+1
      	Caso 2
         	c2<-c2+1
      	Caso 3
         	c3<-c3+1
   	FimEscolha
   	Leia(voto)
    FimEnquanto
    Escreva("Candidato 1: ",c1)
    Escreva("Candidato 2: ",c2)
    Escreva("Candidato 3: ",c3)
 Fimalgoritmo
