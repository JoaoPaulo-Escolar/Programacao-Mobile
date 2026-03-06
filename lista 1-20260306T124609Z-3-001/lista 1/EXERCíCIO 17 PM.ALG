algoritmo "Exercício 17 PM"
//  
//  
var
   user, senha: caractere
inicio
   escreva("usuario: ")
   leia(user)
   escreva("senha: ")
   leia(senha)

   se (user = "admin") e (senha = "1234") entao
      escreval("acesso permitido")
   senao
      escreval("acesso negado")
   fimse
fimalgoritmo
