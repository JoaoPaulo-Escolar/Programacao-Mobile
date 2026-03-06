Algoritmo "CaixaEletronico"
 Var
    valor, resto: inteiro
 Inicio
    Repita
   	Leia(valor)
    Ate valor>0
    resto<-valor
    Escreva("Notas de 100: ",resto div 100)
    resto<-resto mod 100
    Escreva("Notas de 50: ",resto div 50)
    resto<-resto mod 50
    Escreva("Notas de 20: ",resto div 20)
    resto<-resto mod 20
    Escreva("Notas de 10: ",resto div 10)
    resto<-resto mod 10
    Escreva("Notas de 5: ",resto div 5)
    resto<-resto mod 5
    Escreva("Notas de 2: ",resto div 2)
    resto<-resto mod 2
    Escreva("Notas de 1: ",resto)
 Fimalgoritmo
