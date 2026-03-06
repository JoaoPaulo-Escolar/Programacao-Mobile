Algoritmo "Vendas"
 Var
    venda, bonus, totalBonus, maior: real
    i: inteiro
 Inicio
    totalBonus<-0
    maior<-0
    Para i<-1 Ate 10 Faca
   	Leia(venda)
   	Se venda >= 5000 Entao
      	bonus<-venda*0.10
   	Senao
      	bonus<-venda*0.05
   	FimSe
   	totalBonus<-totalBonus+bonus
   	Se venda > maior Entao
      	maior<-venda
   	FimSe
    FimPara
    Escreva("Total bônus: ",totalBonus)
    Escreva("Maior venda: ",maior)
 Fimalgoritmo
