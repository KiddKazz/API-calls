function storeLocal() {
    localStorage.setItem('customerName',document.getElementById('CustomerInputName').value);
}

function removeLocal() {
    localStorage.removeItem('customerName');
}

function storeSession() {
    sessionStorage.setItem('customerName',document.getElementById('CustomerInputName').value);
}

function removeSession() {
    sessionStorage.removeItem('customerName');
}