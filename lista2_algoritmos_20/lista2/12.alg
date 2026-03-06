Algoritmo "Idades"
 Var
    idade, soma, qtd, maiores, menores: inteiro
 Inicio
    soma<-0; qtd<-0; maiores<-0; menores<-0
    Leia(idade)
    Enquanto idade <> 0 Faca
   	soma<-soma+idade
   	qtd<-qtd+1
   	Se idade >= 18 Entao
      	maiores<-maiores+1
   	Senao
      	menores<-menores+1
   	FimSe
   	Leia(idade)
    FimEnquanto
    Se qtd>0 Entao
   	Escreva("Média: ",soma/qtd)
   	Escreva("Maiores de idade: ",maiores)
   	Escreva("Percentual menores: ",(menores*100)/qtd,"%")
    FimSe
 Fimalgoritmo
