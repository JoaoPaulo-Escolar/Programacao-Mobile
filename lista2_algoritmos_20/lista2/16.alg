Algoritmo "Emprestimo"
 Var
    valor, taxa, final, juros: real
    parcelas: inteiro
 Inicio
    Leia(valor)
    Leia(taxa)
    Leia(parcelas)
    final<-valor*(1+taxa/100)^parcelas
    juros<-final-valor
    Escreva("Valor final: ",final)
    Escreva("Total juros: ",juros)
 Fimalgoritmo
