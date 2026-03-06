Algoritmo "Senha"
 Var
    senha: caractere
    tentativas: inteiro
 Inicio
    tentativas<-0
    Repita
   	Leia(senha)
   	tentativas<-tentativas+1
   	Se senha<>"1234" Entao
      	Escreva("Senha incorreta")
   	FimSe
    Ate senha="1234"
    Escreva("Tentativas: ",tentativas)
 Fimalgoritmo
