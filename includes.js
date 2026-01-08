// Load header
function loadPartial(url, elementId) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) { // 0 for local files
                document.getElementById(elementId).innerHTML = xhr.responseText;
            } else {
                console.error(`Error loading ${url}:`, xhr.status);
            }
        }
    };
    xhr.send();
}

loadPartial('partials/header.html', 'header');
loadPartial('partials/footer.html', 'footer');
