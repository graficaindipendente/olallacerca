document.getElementById("submitButton").addEventListener("click", function() {
    const input = document.getElementById("dato").value;

    if (/^\d{6}$/.test(input)) {
        searchCOD(input);
    } else if (isValidURL(input)) {
        searchSKU(input);
    } else {
        searchPROD(input);
    }
});

function searchCOD(code) {
    console.log("Esecuzione di searchCOD con codice:", code);
    // Aggiungi qui il codice per searchCOD
}

function searchSKU(url) {
    console.log("Esecuzione di searchSKU con URL:", url);
    // Aggiungi qui il codice per searchSKU
}

function searchPROD(data) {
    console.log("Esecuzione di searchPROD con dato:", data);
    // Aggiungi qui il codice per searchPROD
}

function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;  
    }
}
