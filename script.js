document.addEventListener('DOMContentLoaded', () => {
    console.log('RAAHTECH site loaded successfully.');

    fetch("/partials/header.html")
        .then(res => res.text())
        .then(data => document.querySelector("header").innerHTML = data);

    fetch("/partials/footer.html")
        .then(res => res.text())
        .then(data => document.querySelector("footer").innerHTML = data);
});
