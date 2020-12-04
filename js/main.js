function trocar(elemento){
    //document.getElementById("trocar").innerHTML = "Obrigado por passar o mouse!"
    elemento.innerHTML = "Obrigado por passar o mouse!"
}

function voltar(elemento){
    //document.getElementById("trocar").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}


function clicou (){
    document.getElementById("obrigado").innerHTML = "Obrigado por clicar";
    //alert("Obrigado por clicar!")
}

function load(){
    alert("Página Carregada!")
}

function funcaoChange (elemento) {
    console.log(elemento.value)
}

/*function redirecionar (){
    //window.open("https://github.com/MouraP654/aula-javascript")
    //window.location.href = "https://github.com/MouraP654/aula-javascript"
}*/

/*function soma(n1, n2) {
    return n1 + n2;
}

alert(soma(1,5))

function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

}

alert(setReplace("Vai Japão", "Japão", "Brasil"))

var validar; //utilização variável global
function confirmaIdade(idade){
    if(idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?")
confirmaIdade(idade)
alert(validar)
*/

//utilização variável local
/*function confirmaIdade(idade){ 
    var validar;
    if(idade >=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}

var idade = prompt("Qual sua idade?")
alert(confirmaIdade(idade)); */




/*var data = new Date();
alert(data.getDay())
alert(data.getMonth())
alert(data.getFullYear())*/

/*var lista = [“Alemanha”, “Inglaterra”, “Escócia”]/
lista.push(“Polônia”);
lista.pop(“Inglaterra”);*/


/*var cont;

for(cont = 0; cont < 5; cont++) {
    alert (cont)
}*/


/*var cont = 0;

while(cont <= 5) {
    console.log(cont)
    cont++
}*/

/*var idade = prompt("Qual sua idade?");
if (idade < 18) {
    alert("Menor de idade")
}else {
    alert ("Maior de idade")
}*/


//var nome = "Rafael Moura";
//var n1 = 25;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo!"
//alert(nome + " tem " + "25 anos")
//alert(idade + idade2)
//console.log (nome);
//console.log(n1 + n2);
//console.log (frase.toUpperCase());
//console.log (frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"))

//trabalhando com arrays

//var list = ["Maçã", "Pera", "Laranja"];
//list.push("uva");
//list.pop(1);
//console.log(list[1]);
//console.log(list.length);
//console.log(list.toString());
//console.log(list.join(" | "))

/*var fruta = {nome: "Maçã", cor: "Vermelha", preço: 3.59};
console.log(fruta);

var carros = [{marca: "Fiat", modelo: "Argo"}, {marca: "Fiat", modelo: "Siena"}, {marca: "Fiat", modelo: "Estrada"}]
console.log(carros[1].modelo)*/


