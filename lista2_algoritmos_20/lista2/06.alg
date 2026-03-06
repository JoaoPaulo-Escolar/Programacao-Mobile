Algoritmo "SequenciaPositivos"
 Var
    num, soma: real
    qtd: inteiro
 Inicio
    soma<-0
    qtd<-0
    Leia(num)
    Enquanto num >= 0 Faca
   	soma<-soma+num
   	qtd<-qtd+1
   	Leia(num)
    FimEnquanto
    Se qtd>0 Entao
   	Escreva("Soma: ",soma)
   	Escreva("Media: ",soma/qtd)
    FimSe
 Fimalgoritmo
