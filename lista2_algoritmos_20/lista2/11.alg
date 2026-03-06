Algoritmo "SistemaCaixa"
 Var
    valor, bruto, desconto, totalDesconto: real
 Inicio
    bruto<-0
    totalDesconto<-0
    Leia(valor)
    Enquanto valor <> 0 Faca
   	bruto<-bruto+valor
   	Se valor > 100 Entao
      	desconto<-valor*0.05
          totalDesconto<-totalDesconto+desconto
   	FimSe
   	Leia(valor)
    FimEnquanto
    Escreva("Faturamento bruto: ",bruto)
    Escreva("Total descontos: ",totalDesconto)
 Fimalgoritmo
