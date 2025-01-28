// Funksioni për të shfaqur detajet e produktit
function showDetails(name, details) {
    document.getElementById('produkt-emri').innerText = name;
    document.getElementById('produkt-permbajtja').innerText = details;
    document.getElementById('produkt-detaje').style.display = 'block';
}

// Funksioni për të mbyllur detajet e produktit
function closeDetails() {
    document.getElementById('produkt-detaje').style.display = 'none';
}
