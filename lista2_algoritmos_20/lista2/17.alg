Algoritmo "Classificacao"
 Var
    media: real
    i, ap, rec, rep: inteiro
 Inicio
    ap<-0; rec<-0; rep<-0
    Para i<-1 Ate 20 Faca
   	Leia(media)
   	Se media>=7 Entao
      	ap<-ap+1
   	Senao
      	Se media>=5 Entao
         	rec<-rec+1
      	Senao
         	rep<-rep+1
      	FimSe
   	FimSe
    FimPara
    Escreva("Aprovados: ",ap*100/20,"%")
    Escreva("Recuperação: ",rec*100/20,"%")
    Escreva("Reprovados: ",rep*100/20,"%")
 Fimalgoritmo
