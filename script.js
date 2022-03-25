//---------------------------------------Estrutura Sequencial------------------------------------------------//
//------------------------------------------exercicio1-------------------------------------------------------//
// let nome = prompt("Informe o seu nome")
// alert(nome)
// console.log(nome)
//------------------------------------------exercicio2-------------------------------------------------------//
// let num1 = Number(prompt("Informe o primeiro número da soma"))
// let num2 = Number(prompt("Informe o segundo número da soma"))
// alert(num1+num2)
//------------------------------------------exercicio3-------------------------------------------------------//
// let nota1 = Number(prompt("Informe a primeira nota da media"))
// let nota2 = Number(prompt("Informe a segunda nota da media"))
// alert((nota1+nota2)/2)
//------------------------------------------exercicio4-------------------------------------------------------//
// let anoNascimento = parseInt(prompt("Informe seu ano de Nascimento:"))
// let dataAtual = new Date()
// let anoAtual = dataAtual.getFullYear() 
// let idade = anoAtual - anoNascimento
// console.log (idade);
//------------------------------------------exercicio5------------------------------------------------------// 
// let valorHora = Number(prompt("Informe o valor da sua Hora de trabalho:"))
// let cargahoraria = Number(prompt("Informe a sua carga horária de trabalho mensal:"))
// let salario = valorHora*cargahoraria
// alert("O valor do seu salário este mês é: R$" + salario)
// Exercício 6
// let temperaturaF = Number(prompt("Informe a temperatura em graus Fahrenheit° :"))
// let temperaturaC = ((temperaturaF-32)/9)*5
// alert("A temperatura equivalente em graus Celsius é: " + temperaturaC + "°")
//---------------------------------------Estrutura de Decisão------------------------------------------------//
//------------------------------------------exercicio1-------------------------------------------------------//
// let num1 = Number(prompt("Informe o primeiro número"))
// let num2 = Number(prompt("Informe o segundo número"))
// if (num1>num2){
//     alert("O maior número é: " + num1) 
// } else{
//     alert("O maior número é: " + num2) 
// }
//------------------------------------------exercicio2-------------------------------------------------------//
// let valor = Number(prompt("Informe um valor:"))
// if(valor>=0){
//     alert("O valor " + valor + " é positivo")
// } else {
//     alert("O valor " + valor + " é negativo")
// }
//------------------------------------------exercicio3-------------------------------------------------------//
// let sexo = prompt("Informe o sexo da pessoa digitando apenas M ou F: ")
// switch (sexo) {
//     case 'M':
//         console.log ("A pessoa é do sexo Masculino");
//         break;
//     case 'F':
//         console.log ("A pessoa é do sexo Feminino")
//         break;
//     default:
//         console.log ("Sexo inválido");
// }
//------------------------------------------exercicio4-------------------------------------------------------//
// let nota1 = Number(prompt("Informe a primeira Nota"))
// let nota2 = Number(prompt("Informe a segunda Nota"))
// let media = (nota1+nota2)/2
// if (media === 10 ){
//     alert("Aprovado com Distinção") 
// } else if(media>=7) {
//     alert("Aprovado") 
// } else {
//     alert("Reprovado")
// }
//------------------------------------------exercicio5-------------------------------------------------------//
// let num1 = Number(prompt("Informe o primeiro número"))
// let num2 = Number(prompt("Informe o segundo número"))
// let num3 = Number(prompt("Informe o segundo número"))
// let lista = []
// lista.push(num1)
// lista.push(num2)
// lista.push(num3)
// let maior = Math.max.apply(null,lista)
// let menor = Math.min.apply(null,lista)
// alert("O maior valor é "+maior+ " e o menor valor é "+menor)
//Exercício 6
// let num1 = Number(prompt("Informe o primeiro número"))
// let num2 = Number(prompt("Informe o segundo número"))
// if (num1%2==0){
//     alert("O " + num1 + " é par")
// } else{
//     alert("O " + num1 + " é ímpar")
// }  
// if (num2%2==0){
//     alert("O " + num2 + " é par")
// } else{
//     alert("O " + num2 + " é ímpar")
// }
//----------------------------------------ExerciciosListas---------------------------------------------------//
//------------------------------------------exercicio1-------------------------------------------------------//
// let num1 = Number(prompt("Informe o primeiro número"))
// let num2 = Number(prompt("Informe o segundo número"))
// let num3 = Number(prompt("Informe o terceiro número"))
// let num4 = Number(prompt("Informe o quarto número"))
// let num5 = Number(prompt("Informe o quinto número"))
// let lista = []
// lista.push(num1)
// lista.push(num2)
// lista.push(num3)
// lista.push(num4)
// lista.push(num5)
// alert(lista)  
//------------------------------------------exercicio2-------------------------------------------------------//
// let num1 = Number(prompt("Informe o primeiro número"))
// let num2 = Number(prompt("Informe o segundo número"))
// let num3 = Number(prompt("Informe o terceiro número"))
// let num4 = Number(prompt("Informe o quarto número"))
// let num5 = Number(prompt("Informe o quinto número"))
// let num6 = Number(prompt("Informe o sexto número"))
// let num7 = Number(prompt("Informe o sétimo número"))
// let num8 = Number(prompt("Informe o oitavo número"))
// let num9 = Number(prompt("Informe o nono número"))
// let num10 = Number(prompt("Informe o décimo número"))
// let lista = []
// lista.push(num1)
// lista.push(num2)
// lista.push(num3)
// lista.push(num4)
// lista.push(num5)
// lista.push(num6)
// lista.push(num7)
// lista.push(num8)
// lista.push(num9)
// lista.push(num10)
// lista.reverse()
// alert(lista) 
//------------------------------------------exercicio3-------------------------------------------------------//
// let nota1 = Number(prompt("Informe a primeira nota"))
// let nota2 = Number(prompt("Informe a segunda nota"))
// let nota3 = Number(prompt("Informe a terceira nota"))
// let nota4 = Number(prompt("Informe a quarta nota"))
// let lista = []
// lista.push(nota1)
// lista.push(nota2)
// lista.push(nota3)
// lista.push(nota4)
// let soma = 0 ;
// for(var i = 0; i<lista.length; i++){
//     let numero = lista[i];
//     soma = soma + numero;
// }
// let media = soma/(lista.length)
// alert("As notas do aluno são estas: " + lista + " e A média do aluno é igual a : " + media)
//--------------------------------------------exercício 4----------------------------------------------------//
// let contador = 1 
// let lista = []
// let consoantes = []
// let vogais = []
// while (contador<=10){
//     let letra = (prompt("Digite um caracter"))    
//     if (letra !=="a" && letra !=="e" && letra !=="i" && letra !=="o" && letra !=="u"){
//         consoantes.push(letra)
//     }else {
//         vogais.push(letra)
//     }
//     contador = contador + 1 
// }
// console.log(consoantes)
//---------------------------------------------exercício5----------------------------------------------------//
// let contador = 1 
// let lista = []
// let par = []
// let impar  = []
// while (contador<=20){
//     let numero = parseInt(prompt("Digite um número Inteiro"))    
//     lista.push(numero)
//     if (numero%2==0){
//         par.push(numero)
//     }else {
//         impar.push(numero)
//     }
//     contador = contador + 1 
// }
// console.log(lista)
// console.log(par)
// console.log(impar)
//--------------------------------------------EXERCÍCIOS FUNÇÕES-----------------------------------------//
//------------------------------------------------Exercício 1------------------------------------------------//
// function verificar(numero){
//     if (numero%2==0){
//         console.log("O número " + numero + " é par")
//     } else{
//         console.log("O número " + numero + " é ímpar")
//     }
// }
// verificar(9)
//------------------------------------------------Exercício 2------------------------------------------------//
// function soma(x,y){
//     resultado = x + y 
//     return resultado
// }
// console.log(soma(5,5))
//------------------------------------------------Exercício 3------------------------------------------------//
// function oposto(x){
//     resultado = x *(-1) 
//     return resultado
// }
// console.log(oposto(8))
//------------------------------------------------Exercício 4------------------------------------------------//
// lista = [1,-4,7,12]
// let resultado = 0
// function soma(){
//     for (let i = 0; i<lista.length; i++){
//         if (lista[i]>=0){
//             resultado = resultado + lista[i]
//         }        
//     }
//     return resultado
// }
// console.log(soma(lista))
//------------------------------------------------Exercício 5------------------------------------------------//
// lista = [34,-500,-1,100]
// function menor(){
//     let menorvalor =  Math.min.apply(null,lista) 
//     return menorvalor
// }
// console.log(menor(lista))