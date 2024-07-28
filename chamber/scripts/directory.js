document.addEventListener('DOMContentLoaded', () => {
    const directoryElement = document.getElementById('directory');
    const toggleButton = document.getElementById('toggleView');
    let isGridView = true;
    let membersData = [];

    function fetchMembers() {
        fetch('members.json')
            .then(response => response.json())
            .then(data => {
                membersData = data;
                displayMembers(membersData, isGridView);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    fetchMembers();

    toggleButton.addEventListener('click', () => {
        isGridView = !isGridView;
        directoryElement.classList.toggle('grid-view', isGridView);
        directoryElement.classList.toggle('list-view', !isGridView);
        displayMembers(membersData, isGridView);
    });

    function displayMembers(members, isGrid) {
        directoryElement.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            if (!isGrid) {
                memberCard.classList.add('list-item');
            }

            const memberHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank">Website</a>
                <p>Membership Level: ${member.membership_level}</p>
            `;
            memberCard.innerHTML = memberHTML;
            directoryElement.appendChild(memberCard);
        });
    }
});