document.getElementById("submitButton").addEventListener("click", function() {
    const input = document.getElementById("dato").value.trim();

    if (/^\d{6}$/.test(input)) {
        searchCOD(input);
    } else if (isValidURL(input)) {
        searchSKU(input);
    } else {
        searchPROD(input);
    }
});

function searchCOD(code) {
    const baseURL = "https://www.olalla.it/wp-admin/post.php?post=000000&action=edit&classic-editor";
    const url = baseURL.replace("000000", code);
    window.open(url, '_blank');
    console.log("Aperto URL:", url);
}

function searchSKU(url) {
    window.open(url, '_blank');
    console.log("Aperto URL SKU:", url);
}

function searchPROD(data) {
    const baseURL = "https://www.olalla.it/?s=000000&post_type=product";
    const url = baseURL.replace("000000", code);
    window.open(url, '_blank');
    console.log("Aperto URL:", url);
}


function isValidURL(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;  
    }
}
