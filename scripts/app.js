const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');
const modification = document.querySelector('#modification')

h1.textContent = `Ashlynn Jean Hall`;

copyright.textContent = `${new Date().getFullYear()}`;
modification.textContent = `Last Updated: ${(document.lastModified)}`;