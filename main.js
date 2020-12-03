let divLetras = document.getElementById("letras");
let divResultados = document.getElementById("resultados");

let busqueda = "Kendrick Lamar";
let token = "_BaEl_kkojziSNmCb8ZnbEbWra3xDaNAmQ-pGKERAHuKrbbufyWCWRwDMq1HyPR3";

let letras = fetch("https://genius.p.rapidapi.com/search?q=Kendrick%20Lamar", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8ceba9b737mshb836db1850c8b1ap10a407jsn8459c45ececa",
		"x-rapidapi-host": "genius.p.rapidapi.com"
	}
})
.then(response=>response.json())
.then(response=>{
    console.log(response["response"]["hits"])
    let resultados = response["response"]["hits"]
    resultados.forEach(element => {
		divResultados.innerHTML += element["result"]["title"];
	});
})