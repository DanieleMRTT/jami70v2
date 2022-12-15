function showHello(str) {
	var request = new XMLHttpRequest();// oggetto che manda richieste HTTP che serve per operazioni AJAX
	
	request.onreadystatechange = function(){ //funzione callback che ascolta ogni cambiamento: stato 4 = loading completed e status 200 = completato/successo
		if(this.readyState == 4 && this.status == 200){
			console.log(request.responseText);//stringa che contiene il body della risposta HTTP
			document.getElementById("ServerResponse").innerHTML = request.responseText;
		}
	};
	//
	
	request.open("GET","saluto?user=" +str, true);// inizializza e imposto la richiesta da formulare al server, (metodo, percorso?parametro + dati da inviare)
	request.send(); // invia richiesta(parametro/dati) al server 
	
	
	
	
}