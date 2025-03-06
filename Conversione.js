async function ConvertitoreMoney() {
    let Qunatità = document.getElementById("Qunatità").value;
    let SceltaValutaIniziale = document.getElementById("SceltaValutaIniziale").value;
    let SceltaValutaFinale = document.getElementById("SceltaValutaFinale").value;
    let RisultatoConvertitoreElement = document.getElementById("RisultatoConvertitore");
    
    if (Qunatità == "" || Qunatità <= 0) {
        RisultatoConvertitoreElement.innerText = "Devi mettere un numero valido, sennò non funziona!";
        return;
    }
    
    try {
        let response = await fetch("https://api.exchangerate-api.com/v4/latest/" + SceltaValutaIniziale);
        let data = await response.json();
        let rate = data.rates[SceltaValutaFinale];
        let convertedAmount = Qunatità * rate;
        RisultatoConvertitoreElement.innerText = Qunatità + " " + SceltaValutaIniziale + " sono " + convertedAmount.toFixed(2) + " " + SceltaValutaFinale;
    } catch (errore) {
        console.log("Oh no, qualcosa è andato storto!", errore);
        RisultatoConvertitoreElement.innerText = "Non riesco a recuperare i dati, riprova più tardi...";
    }
}