document.addEventListener('DOMContentLoaded', () => {
    fetch('data/rental-prices.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#rental-table tbody');
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.type}</td>
                    <td>${item.maxPersons}</td>
                    <td>$${item.reservation.halfDay}</td>
                    <td>$${item.reservation.fullDay}</td>
                    <td>$${item.walkIn.halfDay}</td>
                    <td>$${item.walkIn.fullDay}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching rental data:', error));
});