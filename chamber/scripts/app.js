const copyright = document.querySelector('#copyright');
const modification = document.querySelector('#modification')


copyright.textContent = `${new Date().getFullYear()}`;
modification.textContent = `Last Updated: ${(document.lastModified)}`;