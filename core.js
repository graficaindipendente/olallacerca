
document.getElementById('urlForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previene il refresh della pagina
    const url = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Pulisce i risultati precedenti

    try {
        // Esegui la richiesta per ottenere il codice sorgente della pagina
        const response = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
        const text = await response.text();

        // RegExp per trovare "SKU" e i 40 caratteri successivi
        const regex = /"sku".{0,40}/g;
        let match;
        const results = [];

        // Esegui la ricerca nel testo HTML
        while ((match = regex.exec(text)) !== null) {
            results.push(match[0]);
        }

        // Visualizza i risultati
        if (results.length > 0) {
            resultsDiv.innerHTML = "<h2>stringhe trovate:</h2>";
            results.forEach(result => {
                const p = document.createElement('p');
                p.textContent = result;
                resultsDiv.appendChild(p);
            });
        } else {
            resultsDiv.textContent = 'Nessuna stringa SKU trovata.';
        }
    } catch (error) {
        resultsDiv.textContent = 'Errore durante il recupero del codice HTML: ' + error;
    }
});

function searchCOD() {
    const codice1 = document.getElementById('codInput').value.trim();

    if (codice1) {
        let nuovoURL = `https://www.olalla.it/wp-admin/post.php?post=${codice1}&action=edit`;
        window.open(nuovoURL, '_blank'); // Apri in una nuova scheda
    } else {
        alert("Per favore, inserisci un codice COD.");
    }
}

function searchSKU() {
    const codice2 = document.getElementById('skuInput').value.trim();

    if (codice2) {
        const nuovoURL = `https://www.olalla.it/wp-admin/edit.php?s=${codice2}&post_status=all&post_type=product&action=-1&seo_filter&product_type&stock_status&wcpv_product_vendors&paged=1&action2=-1`;
        window.open(nuovoURL, '_blank'); // Apri in una nuova scheda
    } else {
        alert("Per favore, inserisci un codice SKU.");
    }
}

function searchPROD() {
    const codice3 = document.getElementById('prodInput').value.trim();

    if (codice3) {
        let nuovoURL = `https://www.olalla.it/?s=${codice3}&post_type=product`;
        window.open(nuovoURL, '_blank'); // Apri in una nuova scheda
    } else {
        alert("Per favore, inserisci una descrizione migliore.");
    }
}

function resetForms() {
    document.getElementById('codInput').value = '';
    document.getElementById('url').value = '';
    document.getElementById('prodInput').value = '';
    document.getElementById('results').innerHTML = ''; // Pulisce i risultati
}